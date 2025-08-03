import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Layout/Sidebar';
import Navbar from '../../components/Layout/Navbar';
import QuickAccess from '../../components/QuickAccess/QuickAccess';
import { useSidebar } from '../../contexts/SidebarContext';
import './EmployeeList.css';

interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  status: 'online' | 'offline';
  hireDate: string;
  phone?: string;
  avatar?: string;
}

const mockEmployees: Employee[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    firstName: 'Prasanth',
    lastName: 'Kathi',
    email: 'prasanthkathi05@gmail.com',
    department: 'Engineering',
    position: 'Software Developer',
    status: 'offline',
    hireDate: '2023-01-15',
    phone: '+1234567890',
  },
  {
    id: '2',
    employeeId: 'EMP002',
    firstName: 'Sarah',
    lastName: 'Wilson',
    email: 'sarah.wilson@company.com',
    department: 'Marketing',
    position: 'Marketing Manager',
    status: 'online',
    hireDate: '2022-08-20',
    phone: '+1234567891',
  },
  {
    id: '3',
    employeeId: 'EMP003',
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@company.com',
    department: 'Sales',
    position: 'Sales Representative',
    status: 'online',
    hireDate: '2023-03-10',
    phone: '+1234567892',
  },
  {
    id: '4',
    employeeId: 'EMP004',
    firstName: 'Anna',
    lastName: 'Smith',
    email: 'anna.smith@company.com',
    department: 'HR',
    position: 'HR Manager',
    status: 'offline',
    hireDate: '2022-05-15',
    phone: '+1234567893',
  },
  {
    id: '5',
    employeeId: 'EMP005',
    firstName: 'David',
    lastName: 'Brown',
    email: 'david.brown@company.com',
    department: 'Finance',
    position: 'Financial Analyst',
    status: 'online',
    hireDate: '2023-02-20',
    phone: '+1234567894',
  },
];

const EmployeeList: React.FC = () => {
  const [employees] = useState<Employee[]>(mockEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const { isCollapsed } = useSidebar();
  
  const itemsPerPage = 12;

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = 
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = !filterDepartment || employee.department === filterDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEmployees = filteredEmployees.slice(startIndex, startIndex + itemsPerPage);

  const departments = Array.from(new Set(employees.map(emp => emp.department)));

  const onlineCount = employees.filter(emp => emp.status === 'online').length;
  const offlineCount = employees.filter(emp => emp.status === 'offline').length;

  return (
    <div className="oh-app-layout">
      <Sidebar />
      <div className={`oh-main-content ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Navbar pageTitle="Employees" />
        <div className="oh-employees-container">
          {/* Header */}
          <div className="oh-employees-header">
            <div className="oh-employees-title">
              <h1>Employees</h1>
              <div className="oh-employees-stats">
                <span className="oh-stat online">
                  <span className="oh-stat-dot online"></span>
                  Online ({onlineCount})
                </span>
                <span className="oh-stat offline">
                  <span className="oh-stat-dot offline"></span>
                  Offline ({offlineCount})
                </span>
              </div>
            </div>
            <div className="oh-employees-actions">
              <button className="oh-btn oh-btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14m-7-7h14"></path>
                </svg>
                Create
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="oh-employees-controls">
            <div className="oh-search-wrapper">
              <svg className="oh-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
                className="oh-search-input"
              />
            </div>
            
            <div className="oh-controls-right">
              <div className="oh-view-toggle">
                <button 
                  className={`oh-view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
                <button 
                  className={`oh-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
              </div>

              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="oh-filter-select"
              >
                <option value="">Filter</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>

              <button className="oh-btn oh-btn-secondary">Group By</button>
              <button className="oh-btn oh-btn-secondary">Actions</button>
            </div>
          </div>

          {/* Employee Cards/List */}
          <div className={`oh-employees-content ${viewMode}`}>
            {viewMode === 'grid' ? (
              <div className="oh-employees-grid">
                {paginatedEmployees.map((employee) => (
                  <div key={employee.id} className="oh-employee-card">
                    <div className="oh-employee-card-header">
                      <div className="oh-employee-avatar">
                        <img 
                          src={`https://ui-avatars.com/api/?name=${employee.firstName}+${employee.lastName}&background=007bff&color=fff`}
                          alt={`${employee.firstName} ${employee.lastName}`}
                        />
                        <span className={`oh-status-indicator ${employee.status}`}></span>
                      </div>
                      <div className="oh-employee-actions">
                        <button className="oh-action-btn">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="5" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="oh-employee-info">
                      <h3 className="oh-employee-name">
                        <Link to={`/employee/profile`}>
                          {employee.firstName} {employee.lastName}
                        </Link>
                      </h3>
                      <p className="oh-employee-email">{employee.email}</p>
                      <p className="oh-employee-details">None</p>
                      <div className="oh-employee-meta">
                        <span className={`oh-employee-status ${employee.status}`}>
                          {employee.status === 'online' ? 'Online' : 'Offline'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="oh-employees-table">
                <table>
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Employee ID</th>
                      <th>Department</th>
                      <th>Position</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedEmployees.map((employee) => (
                      <tr key={employee.id}>
                        <td>
                          <div className="oh-table-employee">
                            <div className="oh-employee-avatar small">
                              <img 
                                src={`https://ui-avatars.com/api/?name=${employee.firstName}+${employee.lastName}&background=007bff&color=fff`}
                                alt={`${employee.firstName} ${employee.lastName}`}
                              />
                              <span className={`oh-status-indicator ${employee.status}`}></span>
                            </div>
                            <div className="oh-employee-details">
                              <div className="oh-employee-name">
                                <Link to={`/employee/profile`}>
                                  {employee.firstName} {employee.lastName}
                                </Link>
                              </div>
                              <div className="oh-employee-email">{employee.email}</div>
                            </div>
                          </div>
                        </td>
                        <td>{employee.employeeId}</td>
                        <td>{employee.department}</td>
                        <td>{employee.position}</td>
                        <td>
                          <span className={`oh-status-badge ${employee.status}`}>
                            {employee.status === 'online' ? 'Online' : 'Offline'}
                          </span>
                        </td>
                        <td>
                          <div className="oh-table-actions">
                            <button className="oh-action-btn">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="12" cy="5" r="1"></circle>
                                <circle cx="12" cy="19" r="1"></circle>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="oh-pagination">
            <div className="oh-pagination-info">
              Page {currentPage} of {totalPages}.
            </div>
            <div className="oh-pagination-controls">
              <span>Page</span>
              <select 
                value={currentPage} 
                onChange={(e) => setCurrentPage(Number(e.target.value))}
                className="oh-page-select"
              >
                {Array.from({ length: totalPages }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <span>of {totalPages}</span>
            </div>
          </div>
        </div>
      </div>
      <QuickAccess />
    </div>
  );
};

export default EmployeeList;
