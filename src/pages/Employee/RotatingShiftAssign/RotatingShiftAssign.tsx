import React, { useState, useMemo } from 'react';
import Sidebar from '../../../components/Layout/Sidebar';
import Navbar from '../../../components/Layout/Navbar';
import { useSidebar } from '../../../contexts/SidebarContext';
import './RotatingShiftAssign.css';

interface Employee {
  id: string;
  name: string;
  avatar: string;
  badgeId: string;
  department: string;
  position: string;
  currentShift?: string;
}

interface ShiftPattern {
  id: string;
  name: string;
  description: string;
  shifts: Array<{
    name: string;
    startTime: string;
    endTime: string;
    days: string[];
  }>;
  rotationPeriod: number; // in days
  isActive: boolean;
}

interface Assignment {
  id: string;
  employee: Employee;
  shiftPattern: ShiftPattern;
  startDate: string;
  endDate?: string;
  currentWeek: number;
  status: 'active' | 'upcoming' | 'completed';
  assignedBy: string;
  assignedDate: string;
}

interface CreateRotatingShiftAssignForm {
  employee: string;
  shiftPattern: string;
  startDate: string;
  endDate: string;
  rotationPeriod: string;
  description: string;
}

const RotatingShiftAssign: React.FC = () => {
  const [viewMode, setViewMode] = useState<'assignments' | 'patterns'>('assignments');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const { isCollapsed } = useSidebar();

  // Create modal state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | 'warning';
    message: string;
  } | null>(null);

  const [createForm, setCreateForm] = useState<CreateRotatingShiftAssignForm>({
    employee: '',
    shiftPattern: '',
    startDate: '',
    endDate: '',
    rotationPeriod: '',
    description: ''
  });

  // Notification system
  const showNotification = (type: 'success' | 'error' | 'warning', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  // Form handlers
  const handleInputChange = (field: keyof CreateRotatingShiftAssignForm, value: string) => {
    setCreateForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Reset form
  const resetForm = () => {
    setCreateForm({
      employee: '',
      shiftPattern: '',
      startDate: '',
      endDate: '',
      rotationPeriod: '',
      description: ''
    });
  };

  // Handle create rotating shift assignment
  const handleCreateRotatingShiftAssign = async () => {
    // Validate required fields
    if (!createForm.employee || !createForm.shiftPattern || !createForm.startDate || !createForm.description) {
      showNotification('error', 'Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      resetForm();
      setShowCreateModal(false);
      setIsLoading(false);
      showNotification('success', 'Rotating shift assignment created successfully!');
    } catch (error) {
      setIsLoading(false);
      showNotification('error', 'Failed to create rotating shift assignment. Please try again.');
    }
  };

  // Mock data for shift patterns
  const mockShiftPatterns: ShiftPattern[] = [
    {
      id: 'SP-001',
      name: '3-Shift Rotation',
      description: 'Morning, Evening, Night rotation every week',
      shifts: [
        { name: 'Morning', startTime: '06:00', endTime: '14:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
        { name: 'Evening', startTime: '14:00', endTime: '22:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
        { name: 'Night', startTime: '22:00', endTime: '06:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] }
      ],
      rotationPeriod: 7,
      isActive: true
    },
    {
      id: 'SP-002',
      name: '2-Shift Weekend',
      description: 'Day and night shifts for weekend coverage',
      shifts: [
        { name: 'Day', startTime: '08:00', endTime: '20:00', days: ['Saturday', 'Sunday'] },
        { name: 'Night', startTime: '20:00', endTime: '08:00', days: ['Saturday', 'Sunday'] }
      ],
      rotationPeriod: 14,
      isActive: true
    }
  ];

  // Mock data for assignments
  const mockAssignments: Assignment[] = [
    {
      id: 'RSA-001',
      employee: {
        id: 'EMP-001',
        name: 'John Smith',
        avatar: '/avatars/john-smith.jpg',
        badgeId: 'HOH-001',
        department: 'Manufacturing',
        position: 'Production Worker',
        currentShift: 'Morning'
      },
      shiftPattern: mockShiftPatterns[0],
      startDate: '2024-01-15',
      currentWeek: 2,
      status: 'active',
      assignedBy: 'Manager Name',
      assignedDate: '2024-01-10'
    },
    {
      id: 'RSA-002',
      employee: {
        id: 'EMP-002',
        name: 'Sarah Johnson',
        avatar: '/avatars/sarah-johnson.jpg',
        badgeId: 'HOH-002',
        department: 'Security',
        position: 'Security Guard',
        currentShift: 'Night'
      },
      shiftPattern: mockShiftPatterns[1],
      startDate: '2024-01-22',
      currentWeek: 1,
      status: 'upcoming',
      assignedBy: 'Manager Name',
      assignedDate: '2024-01-18'
    },
    {
      id: 'RSA-003',
      employee: {
        id: 'EMP-003',
        name: 'Mike Chen',
        avatar: '/avatars/mike-chen.jpg',
        badgeId: 'HOH-003',
        department: 'Manufacturing',
        position: 'Quality Inspector',
        currentShift: 'Evening'
      },
      shiftPattern: mockShiftPatterns[0],
      startDate: '2023-12-01',
      endDate: '2024-01-20',
      currentWeek: 3,
      status: 'completed',
      assignedBy: 'Manager Name',
      assignedDate: '2023-11-25'
    }
  ];

  // Filter and search logic for assignments
  const filteredAssignments = useMemo(() => {
    return mockAssignments.filter(assignment => {
      const matchesSearch = assignment.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          assignment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          assignment.shiftPattern.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || assignment.status === statusFilter;
      const matchesDepartment = departmentFilter === 'all' || assignment.employee.department === departmentFilter;
      
      return matchesSearch && matchesStatus && matchesDepartment;
    });
  }, [mockAssignments, searchTerm, statusFilter, departmentFilter]);

  // Filter shift patterns
  const filteredPatterns = useMemo(() => {
    return mockShiftPatterns.filter(pattern => {
      return pattern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             pattern.description.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [mockShiftPatterns, searchTerm]);

  // Statistics
  const stats = useMemo(() => {
    const totalAssignments = mockAssignments.length;
    const activeAssignments = mockAssignments.filter(a => a.status === 'active').length;
    const upcomingAssignments = mockAssignments.filter(a => a.status === 'upcoming').length;
    const totalPatterns = mockShiftPatterns.length;
    const activePatterns = mockShiftPatterns.filter(p => p.isActive).length;
    
    return { totalAssignments, activeAssignments, upcomingAssignments, totalPatterns, activePatterns };
  }, [mockAssignments, mockShiftPatterns]);

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      active: 'oh-status-badge oh-status-badge--active',
      upcoming: 'oh-status-badge oh-status-badge--upcoming',
      completed: 'oh-status-badge oh-status-badge--completed'
    };
    
    return (
      <span className={statusClasses[status as keyof typeof statusClasses]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCurrentShiftInfo = (assignment: Assignment) => {
    const currentShift = assignment.shiftPattern.shifts[assignment.currentWeek % assignment.shiftPattern.shifts.length];
    return currentShift;
  };

  return (
    <div className="oh-dashboard">
      <Sidebar />
      <div className={`oh-main-content ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Navbar pageTitle="Rotating Shift Assign" />
        <div className="oh-content">
          <div className="oh-container">
            {/* Header Section */}
            <div className="oh-page-header">
              <div className="oh-page-header__content">
                <h1 className="oh-page-title">Rotating Shift Assign</h1>
                <p className="oh-page-subtitle">Manage rotating shift assignments and patterns</p>
              </div>
              <div className="oh-page-header__actions">
                <button 
                  className="oh-btn-create-main"
                  onClick={() => setShowCreateModal(true)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Assign Rotating Shift
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="oh-tabs">
              <button 
                className={`oh-tab ${viewMode === 'assignments' ? 'oh-tab--active' : ''}`}
                onClick={() => setViewMode('assignments')}
              >
                Assignments ({stats.totalAssignments})
              </button>
              <button 
                className={`oh-tab ${viewMode === 'patterns' ? 'oh-tab--active' : ''}`}
                onClick={() => setViewMode('patterns')}
              >
                Shift Patterns ({stats.totalPatterns})
              </button>
            </div>

            {/* Statistics Cards */}
            <div className="oh-stats-grid">
              {viewMode === 'assignments' ? (
                <>
                  <div className="oh-stat-card">
                    <div className="oh-stat-card__icon oh-stat-card__icon--total">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div className="oh-stat-card__content">
                      <div className="oh-stat-card__value">{stats.totalAssignments}</div>
                      <div className="oh-stat-card__label">Total Assignments</div>
                    </div>
                  </div>

                  <div className="oh-stat-card">
                    <div className="oh-stat-card__icon oh-stat-card__icon--active">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                      </svg>
                    </div>
                    <div className="oh-stat-card__content">
                      <div className="oh-stat-card__value">{stats.activeAssignments}</div>
                      <div className="oh-stat-card__label">Active</div>
                    </div>
                  </div>

                  <div className="oh-stat-card">
                    <div className="oh-stat-card__icon oh-stat-card__icon--upcoming">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                        <path d="M8 14h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 18h.01"></path>
                        <path d="M12 18h.01"></path>
                        <path d="M16 18h.01"></path>
                      </svg>
                    </div>
                    <div className="oh-stat-card__content">
                      <div className="oh-stat-card__value">{stats.upcomingAssignments}</div>
                      <div className="oh-stat-card__label">Upcoming</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="oh-stat-card">
                    <div className="oh-stat-card__icon oh-stat-card__icon--total">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <div className="oh-stat-card__content">
                      <div className="oh-stat-card__value">{stats.totalPatterns}</div>
                      <div className="oh-stat-card__label">Total Patterns</div>
                    </div>
                  </div>

                  <div className="oh-stat-card">
                    <div className="oh-stat-card__icon oh-stat-card__icon--active">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9,11 12,14 22,4"></polyline>
                        <path d="m21,4 0,7 -5,0"></path>
                        <path d="M5.5,7 8.5,7"></path>
                        <path d="M7,16 l-1.5,0 0,-4.5"></path>
                      </svg>
                    </div>
                    <div className="oh-stat-card__content">
                      <div className="oh-stat-card__value">{stats.activePatterns}</div>
                      <div className="oh-stat-card__label">Active Patterns</div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Filters and Controls */}
            <div className="oh-controls">
              <div className="oh-controls__left">
                <div className="oh-search-field">
                  <svg className="oh-search-field__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  <input
                    type="text"
                    className="oh-search-field__input"
                    placeholder={viewMode === 'assignments' ? "Search assignments..." : "Search patterns..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="oh-controls__right">
                {viewMode === 'assignments' && (
                  <>
                    <select 
                      className="oh-select"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="upcoming">Upcoming</option>
                      <option value="completed">Completed</option>
                    </select>

                    <select 
                      className="oh-select"
                      value={departmentFilter}
                      onChange={(e) => setDepartmentFilter(e.target.value)}
                    >
                      <option value="all">All Departments</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Security">Security</option>
                      <option value="Maintenance">Maintenance</option>
                    </select>
                  </>
                )}
              </div>
            </div>

            {/* Content Area */}
            <div className="oh-content-area">
              {viewMode === 'assignments' ? (
                <div className="oh-table-container">
                  <table className="oh-table">
                    <thead>
                      <tr>
                        <th>Assignment ID</th>
                        <th>Employee</th>
                        <th>Shift Pattern</th>
                        <th>Current Shift</th>
                        <th>Week</th>
                        <th>Start Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAssignments.map((assignment) => {
                        const currentShift = getCurrentShiftInfo(assignment);
                        return (
                          <tr key={assignment.id}>
                            <td>
                              <span className="oh-assignment-id">{assignment.id}</span>
                            </td>
                            <td>
                              <div className="oh-employee-info">
                                <div className="oh-employee-avatar">
                                  {assignment.employee.name.charAt(0)}
                                </div>
                                <div className="oh-employee-details">
                                  <div className="oh-employee-name">{assignment.employee.name}</div>
                                  <div className="oh-employee-badge">{assignment.employee.badgeId}</div>
                                  <div className="oh-employee-dept">{assignment.employee.department}</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="oh-pattern-info">
                                <div className="oh-pattern-name">{assignment.shiftPattern.name}</div>
                                <div className="oh-pattern-desc">{assignment.shiftPattern.description}</div>
                              </div>
                            </td>
                            <td>
                              <div className="oh-current-shift">
                                <div className="oh-shift-name">{currentShift?.name}</div>
                                <div className="oh-shift-time">
                                  {currentShift?.startTime} - {currentShift?.endTime}
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="oh-week-badge">Week {assignment.currentWeek}</span>
                            </td>
                            <td>{formatDate(assignment.startDate)}</td>
                            <td>{getStatusBadge(assignment.status)}</td>
                            <td>
                              <div className="oh-actions">
                                <button className="oh-btn oh-btn--sm oh-btn--ghost">View</button>
                                {assignment.status === 'active' && (
                                  <button className="oh-btn oh-btn--sm oh-btn--secondary">Modify</button>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="oh-patterns-grid">
                  {filteredPatterns.map((pattern) => (
                    <div key={pattern.id} className="oh-pattern-card">
                      <div className="oh-pattern-card__header">
                        <div className="oh-pattern-card__title">
                          <h3>{pattern.name}</h3>
                          <span className={`oh-pattern-status ${pattern.isActive ? 'oh-pattern-status--active' : 'oh-pattern-status--inactive'}`}>
                            {pattern.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                        <p className="oh-pattern-card__description">{pattern.description}</p>
                      </div>

                      <div className="oh-pattern-card__details">
                        <div className="oh-pattern-detail">
                          <span className="oh-pattern-detail__label">Rotation Period:</span>
                          <span className="oh-pattern-detail__value">{pattern.rotationPeriod} days</span>
                        </div>
                        <div className="oh-pattern-detail">
                          <span className="oh-pattern-detail__label">Shifts:</span>
                          <span className="oh-pattern-detail__value">{pattern.shifts.length} shifts</span>
                        </div>
                      </div>

                      <div className="oh-pattern-card__shifts">
                        {pattern.shifts.map((shift, index) => (
                          <div key={index} className="oh-shift-item">
                            <div className="oh-shift-item__name">{shift.name}</div>
                            <div className="oh-shift-item__time">{shift.startTime} - {shift.endTime}</div>
                            <div className="oh-shift-item__days">
                              {shift.days.map(day => day.substring(0, 3)).join(', ')}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="oh-pattern-card__actions">
                        <button className="oh-btn oh-btn--sm oh-btn--ghost">View Details</button>
                        <button className="oh-btn oh-btn--sm oh-btn--primary">Assign Employees</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {((viewMode === 'assignments' && filteredAssignments.length === 0) || 
                (viewMode === 'patterns' && filteredPatterns.length === 0)) && (
                <div className="oh-empty-state">
                  <div className="oh-empty-state__icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </div>
                  <h3 className="oh-empty-state__title">
                    {viewMode === 'assignments' ? 'No assignments found' : 'No shift patterns found'}
                  </h3>
                  <p className="oh-empty-state__message">
                    {viewMode === 'assignments' 
                      ? 'No employees assigned to rotating shifts.' 
                      : 'No shift patterns have been created yet.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className={`oh-notification oh-notification--${notification.type}`}>
          <div className="oh-notification__content">
            <span className="oh-notification__message">{notification.message}</span>
            <button 
              className="oh-notification__close"
              onClick={() => setNotification(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Create Rotating Shift Assignment Modal */}
      {showCreateModal && (
        <div className="oh-modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="oh-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="oh-modal-header">
              <h2>Assign Rotating Shift</h2>
              <button 
                className="oh-modal-close"
                onClick={() => setShowCreateModal(false)}
              >
                ×
              </button>
            </div>
            
            <div className="oh-modal-body">
              <form className="oh-create-form">
                <div className="oh-form-row">
                  <div className="oh-form-group">
                    <label className="oh-form-label">Employee *</label>
                    <select 
                      className="oh-form-select"
                      value={createForm.employee}
                      onChange={(e) => handleInputChange('employee', e.target.value)}
                    >
                      <option value="">Select Employee</option>
                      <option value="john-doe">John Doe</option>
                      <option value="jane-smith">Jane Smith</option>
                      <option value="mike-johnson">Mike Johnson</option>
                      <option value="sarah-wilson">Sarah Wilson</option>
                      <option value="david-brown">David Brown</option>
                      <option value="lisa-garcia">Lisa Garcia</option>
                    </select>
                  </div>
                  
                  <div className="oh-form-group">
                    <label className="oh-form-label">Shift Pattern *</label>
                    <select 
                      className="oh-form-select"
                      value={createForm.shiftPattern}
                      onChange={(e) => handleInputChange('shiftPattern', e.target.value)}
                    >
                      <option value="">Select Shift Pattern</option>
                      <option value="morning-afternoon-night">Morning-Afternoon-Night</option>
                      <option value="day-night-off">Day-Night-Off</option>
                      <option value="continental">Continental Shifts</option>
                      <option value="dupont">DuPont Schedule</option>
                      <option value="pitman">Pitman Schedule</option>
                    </select>
                  </div>
                </div>

                <div className="oh-form-row">
                  <div className="oh-form-group">
                    <label className="oh-form-label">Start Date *</label>
                    <input 
                      type="date"
                      className="oh-form-input"
                      value={createForm.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                    />
                  </div>
                  
                  <div className="oh-form-group">
                    <label className="oh-form-label">End Date</label>
                    <input 
                      type="date"
                      className="oh-form-input"
                      value={createForm.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                    />
                  </div>
                </div>

                <div className="oh-form-row">
                  <div className="oh-form-group">
                    <label className="oh-form-label">Rotation Period (Days)</label>
                    <select 
                      className="oh-form-select"
                      value={createForm.rotationPeriod}
                      onChange={(e) => handleInputChange('rotationPeriod', e.target.value)}
                    >
                      <option value="">Select Period</option>
                      <option value="7">Weekly (7 days)</option>
                      <option value="14">Bi-weekly (14 days)</option>
                      <option value="21">3 weeks (21 days)</option>
                      <option value="28">Monthly (28 days)</option>
                    </select>
                  </div>
                </div>

                <div className="oh-form-group">
                  <label className="oh-form-label">Description *</label>
                  <textarea 
                    className="oh-form-textarea"
                    placeholder="Enter description for the rotating shift assignment..."
                    value={createForm.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>
              </form>
            </div>
            
            <div className="oh-modal-footer">
              <button 
                type="button"
                className="oh-btn oh-btn--secondary"
                onClick={() => setShowCreateModal(false)}
              >
                Cancel
              </button>
              <button 
                type="button"
                className="oh-btn oh-btn--primary"
                onClick={handleCreateRotatingShiftAssign}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="oh-loading-spinner"></div>
                    Assigning...
                  </>
                ) : (
                  'Assign Shift'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RotatingShiftAssign;
