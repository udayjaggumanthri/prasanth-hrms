import React, { useState } from 'react';
import '../QuickAccess.css';

interface LeaveRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeaveRequestModal: React.FC<LeaveRequestModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    leaveTypeId: '',
    employeeId: '',
    startDate: '',
    endDate: '',
    startDateBreakdown: '',
    endDateBreakdown: '',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle leave request submission
    console.log('Leave request submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="oh-modal" role="dialog" aria-labelledby="leaveRequestModal" aria-hidden={!isOpen}>
      <div className="oh-modal__dialog oh-modal__dialog--timeoff oh-modal__dialog-relative oh-timeoff-modal">
        <div className="oh-modal__dialog-header">
          <h5 className="oh-modal__dialog-title">Leave Request</h5>
          <button 
            className="oh-modal__close" 
            aria-label="Close"
            onClick={onClose}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="oh-modal__dialog-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="leaveTypeId">Leave Type *</label>
              <select
                id="leaveTypeId"
                name="leaveTypeId"
                value={formData.leaveTypeId}
                onChange={handleChange}
                required
                className="form-control"
              >
                <option value="">Select Leave Type</option>
                <option value="annual">Annual Leave</option>
                <option value="sick">Sick Leave</option>
                <option value="personal">Personal Leave</option>
                <option value="maternity">Maternity Leave</option>
                <option value="paternity">Paternity Leave</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="employeeId">Employee *</label>
              <select
                id="employeeId"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                required
                className="form-control"
              >
                <option value="">Select Employee</option>
                <option value="current">Current User</option>
                {/* Add more employees as needed */}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="startDate">Start Date *</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="endDate">End Date *</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="startDateBreakdown">Start Date Breakdown</label>
                <select
                  id="startDateBreakdown"
                  name="startDateBreakdown"
                  value={formData.startDateBreakdown}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select breakdown</option>
                  <option value="full_day">Full Day</option>
                  <option value="first_half">First Half</option>
                  <option value="second_half">Second Half</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="endDateBreakdown">End Date Breakdown</label>
                <select
                  id="endDateBreakdown"
                  name="endDateBreakdown"
                  value={formData.endDateBreakdown}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select breakdown</option>
                  <option value="full_day">Full Day</option>
                  <option value="first_half">First Half</option>
                  <option value="second_half">Second Half</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="form-control"
                placeholder="Enter leave description..."
              />
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequestModal;
