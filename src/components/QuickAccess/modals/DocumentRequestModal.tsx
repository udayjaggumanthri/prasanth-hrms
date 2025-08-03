import React, { useState } from 'react';
import '../QuickAccess.css';

interface DocumentRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DocumentRequestModal: React.FC<DocumentRequestModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    documentType: '',
    purpose: '',
    urgency: 'medium',
    additionalInfo: '',
    deliveryMethod: 'email',
    deliveryAddress: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle document request submission
    console.log('Document request submitted:', formData);
    
    // Reset form
    setFormData({
      documentType: '',
      purpose: '',
      urgency: 'medium',
      additionalInfo: '',
      deliveryMethod: 'email',
      deliveryAddress: ''
    });
    
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="oh-modal" role="dialog" aria-labelledby="documentRequestModal" aria-hidden={!isOpen}>
      <div className="oh-modal__dialog oh-modal__dialog--timeoff oh-modal__dialog-relative oh-document-modal">
        <div className="oh-modal__dialog-header">
          <h5 className="oh-modal__dialog-title">Document Request</h5>
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
              <label htmlFor="documentType">Document Type *</label>
              <select
                id="documentType"
                name="documentType"
                value={formData.documentType}
                onChange={handleChange}
                required
                className="form-control"
              >
                <option value="">Select Document Type</option>
                <option value="experience_certificate">Experience Certificate</option>
                <option value="salary_certificate">Salary Certificate</option>
                <option value="employment_letter">Employment Letter</option>
                <option value="relieving_letter">Relieving Letter</option>
                <option value="payslip">Payslip</option>
                <option value="tax_certificate">Tax Certificate</option>
                <option value="bank_letter">Bank Letter</option>
                <option value="character_certificate">Character Certificate</option>
                <option value="no_objection_certificate">No Objection Certificate</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="purpose">Purpose *</label>
              <input
                type="text"
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="e.g., Bank Loan, Job Application, Visa Processing"
              />
            </div>

            <div className="form-group">
              <label htmlFor="urgency">Urgency Level *</label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                required
                className="form-control"
              >
                <option value="low">Low - Within 1 week</option>
                <option value="medium">Medium - Within 3 days</option>
                <option value="high">High - Within 24 hours</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="deliveryMethod">Delivery Method *</label>
              <select
                id="deliveryMethod"
                name="deliveryMethod"
                value={formData.deliveryMethod}
                onChange={handleChange}
                required
                className="form-control"
              >
                <option value="email">Email</option>
                <option value="pickup">Office Pickup</option>
                <option value="post">Postal Mail</option>
                <option value="courier">Courier</option>
              </select>
            </div>

            {formData.deliveryMethod === 'email' && (
              <div className="form-group">
                <label htmlFor="deliveryAddress">Email Address *</label>
                <input
                  type="email"
                  id="deliveryAddress"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="Enter email address for document delivery"
                />
              </div>
            )}

            {(formData.deliveryMethod === 'post' || formData.deliveryMethod === 'courier') && (
              <div className="form-group">
                <label htmlFor="deliveryAddress">Delivery Address *</label>
                <textarea
                  id="deliveryAddress"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleChange}
                  required
                  className="form-control"
                  rows={3}
                  placeholder="Enter complete delivery address"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="additionalInfo">Additional Information</label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="form-control"
                rows={3}
                placeholder="Any specific requirements or additional details..."
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DocumentRequestModal;
