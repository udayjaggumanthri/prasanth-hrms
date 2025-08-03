import React, { useState } from 'react';
import '../QuickAccess.css';

interface WorkTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkTypeModal: React.FC<WorkTypeModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    workTypeName: '',
    description: '',
    isActive: true,
    workingHours: '',
    breakTime: '',
    overtimeRate: '',
    category: 'full-time'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle work type creation submission
    console.log('Work type created:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <div className="oh-modal" role="dialog" aria-labelledby="workTypeModal" aria-hidden={!isOpen}>
      <div className="oh-modal__dialog">
        <div className="oh-modal__dialog-header">
          <h5 className="oh-modal__dialog-title">Create Work Type</h5>
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
              <label htmlFor="workTypeName">Work Type Name *</label>
              <input
                type="text"
                id="workTypeName"
                name="workTypeName"
                value={formData.workTypeName}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter work type name"
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
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="temporary">Temporary</option>
                <option value="intern">Intern</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="workingHours">Working Hours per Day</label>
                <input
                  type="number"
                  id="workingHours"
                  name="workingHours"
                  value={formData.workingHours}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="8"
                  step="0.5"
                  min="0"
                  max="24"
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="breakTime">Break Time (minutes)</label>
                <input
                  type="number"
                  id="breakTime"
                  name="breakTime"
                  value={formData.breakTime}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="60"
                  min="0"
                  max="480"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="overtimeRate">Overtime Rate Multiplier</label>
              <input
                type="number"
                id="overtimeRate"
                name="overtimeRate"
                value={formData.overtimeRate}
                onChange={handleChange}
                className="form-control"
                placeholder="1.5"
                step="0.1"
                min="1"
                max="5"
              />
              <small className="form-text text-muted">
                Multiplier for overtime pay calculation (e.g., 1.5 for time and a half)
              </small>
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
                placeholder="Enter work type description..."
              />
            </div>

            <div className="form-group">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="isActive"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label htmlFor="isActive" className="form-check-label">
                  Active (employees can be assigned to this work type)
                </label>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create Work Type
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkTypeModal;
