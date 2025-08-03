import React, { useState } from 'react';
import Sidebar from '../../../components/Layout/Sidebar';
import Navbar from '../../../components/Layout/Navbar';
import QuickAccess from '../../../components/QuickAccess/QuickAccess';
import { useSidebar } from '../../../contexts/SidebarContext';
import './EmployeeProfile.css';

// Mock data - replace with actual data from props or API
const mockEmployee = {
  id: 1,
  employeeId: 'EMP001',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@company.com',
  phone: '+1234567890',
  dateOfBirth: '1990-01-15',
  gender: 'Male',
  address: '123 Main St, City, State 12345',
  department: 'Engineering',
  position: 'Senior Developer',
  manager: 'Jane Smith',
  dateOfJoining: '2020-03-15',
  employmentType: 'Full-time',
  workLocation: 'Head Office',
  salary: '$75,000',
  contractStartDate: '2020-03-15',
  contractEndDate: '2025-03-15',
  probationPeriod: '6 months',
};

const mockBankInfo = {
  bankName: 'Bank of America',
  accountNumber: '****1234',
  routingNumber: '021000322',
  accountType: 'Checking',
  branch: 'Downtown Branch',
};

const EmployeeProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const { isCollapsed } = useSidebar();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="oh-profile-content">
            <div className="oh-profile-cards-grid">
              {/* Personal Information Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Personal Information</h3>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-field-group">
                    <div className="oh-profile-field">
                      <label>Employee ID</label>
                      <span>{mockEmployee.employeeId}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>First Name</label>
                      <span>{mockEmployee.firstName}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Last Name</label>
                      <span>{mockEmployee.lastName}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Email</label>
                      <span>{mockEmployee.email}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Phone</label>
                      <span>{mockEmployee.phone}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Date of Birth</label>
                      <span>{mockEmployee.dateOfBirth}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Gender</label>
                      <span>{mockEmployee.gender}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Address</label>
                      <span>{mockEmployee.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Information Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Work Information</h3>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-field-group">
                    <div className="oh-profile-field">
                      <label>Department</label>
                      <span>{mockEmployee.department}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Position</label>
                      <span>{mockEmployee.position}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Manager</label>
                      <span>{mockEmployee.manager}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Date of Joining</label>
                      <span>{mockEmployee.dateOfJoining}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Employment Type</label>
                      <span>{mockEmployee.employmentType}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Work Location</label>
                      <span>{mockEmployee.workLocation}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Information Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Bank Information</h3>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-field-group">
                    <div className="oh-profile-field">
                      <label>Bank Name</label>
                      <span>{mockBankInfo.bankName}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Account Number</label>
                      <span>{mockBankInfo.accountNumber}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Routing Number</label>
                      <span>{mockBankInfo.routingNumber}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Account Type</label>
                      <span>{mockBankInfo.accountType}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Branch</label>
                      <span>{mockBankInfo.branch}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contract Details Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Contract Details</h3>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-field-group">
                    <div className="oh-profile-field">
                      <label>Salary</label>
                      <span>{mockEmployee.salary}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Contract Start Date</label>
                      <span>{mockEmployee.contractStartDate}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Contract End Date</label>
                      <span>{mockEmployee.contractEndDate}</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Probation Period</label>
                      <span>{mockEmployee.probationPeriod}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'work-type-shift':
        return (
          <div className="oh-profile-content">
            <div className="oh-profile-cards-grid">
              {/* Work Type Requests Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Work type request</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-empty-state">
                    <p>No work type request has been created.</p>
                  </div>
                </div>
              </div>

              {/* Rotating Work Type Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Rotating work type</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-empty-state">
                    <p>No rotating work type has been assigned.</p>
                  </div>
                </div>
              </div>

              {/* Shift Request Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Shift request</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-empty-state">
                    <p>No shift request has been created.</p>
                  </div>
                </div>
              </div>

              {/* Rotating Shift Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Rotating Shift</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-empty-state">
                    <p>No rotating shift has been assigned.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'attendance':
        return (
          <div className="oh-profile-content">
            <div className="oh-profile-cards-grid">
              {/* Attendance Overview Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Attendance Overview</h3>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-field-group">
                    <div className="oh-profile-field">
                      <label>Total Working Days</label>
                      <span>22</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Present Days</label>
                      <span>20</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Absent Days</label>
                      <span>2</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Late Arrivals</label>
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Attendance Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Recent Attendance</h3>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-attendance-list">
                    <div className="oh-profile-attendance-item">
                      <span className="date">2025-08-02</span>
                      <span className="time">09:00 AM - 06:00 PM</span>
                      <span className="status present">Present</span>
                    </div>
                    <div className="oh-profile-attendance-item">
                      <span className="date">2025-08-01</span>
                      <span className="time">09:15 AM - 06:00 PM</span>
                      <span className="status late">Late</span>
                    </div>
                    <div className="oh-profile-attendance-item">
                      <span className="date">2025-07-31</span>
                      <span className="time">-</span>
                      <span className="status absent">Absent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'documents':
        return (
          <div className="oh-profile-content">
            <div className="oh-profile-cards-grid">
              {/* Personal Documents Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Personal Documents</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-document-list">
                    <div className="oh-profile-document-item">
                      <span className="document-name">Resume.pdf</span>
                      <span className="document-date">Uploaded: 2020-03-10</span>
                      <button className="document-download">Download</button>
                    </div>
                    <div className="oh-profile-document-item">
                      <span className="document-name">ID_Proof.pdf</span>
                      <span className="document-date">Uploaded: 2020-03-10</span>
                      <button className="document-download">Download</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Documents Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Official Documents</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-document-list">
                    <div className="oh-profile-document-item">
                      <span className="document-name">Employment_Contract.pdf</span>
                      <span className="document-date">Generated: 2020-03-15</span>
                      <button className="document-download">Download</button>
                    </div>
                    <div className="oh-profile-document-item">
                      <span className="document-name">Offer_Letter.pdf</span>
                      <span className="document-date">Generated: 2020-03-10</span>
                      <button className="document-download">Download</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'leave':
        return (
          <div className="oh-profile-content">
            <div className="oh-profile-cards-grid">
              {/* Leave Balance Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Leave Balance</h3>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-field-group">
                    <div className="oh-profile-field">
                      <label>Annual Leave</label>
                      <span>15 / 25 days</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Sick Leave</label>
                      <span>5 / 10 days</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Personal Leave</label>
                      <span>2 / 5 days</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Maternity Leave</label>
                      <span>0 / 90 days</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Leave Requests Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Recent Leave Requests</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-leave-list">
                    <div className="oh-profile-leave-item">
                      <span className="leave-type">Annual Leave</span>
                      <span className="leave-dates">Aug 10-12, 2025</span>
                      <span className="leave-status pending">Pending</span>
                    </div>
                    <div className="oh-profile-leave-item">
                      <span className="leave-type">Sick Leave</span>
                      <span className="leave-dates">Jul 28, 2025</span>
                      <span className="leave-status approved">Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'payroll':
        return (
          <div className="oh-profile-content">
            <div className="oh-profile-cards-grid">
              {/* Salary Information Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Salary Information</h3>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-field-group">
                    <div className="oh-profile-field">
                      <label>Basic Salary</label>
                      <span>$60,000</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>House Rent Allowance</label>
                      <span>$12,000</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Transport Allowance</label>
                      <span>$3,000</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Gross Salary</label>
                      <span>$75,000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Payslips Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Recent Payslips</h3>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-payslip-list">
                    <div className="oh-profile-payslip-item">
                      <span className="payslip-period">August 2025</span>
                      <span className="payslip-amount">$6,250</span>
                      <button className="document-download">Download</button>
                    </div>
                    <div className="oh-profile-payslip-item">
                      <span className="payslip-period">July 2025</span>
                      <span className="payslip-amount">$6,250</span>
                      <button className="document-download">Download</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'allowance-deduction':
        return (
          <div className="oh-profile-content">
            <div className="oh-profile-cards-grid">
              {/* Allowances Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Allowances</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-allowance-list">
                    <div className="oh-profile-allowance-item">
                      <span className="allowance-name">Transport Allowance</span>
                      <span className="allowance-amount">$250/month</span>
                      <span className="allowance-status active">Active</span>
                    </div>
                    <div className="oh-profile-allowance-item">
                      <span className="allowance-name">Meal Allowance</span>
                      <span className="allowance-amount">$200/month</span>
                      <span className="allowance-status active">Active</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deductions Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Deductions</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-deduction-list">
                    <div className="oh-profile-deduction-item">
                      <span className="deduction-name">Health Insurance</span>
                      <span className="deduction-amount">$150/month</span>
                      <span className="deduction-status active">Active</span>
                    </div>
                    <div className="oh-profile-deduction-item">
                      <span className="deduction-name">Provident Fund</span>
                      <span className="deduction-amount">$500/month</span>
                      <span className="deduction-status active">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'penalty-account':
        return (
          <div className="oh-profile-content">
            <div className="oh-profile-cards-grid">
              {/* Penalty Records Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Penalty Records</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-empty-state">
                    <p>No penalty records found.</p>
                  </div>
                </div>
              </div>

              {/* Fine History Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Fine History</h3>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-empty-state">
                    <p>No fines have been imposed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'assets':
        return (
          <div className="oh-profile-content">
            <div className="oh-profile-cards-grid">
              {/* Assigned Assets Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Assigned Assets</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-asset-list">
                    <div className="oh-profile-asset-item">
                      <span className="asset-name">MacBook Pro 16"</span>
                      <span className="asset-id">ASSET-001</span>
                      <span className="asset-status assigned">Assigned</span>
                    </div>
                    <div className="oh-profile-asset-item">
                      <span className="asset-name">iPhone 13</span>
                      <span className="asset-id">ASSET-002</span>
                      <span className="asset-status assigned">Assigned</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Asset Requests Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Asset Requests</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-empty-state">
                    <p>No asset requests found.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'performance':
        return (
          <div className="oh-profile-content">
            <div className="oh-profile-cards-grid">
              {/* Performance Reviews Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Performance Reviews</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-review-list">
                    <div className="oh-profile-review-item">
                      <span className="review-period">Q2 2025</span>
                      <span className="review-score">4.5/5.0</span>
                      <span className="review-status completed">Completed</span>
                    </div>
                    <div className="oh-profile-review-item">
                      <span className="review-period">Q1 2025</span>
                      <span className="review-score">4.2/5.0</span>
                      <span className="review-status completed">Completed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Goals & Objectives Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Goals & Objectives</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-goal-list">
                    <div className="oh-profile-goal-item">
                      <span className="goal-title">Complete React Training</span>
                      <span className="goal-deadline">Due: Sep 30, 2025</span>
                      <span className="goal-status in-progress">In Progress</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'bonus-points':
        return (
          <div className="oh-profile-content">
            <div className="oh-profile-cards-grid">
              {/* Bonus Points Summary Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Bonus Points Summary</h3>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-field-group">
                    <div className="oh-profile-field">
                      <label>Total Points Earned</label>
                      <span>1,250 points</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Points Redeemed</label>
                      <span>300 points</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Available Balance</label>
                      <span>950 points</span>
                    </div>
                    <div className="oh-profile-field">
                      <label>Current Level</label>
                      <span>Gold</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Bonus Activities Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Recent Activities</h3>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-bonus-list">
                    <div className="oh-profile-bonus-item">
                      <span className="bonus-activity">Project Completion Bonus</span>
                      <span className="bonus-points">+100 points</span>
                      <span className="bonus-date">Aug 1, 2025</span>
                    </div>
                    <div className="oh-profile-bonus-item">
                      <span className="bonus-activity">Attendance Bonus</span>
                      <span className="bonus-points">+50 points</span>
                      <span className="bonus-date">Jul 31, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'scheduled-interview':
        return (
          <div className="oh-profile-content">
            <div className="oh-profile-cards-grid">
              {/* Upcoming Interviews Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Upcoming Interviews</h3>
                  <button className="oh-profile-add-btn">+</button>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-empty-state">
                    <p>No upcoming interviews scheduled.</p>
                  </div>
                </div>
              </div>

              {/* Interview History Card */}
              <div className="oh-profile-card">
                <div className="oh-profile-card-header">
                  <h3>Interview History</h3>
                </div>
                <div className="oh-profile-card-body">
                  <div className="oh-profile-interview-list">
                    <div className="oh-profile-interview-item">
                      <span className="interview-type">Technical Interview</span>
                      <span className="interview-date">Mar 10, 2020</span>
                      <span className="interview-status completed">Completed</span>
                    </div>
                    <div className="oh-profile-interview-item">
                      <span className="interview-type">HR Interview</span>
                      <span className="interview-date">Mar 12, 2020</span>
                      <span className="interview-status completed">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="oh-app-layout">
      <Sidebar />
      <div className={`oh-main-content ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Navbar pageTitle="Employee Profile" />
        <div className="oh-profile-container">
          <div className="oh-profile-header">
            <div className="oh-profile-header-info">
              <div className="oh-profile-avatar">
                <img 
                  src={`https://ui-avatars.com/api/?name=${mockEmployee.firstName}+${mockEmployee.lastName}&background=007bff&color=fff`} 
                  alt={`${mockEmployee.firstName} ${mockEmployee.lastName}`}
                />
              </div>
              <div className="oh-profile-details">
                <h1>{mockEmployee.firstName} {mockEmployee.lastName}</h1>
                <p>{mockEmployee.position} • {mockEmployee.department}</p>
                <p>{mockEmployee.email}</p>
              </div>
              <div className="oh-profile-actions">
                <button className="oh-profile-edit-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  Edit
                </button>
              </div>
            </div>
          </div>

          <div className="oh-profile-tabs">
            <button 
              className={`oh-profile-tab ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button 
              className={`oh-profile-tab ${activeTab === 'work-type-shift' ? 'active' : ''}`}
              onClick={() => setActiveTab('work-type-shift')}
            >
              Work Type & Shift
            </button>
            <button 
              className={`oh-profile-tab ${activeTab === 'attendance' ? 'active' : ''}`}
              onClick={() => setActiveTab('attendance')}
            >
              Attendance
            </button>
            <button 
              className={`oh-profile-tab ${activeTab === 'leave' ? 'active' : ''}`}
              onClick={() => setActiveTab('leave')}
            >
              Leave
            </button>
            <button 
              className={`oh-profile-tab ${activeTab === 'payroll' ? 'active' : ''}`}
              onClick={() => setActiveTab('payroll')}
            >
              Payroll
            </button>
            <button 
              className={`oh-profile-tab ${activeTab === 'allowance-deduction' ? 'active' : ''}`}
              onClick={() => setActiveTab('allowance-deduction')}
            >
              Allowance & Deduction
            </button>
            <button 
              className={`oh-profile-tab ${activeTab === 'penalty-account' ? 'active' : ''}`}
              onClick={() => setActiveTab('penalty-account')}
            >
              Penalty Account
            </button>
            <button 
              className={`oh-profile-tab ${activeTab === 'assets' ? 'active' : ''}`}
              onClick={() => setActiveTab('assets')}
            >
              Assets
            </button>
            <button 
              className={`oh-profile-tab ${activeTab === 'performance' ? 'active' : ''}`}
              onClick={() => setActiveTab('performance')}
            >
              Performance
            </button>
            <button 
              className={`oh-profile-tab ${activeTab === 'documents' ? 'active' : ''}`}
              onClick={() => setActiveTab('documents')}
            >
              Documents
            </button>
            <button 
              className={`oh-profile-tab ${activeTab === 'bonus-points' ? 'active' : ''}`}
              onClick={() => setActiveTab('bonus-points')}
            >
              Bonus Points
            </button>
            <button 
              className={`oh-profile-tab ${activeTab === 'scheduled-interview' ? 'active' : ''}`}
              onClick={() => setActiveTab('scheduled-interview')}
            >
              Scheduled Interview
            </button>
          </div>

          {renderTabContent()}
        </div>
      </div>
      <QuickAccess />
    </div>
  );
};

export default EmployeeProfile;
