import React, { useState, useMemo } from 'react';
import Sidebar from '../../../components/Layout/Sidebar';
import Navbar from '../../../components/Layout/Navbar';
import { useSidebar } from '../../../contexts/SidebarContext';
import './WorkTypeRequests.css';

interface WorkTypeRequest {
  id: string;
  employee: {
    id: string;
    name: string;
    avatar: string;
    badgeId: string;
    department: string;
    position: string;
  };
  requestedWorkType: {
    name: string;
    description: string;
    isRemote: boolean;
  };
  currentWorkType: {
    name: string;
    description: string;
    isRemote: boolean;
  };
  requestDate: string;
  effectiveDate: string;
  endDate?: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  requestType: 'temporary' | 'permanent';
  approvedBy?: string;
  approvedDate?: string;
  comments?: string;
}

interface CreateWorkTypeRequestForm {
  employee: string;
  requestingWorkType: string;
  requestedDate: string;
  requestedTill: string;
  description: string;
  permanentRequest: boolean;
}

const WorkTypeRequests: React.FC = () => {
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);
  
  const [createForm, setCreateForm] = useState<CreateWorkTypeRequestForm>({
    employee: '',
    requestingWorkType: '',
    requestedDate: '',
    requestedTill: '',
    description: '',
    permanentRequest: false
  });
  
  const { isCollapsed } = useSidebar();

  // Show notification
  const showNotification = (type: 'success' | 'error' | 'info', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  // Handle form input changes
  const handleInputChange = (field: keyof CreateWorkTypeRequestForm, value: string | boolean) => {
    setCreateForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Reset form
  const resetForm = () => {
    setCreateForm({
      employee: '',
      requestingWorkType: '',
      requestedDate: '',
      requestedTill: '',
      description: '',
      permanentRequest: false
    });
  };

  // Handle create work type request
  const handleCreateWorkTypeRequest = async () => {
    // Validation
    if (!createForm.employee || !createForm.requestingWorkType || !createForm.requestedDate || !createForm.description) {
      showNotification('error', 'Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setShowCreateModal(false);
      resetForm();
      showNotification('success', 'Work type request created successfully!');
    } catch (error) {
      showNotification('error', 'Failed to create work type request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Mock data for work type requests
  const mockRequests: WorkTypeRequest[] = [
    {
      id: 'WTR-001',
      employee: {
        id: 'EMP-001',
        name: 'John Smith',
        avatar: '/avatars/john-smith.jpg',
        badgeId: 'HOH-001',
        department: 'Engineering',
        position: 'Senior Developer'
      },
      requestedWorkType: {
        name: 'Remote Work',
        description: 'Work from home arrangement',
        isRemote: true
      },
      currentWorkType: {
        name: 'Office Work',
        description: 'Standard office arrangement',
        isRemote: false
      },
      requestDate: '2024-01-15',
      effectiveDate: '2024-01-22',
      endDate: '2024-03-22',
      reason: 'Need to care for sick family member temporarily',
      status: 'pending',
      priority: 'high',
      requestType: 'temporary'
    },
    {
      id: 'WTR-002',
      employee: {
        id: 'EMP-002',
        name: 'Sarah Johnson',
        avatar: '/avatars/sarah-johnson.jpg',
        badgeId: 'HOH-002',
        department: 'Marketing',
        position: 'Marketing Manager'
      },
      requestedWorkType: {
        name: 'Hybrid Work',
        description: '3 days office, 2 days remote',
        isRemote: false
      },
      currentWorkType: {
        name: 'Office Work',
        description: 'Standard office arrangement',
        isRemote: false
      },
      requestDate: '2024-01-14',
      effectiveDate: '2024-02-01',
      reason: 'Better work-life balance and improved productivity',
      status: 'approved',
      priority: 'medium',
      requestType: 'permanent',
      approvedBy: 'Manager Name',
      approvedDate: '2024-01-16'
    },
    {
      id: 'WTR-003',
      employee: {
        id: 'EMP-003',
        name: 'Mike Chen',
        avatar: '/avatars/mike-chen.jpg',
        badgeId: 'HOH-003',
        department: 'Design',
        position: 'UI/UX Designer'
      },
      requestedWorkType: {
        name: 'Flexible Hours',
        description: 'Flexible working hours arrangement',
        isRemote: false
      },
      currentWorkType: {
        name: 'Standard Hours',
        description: '9 AM - 5 PM working hours',
        isRemote: false
      },
      requestDate: '2024-01-12',
      effectiveDate: '2024-01-20',
      reason: 'Need to accommodate children school schedule',
      status: 'rejected',
      priority: 'low',
      requestType: 'permanent',
      comments: 'Request denied due to team collaboration requirements'
    },
    {
      id: 'WTR-004',
      employee: {
        id: 'EMP-004',
        name: 'Emily Davis',
        avatar: '/avatars/emily-davis.jpg',
        badgeId: 'HOH-004',
        department: 'Sales',
        position: 'Sales Executive'
      },
      requestedWorkType: {
        name: 'Field Work',
        description: 'Client-facing field work arrangement',
        isRemote: false
      },
      currentWorkType: {
        name: 'Office Work',
        description: 'Standard office arrangement',
        isRemote: false
      },
      requestDate: '2024-01-13',
      effectiveDate: '2024-01-25',
      reason: 'Expanding territory requires more client visits',
      status: 'pending',
      priority: 'medium',
      requestType: 'permanent'
    }
  ];

  // Filter and search logic
  const filteredRequests = useMemo(() => {
    return mockRequests.filter(request => {
      const matchesSearch = request.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          request.requestedWorkType.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
      const matchesPriority = priorityFilter === 'all' || request.priority === priorityFilter;
      const matchesType = typeFilter === 'all' || request.requestType === typeFilter;
      
      return matchesSearch && matchesStatus && matchesPriority && matchesType;
    });
  }, [mockRequests, searchTerm, statusFilter, priorityFilter, typeFilter]);

  // Statistics
  const stats = useMemo(() => {
    const total = mockRequests.length;
    const pending = mockRequests.filter(r => r.status === 'pending').length;
    const approved = mockRequests.filter(r => r.status === 'approved').length;
    const rejected = mockRequests.filter(r => r.status === 'rejected').length;
    
    return { total, pending, approved, rejected };
  }, [mockRequests]);

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      pending: 'oh-status-badge oh-status-badge--pending',
      approved: 'oh-status-badge oh-status-badge--approved',
      rejected: 'oh-status-badge oh-status-badge--rejected'
    };
    
    return (
      <span className={statusClasses[status as keyof typeof statusClasses]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const priorityClasses = {
      low: 'oh-priority-badge oh-priority-badge--low',
      medium: 'oh-priority-badge oh-priority-badge--medium',
      high: 'oh-priority-badge oh-priority-badge--high'
    };
    
    return (
      <span className={priorityClasses[priority as keyof typeof priorityClasses]}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
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

  return (
    <div className="oh-dashboard">
      <Sidebar />
      <div className={`oh-main-content ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Navbar pageTitle="Work Type Requests" />
        <div className="oh-content">
          <div className="oh-container">
            {/* Header Section */}
            <div className="oh-page-header">
              <div className="oh-page-header__content">
                <h1 className="oh-page-title">Work Type Requests</h1>
                <p className="oh-page-subtitle">Manage and track work type change requests</p>
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
                  Create Work Type Request
                </button>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="oh-stats-grid">
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
                  <div className="oh-stat-card__value">{stats.total}</div>
                  <div className="oh-stat-card__label">Total Requests</div>
                </div>
              </div>

              <div className="oh-stat-card">
                <div className="oh-stat-card__icon oh-stat-card__icon--pending">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12,6 12,12 16,14"></polyline>
                  </svg>
                </div>
                <div className="oh-stat-card__content">
                  <div className="oh-stat-card__value">{stats.pending}</div>
                  <div className="oh-stat-card__label">Pending</div>
                </div>
              </div>

              <div className="oh-stat-card">
                <div className="oh-stat-card__icon oh-stat-card__icon--approved">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,11 12,14 22,4"></polyline>
                    <path d="m21,4 0,7 -5,0"></path>
                    <path d="M5.5,7 8.5,7"></path>
                    <path d="M7,16 l-1.5,0 0,-4.5"></path>
                  </svg>
                </div>
                <div className="oh-stat-card__content">
                  <div className="oh-stat-card__value">{stats.approved}</div>
                  <div className="oh-stat-card__label">Approved</div>
                </div>
              </div>

              <div className="oh-stat-card">
                <div className="oh-stat-card__icon oh-stat-card__icon--rejected">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                </div>
                <div className="oh-stat-card__content">
                  <div className="oh-stat-card__value">{stats.rejected}</div>
                  <div className="oh-stat-card__label">Rejected</div>
                </div>
              </div>
            </div>

            {/* Filters and Controls */}
            <div className="oh-controls">
              <div className="oh-controls__left">
                <div className="oh-view-toggle">
                  <button 
                    className={`oh-view-toggle__btn ${viewMode === 'table' ? 'oh-view-toggle__btn--active' : ''}`}
                    onClick={() => setViewMode('table')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6h18M3 12h18M3 18h18"></path>
                    </svg>
                  </button>
                  <button 
                    className={`oh-view-toggle__btn ${viewMode === 'grid' ? 'oh-view-toggle__btn--active' : ''}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </button>
                </div>

                <div className="oh-search-field">
                  <svg className="oh-search-field__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  <input
                    type="text"
                    className="oh-search-field__input"
                    placeholder="Search requests..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="oh-controls__right">
                <select 
                  className="oh-select"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>

                <select 
                  className="oh-select"
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                >
                  <option value="all">All Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>

                <select 
                  className="oh-select"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="temporary">Temporary</option>
                  <option value="permanent">Permanent</option>
                </select>
              </div>
            </div>

            {/* Content Area */}
            <div className="oh-content-area">
              {viewMode === 'table' ? (
                <div className="oh-table-container">
                  <table className="oh-table">
                    <thead>
                      <tr>
                        <th>Request ID</th>
                        <th>Employee</th>
                        <th>Current Work Type</th>
                        <th>Requested Work Type</th>
                        <th>Type</th>
                        <th>Effective Date</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRequests.map((request) => (
                        <tr key={request.id}>
                          <td>
                            <span className="oh-request-id">{request.id}</span>
                          </td>
                          <td>
                            <div className="oh-employee-info">
                              <div className="oh-employee-avatar">
                                {request.employee.name.charAt(0)}
                              </div>
                              <div className="oh-employee-details">
                                <div className="oh-employee-name">{request.employee.name}</div>
                                <div className="oh-employee-badge">{request.employee.badgeId}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="oh-work-type">
                              <div className="oh-work-type__name">{request.currentWorkType.name}</div>
                              <div className="oh-work-type__desc">{request.currentWorkType.description}</div>
                            </div>
                          </td>
                          <td>
                            <div className="oh-work-type">
                              <div className="oh-work-type__name">{request.requestedWorkType.name}</div>
                              <div className="oh-work-type__desc">{request.requestedWorkType.description}</div>
                            </div>
                          </td>
                          <td>
                            <span className={`oh-type-badge oh-type-badge--${request.requestType}`}>
                              {request.requestType.charAt(0).toUpperCase() + request.requestType.slice(1)}
                            </span>
                          </td>
                          <td>{formatDate(request.effectiveDate)}</td>
                          <td>{getPriorityBadge(request.priority)}</td>
                          <td>{getStatusBadge(request.status)}</td>
                          <td>
                            <div className="oh-actions">
                              <button className="oh-btn oh-btn--sm oh-btn--ghost">View</button>
                              {request.status === 'pending' && (
                                <>
                                  <button className="oh-btn oh-btn--sm oh-btn--success">Approve</button>
                                  <button className="oh-btn oh-btn--sm oh-btn--danger">Reject</button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="oh-grid-view">
                  {filteredRequests.map((request) => (
                    <div key={request.id} className="oh-request-card">
                      <div className="oh-request-card__header">
                        <div className="oh-request-card__id">{request.id}</div>
                        <div className="oh-request-card__status">
                          {getStatusBadge(request.status)}
                        </div>
                      </div>
                      
                      <div className="oh-request-card__employee">
                        <div className="oh-employee-avatar">
                          {request.employee.name.charAt(0)}
                        </div>
                        <div className="oh-employee-details">
                          <div className="oh-employee-name">{request.employee.name}</div>
                          <div className="oh-employee-badge">{request.employee.badgeId}</div>
                          <div className="oh-employee-dept">{request.employee.department}</div>
                        </div>
                      </div>

                      <div className="oh-request-card__work-types">
                        <div className="oh-work-type-change">
                          <div className="oh-work-type-from">
                            <span className="oh-work-type-label">From:</span>
                            <span className="oh-work-type-name">{request.currentWorkType.name}</span>
                          </div>
                          <div className="oh-work-type-arrow">→</div>
                          <div className="oh-work-type-to">
                            <span className="oh-work-type-label">To:</span>
                            <span className="oh-work-type-name">{request.requestedWorkType.name}</span>
                          </div>
                        </div>
                      </div>

                      <div className="oh-request-card__meta">
                        <div className="oh-meta-item">
                          <span className="oh-meta-label">Type:</span>
                          <span className={`oh-type-badge oh-type-badge--${request.requestType}`}>
                            {request.requestType.charAt(0).toUpperCase() + request.requestType.slice(1)}
                          </span>
                        </div>
                        <div className="oh-meta-item">
                          <span className="oh-meta-label">Priority:</span>
                          {getPriorityBadge(request.priority)}
                        </div>
                        <div className="oh-meta-item">
                          <span className="oh-meta-label">Effective:</span>
                          <span>{formatDate(request.effectiveDate)}</span>
                        </div>
                      </div>

                      <div className="oh-request-card__reason">
                        <span className="oh-reason-label">Reason:</span>
                        <p className="oh-reason-text">{request.reason}</p>
                      </div>

                      <div className="oh-request-card__footer">
                        <div className="oh-request-date">
                          Requested: {formatDate(request.requestDate)}
                        </div>
                        <div className="oh-request-actions">
                          <button className="oh-btn oh-btn--sm oh-btn--ghost">View</button>
                          {request.status === 'pending' && (
                            <>
                              <button className="oh-btn oh-btn--sm oh-btn--success">Approve</button>
                              <button className="oh-btn oh-btn--sm oh-btn--danger">Reject</button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredRequests.length === 0 && (
                <div className="oh-empty-state">
                  <div className="oh-empty-state__icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </div>
                  <h3 className="oh-empty-state__title">No work type requests found</h3>
                  <p className="oh-empty-state__message">
                    There are currently no work type requests to consider.
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

      {/* Create Work Type Request Modal */}
      {showCreateModal && (
        <div className="oh-modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="oh-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="oh-modal-header">
              <h2>Create Work Type Request</h2>
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
                    </select>
                  </div>
                  
                  <div className="oh-form-group">
                    <label className="oh-form-label">Requesting Work Type *</label>
                    <select 
                      className="oh-form-select"
                      value={createForm.requestingWorkType}
                      onChange={(e) => handleInputChange('requestingWorkType', e.target.value)}
                    >
                      <option value="">Select Work Type</option>
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="contract">Contract</option>
                      <option value="remote">Remote Work</option>
                      <option value="hybrid">Hybrid Work</option>
                    </select>
                  </div>
                </div>

                <div className="oh-form-row">
                  <div className="oh-form-group">
                    <label className="oh-form-label">Requested Date *</label>
                    <input 
                      type="date"
                      className="oh-form-input"
                      value={createForm.requestedDate}
                      onChange={(e) => handleInputChange('requestedDate', e.target.value)}
                    />
                  </div>
                  
                  <div className="oh-form-group">
                    <label className="oh-form-label">Requested Till</label>
                    <input 
                      type="date"
                      className="oh-form-input"
                      value={createForm.requestedTill}
                      onChange={(e) => handleInputChange('requestedTill', e.target.value)}
                    />
                  </div>
                </div>

                <div className="oh-form-group">
                  <label className="oh-form-label">Description *</label>
                  <textarea 
                    className="oh-form-textarea"
                    placeholder="Enter reason for work type change request..."
                    value={createForm.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="oh-form-group">
                  <label className="oh-form-checkbox">
                    <input 
                      type="checkbox"
                      checked={createForm.permanentRequest}
                      onChange={(e) => handleInputChange('permanentRequest', e.target.checked)}
                    />
                    <span className="oh-form-checkbox__checkmark"></span>
                    <span className="oh-form-checkbox__label">This is a permanent work type change request</span>
                  </label>
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
                onClick={handleCreateWorkTypeRequest}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="oh-loading-spinner"></div>
                    Creating...
                  </>
                ) : (
                  'Create Request'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkTypeRequests;
