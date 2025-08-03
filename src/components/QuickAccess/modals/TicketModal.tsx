import React, { useState } from 'react';
import '../QuickAccess.css';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    priority: 'medium',
    assignedTo: '',
    description: '',
    attachment: null as File | null
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle ticket creation submission
    console.log('Ticket created:', formData);
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

  return (
    <div className="oh-modal" role="dialog" aria-labelledby="createDialogModal" aria-hidden={!isOpen}>
      <div className="oh-modal__dialog">
        <div className="oh-modal__dialog-header">
          <h2 className="oh-modal__dialog-title" id="createTitle">
            Create Ticket
          </h2>
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
              <label htmlFor="title">Ticket Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter ticket title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="form-control"
              >
                <option value="">Select Category</option>
                <option value="technical">Technical Support</option>
                <option value="hr">HR Related</option>
                <option value="payroll">Payroll Issue</option>
                <option value="leave">Leave Related</option>
                <option value="equipment">Equipment Request</option>
                <option value="access">Access Request</option>
                <option value="facilities">Facilities</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="priority">Priority *</label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="assignedTo">Assign To</label>
                <select
                  id="assignedTo"
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Auto-assign</option>
                  <option value="it_support">IT Support Team</option>
                  <option value="hr_team">HR Team</option>
                  <option value="admin">Administration</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                className="form-control"
                placeholder="Please describe your issue or request in detail..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="attachment">Attachment</label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                onChange={handleFileChange}
                className="form-control"
                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
              />
              <small className="form-text text-muted">
                Upload screenshots, documents, or any relevant files (Max 10MB)
              </small>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
