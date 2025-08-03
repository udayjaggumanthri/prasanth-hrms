import React, { useState } from 'react';
import '../QuickAccess.css';

interface DashboardChartsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DashboardChartsModal: React.FC<DashboardChartsModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    chartType: '',
    dataSource: '',
    department: '',
    dateRange: 'last_30_days',
    customStartDate: '',
    customEndDate: '',
    includeFilters: false,
    chartTitle: '',
    showLegend: true,
    showDataLabels: false,
    colorScheme: 'default'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle dashboard chart creation
    console.log('Dashboard chart created:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
    <div className="oh-modal" role="dialog" aria-labelledby="dashboardChartsModal" aria-hidden={!isOpen}>
      <div className="oh-modal__dialog" style={{ maxWidth: '700px' }}>
        <div className="oh-modal__dialog-header">
          <h5 className="oh-modal__dialog-title">Dashboard Charts Configuration</h5>
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
                <label htmlFor="chartType">Chart Type *</label>
                <select
                  id="chartType"
                  name="chartType"
                  value={formData.chartType}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="">Select Chart Type</option>
                  <option value="bar">Bar Chart</option>
                  <option value="line">Line Chart</option>
                  <option value="pie">Pie Chart</option>
                  <option value="doughnut">Doughnut Chart</option>
                  <option value="area">Area Chart</option>
                  <option value="column">Column Chart</option>
                  <option value="scatter">Scatter Plot</option>
                  <option value="radar">Radar Chart</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="dataSource">Data Source *</label>
                <select
                  id="dataSource"
                  name="dataSource"
                  value={formData.dataSource}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="">Select Data Source</option>
                  <option value="attendance">Attendance Data</option>
                  <option value="leave">Leave Statistics</option>
                  <option value="employee">Employee Demographics</option>
                  <option value="performance">Performance Metrics</option>
                  <option value="recruitment">Recruitment Analytics</option>
                  <option value="payroll">Payroll Summary</option>
                  <option value="training">Training Progress</option>
                  <option value="assets">Asset Utilization</option>
                  <option value="projects">Project Statistics</option>
                  <option value="tickets">Ticket Resolution</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="department">Department Filter</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">All Departments</option>
                  <option value="hr">Human Resources</option>
                  <option value="it">Information Technology</option>
                  <option value="finance">Finance</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="operations">Operations</option>
                  <option value="admin">Administration</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="dateRange">Date Range *</label>
                <select
                  id="dateRange"
                  name="dateRange"
                  value={formData.dateRange}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="last_7_days">Last 7 Days</option>
                  <option value="last_30_days">Last 30 Days</option>
                  <option value="last_3_months">Last 3 Months</option>
                  <option value="last_6_months">Last 6 Months</option>
                  <option value="last_year">Last Year</option>
                  <option value="current_month">Current Month</option>
                  <option value="current_quarter">Current Quarter</option>
                  <option value="current_year">Current Year</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
            </div>

            {formData.dateRange === 'custom' && (
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="customStartDate">Start Date *</label>
                  <input
                    type="date"
                    id="customStartDate"
                    name="customStartDate"
                    value={formData.customStartDate}
                    onChange={handleChange}
                    required={formData.dateRange === 'custom'}
                    className="form-control"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="customEndDate">End Date *</label>
                  <input
                    type="date"
                    id="customEndDate"
                    name="customEndDate"
                    value={formData.customEndDate}
                    onChange={handleChange}
                    required={formData.dateRange === 'custom'}
                    className="form-control"
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="chartTitle">Chart Title</label>
              <input
                type="text"
                id="chartTitle"
                name="chartTitle"
                value={formData.chartTitle}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter custom chart title (optional)"
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="colorScheme">Color Scheme</label>
                <select
                  id="colorScheme"
                  name="colorScheme"
                  value={formData.colorScheme}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="default">Default</option>
                  <option value="blue">Blue Tones</option>
                  <option value="green">Green Tones</option>
                  <option value="orange">Orange Tones</option>
                  <option value="purple">Purple Tones</option>
                  <option value="rainbow">Rainbow</option>
                  <option value="monochrome">Monochrome</option>
                  <option value="corporate">Corporate Colors</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <div className="form-check-group">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="showLegend"
                      name="showLegend"
                      checked={formData.showLegend}
                      onChange={handleChange}
                      className="form-check-input"
                    />
                    <label htmlFor="showLegend" className="form-check-label">
                      Show Legend
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="showDataLabels"
                      name="showDataLabels"
                      checked={formData.showDataLabels}
                      onChange={handleChange}
                      className="form-check-input"
                    />
                    <label htmlFor="showDataLabels" className="form-check-label">
                      Show Data Labels
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="includeFilters"
                      name="includeFilters"
                      checked={formData.includeFilters}
                      onChange={handleChange}
                      className="form-check-input"
                    />
                    <label htmlFor="includeFilters" className="form-check-label">
                      Include Interactive Filters
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="chart-preview-section">
              <h6>Chart Preview Configuration</h6>
              <div className="preview-info">
                <div className="info-item">
                  <strong>Type:</strong> {formData.chartType || 'Not selected'}
                </div>
                <div className="info-item">
                  <strong>Data Source:</strong> {formData.dataSource || 'Not selected'}
                </div>
                <div className="info-item">
                  <strong>Department:</strong> {formData.department || 'All Departments'}
                </div>
                <div className="info-item">
                  <strong>Date Range:</strong> {formData.dateRange.replace('_', ' ').toUpperCase()}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create Chart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardChartsModal;
