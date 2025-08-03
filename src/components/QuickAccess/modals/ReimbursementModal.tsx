import React, { useState } from 'react';
import '../QuickAccess.css';

interface ReimbursementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReimbursementModal: React.FC<ReimbursementModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    type: 'reimbursement', // 'reimbursement' or 'leave_encashment'
    employeeId: '',
    amount: '',
    description: '',
    attachment: null as File | null,
    // Leave encashment specific fields
    leaveTypeId: '',
    cfdToEncash: '',
    adToEncash: ''
  });

  const [availableLeaves, setAvailableLeaves] = useState([
    { leaveType: 'Annual Leave', availableDays: 20, carryforwardDays: 5 },
    { leaveType: 'Sick Leave', availableDays: 12, carryforwardDays: 0 },
  ]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reimbursement/leave encashment submission
    console.log('Reimbursement request submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        attachment: e.target.files[0]
      });
    }
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      type: e.target.value
    });
  };

  return (
    <div className="oh-modal" role="dialog" aria-labelledby="reimbursementModal" aria-hidden={!isOpen}>
      <div className="oh-modal__dialog" style={{ maxWidth: '550px' }}>
        <div className="oh-modal__dialog-header">
          <h5 className="oh-modal__dialog-title">
            {formData.type === 'reimbursement' ? 'Reimbursement Request' : 'Leave Encashment Request'}
          </h5>
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
              <label htmlFor="type">Request Type *</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleTypeChange}
                required
                className="form-control"
              >
                <option value="reimbursement">Reimbursement</option>
                <option value="leave_encashment">Leave Encashment</option>
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

            {formData.type === 'reimbursement' ? (
              <>
                <div className="form-group">
                  <label htmlFor="amount">Amount *</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter reimbursement amount"
                    step="0.01"
                    min="0"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="attachment">Attachment *</label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    onChange={handleFileChange}
                    required
                    className="form-control"
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                  />
                  <small className="form-text text-muted">
                    Upload receipts, invoices, or supporting documents
                  </small>
                </div>
              </>
            ) : (
              <>
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
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="cfdToEncash">Carry Forward Days to Encash *</label>
                    <input
                      type="number"
                      id="cfdToEncash"
                      name="cfdToEncash"
                      value={formData.cfdToEncash}
                      onChange={handleChange}
                      required
                      className="form-control"
                      min="0"
                      step="0.5"
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="adToEncash">Available Days to Encash *</label>
                    <input
                      type="number"
                      id="adToEncash"
                      name="adToEncash"
                      value={formData.adToEncash}
                      onChange={handleChange}
                      required
                      className="form-control"
                      min="0"
                      step="0.5"
                    />
                  </div>
                </div>

                {/* Available Leave Table */}
                <div className="form-group" id="availableTable">
                  <label>Available Leave Balance</label>
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Leave Type</th>
                        <th>Available Days</th>
                        <th>Carryforward Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      {availableLeaves.map((leave, index) => (
                        <tr key={index} className="toggle-highlight">
                          <td>{leave.leaveType}</td>
                          <td>{leave.availableDays}</td>
                          <td>{leave.carryforwardDays}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="form-control"
                placeholder="Enter description or additional details..."
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

export default ReimbursementModal;
