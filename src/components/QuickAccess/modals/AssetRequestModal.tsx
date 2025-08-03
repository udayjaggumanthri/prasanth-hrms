import React, { useState } from 'react';
import '../QuickAccess.css';

interface AssetRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssetRequestModal: React.FC<AssetRequestModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    assetType: '',
    assetName: '',
    brand: '',
    model: '',
    quantity: '1',
    priority: 'medium',
    requestedDate: '',
    requiredDate: '',
    purpose: '',
    specifications: '',
    estimatedCost: '',
    justification: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle asset request submission
    console.log('Asset request submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="oh-modal" role="dialog" aria-labelledby="assetRequestModal" aria-hidden={!isOpen}>
      <div className="oh-modal__dialog" style={{ maxWidth: '700px' }}>
        <div className="oh-modal__dialog-header">
          <h5 className="oh-modal__dialog-title">Create Asset Request</h5>
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
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="assetType">Asset Type *</label>
                <select
                  id="assetType"
                  name="assetType"
                  value={formData.assetType}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="">Select Asset Type</option>
                  <option value="laptop">Laptop</option>
                  <option value="desktop">Desktop Computer</option>
                  <option value="monitor">Monitor</option>
                  <option value="keyboard">Keyboard</option>
                  <option value="mouse">Mouse</option>
                  <option value="headset">Headset</option>
                  <option value="printer">Printer</option>
                  <option value="scanner">Scanner</option>
                  <option value="phone">Phone</option>
                  <option value="tablet">Tablet</option>
                  <option value="chair">Office Chair</option>
                  <option value="desk">Desk</option>
                  <option value="software">Software License</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="assetName">Asset Name *</label>
                <input
                  type="text"
                  id="assetName"
                  name="assetName"
                  value={formData.assetName}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="Enter asset name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter brand name"
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="model">Model</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter model number"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="quantity">Quantity *</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="form-control"
                  min="1"
                  max="100"
                />
              </div>

              <div className="form-group col-md-4">
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

              <div className="form-group col-md-4">
                <label htmlFor="estimatedCost">Estimated Cost</label>
                <input
                  type="number"
                  id="estimatedCost"
                  name="estimatedCost"
                  value={formData.estimatedCost}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="requestedDate">Requested Date *</label>
                <input
                  type="date"
                  id="requestedDate"
                  name="requestedDate"
                  value={formData.requestedDate}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="requiredDate">Required By Date</label>
                <input
                  type="date"
                  id="requiredDate"
                  name="requiredDate"
                  value={formData.requiredDate}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="purpose">Purpose *</label>
              <select
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                className="form-control"
              >
                <option value="">Select Purpose</option>
                <option value="new_employee">New Employee Setup</option>
                <option value="replacement">Replacement for Damaged/Old Asset</option>
                <option value="upgrade">Equipment Upgrade</option>
                <option value="additional">Additional Equipment Need</option>
                <option value="project">Project Requirement</option>
                <option value="remote_work">Remote Work Setup</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="specifications">Technical Specifications</label>
              <textarea
                id="specifications"
                name="specifications"
                value={formData.specifications}
                onChange={handleChange}
                rows={3}
                className="form-control"
                placeholder="Enter specific technical requirements or specifications..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="justification">Business Justification *</label>
              <textarea
                id="justification"
                name="justification"
                value={formData.justification}
                onChange={handleChange}
                required
                rows={4}
                className="form-control"
                placeholder="Please provide a detailed justification for this asset request..."
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

export default AssetRequestModal;
