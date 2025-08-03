import React, { useState } from 'react';
import '../QuickAccess.css';

interface AttendanceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AttendanceRequestModal: React.FC<AttendanceRequestModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    attendanceDate: '',
    shiftId: '',
    clockInTime: '',
    clockOutTime: '',
    minimumHour: '',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle attendance request submission
    console.log('Attendance request submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="oh-modal" role="dialog" aria-labelledby="attendanceRequestModal" aria-hidden={!isOpen}>
      <div className="oh-modal__dialog">
        <div className="oh-modal__dialog-header">
          <h5 className="oh-modal__dialog-title">Attendance Request</h5>
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
              <label htmlFor="attendanceDate">Attendance Date *</label>
              <input
                type="date"
                id="attendanceDate"
                name="attendanceDate"
                value={formData.attendanceDate}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="shiftId">Shift *</label>
              <select
                id="shiftId"
                name="shiftId"
                value={formData.shiftId}
                onChange={handleChange}
                required
                className="form-control"
              >
                <option value="">Select Shift</option>
                <option value="morning">Morning Shift (9:00 AM - 6:00 PM)</option>
                <option value="evening">Evening Shift (2:00 PM - 11:00 PM)</option>
                <option value="night">Night Shift (11:00 PM - 8:00 AM)</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="clockInTime">Clock In Time *</label>
                <input
                  type="time"
                  id="clockInTime"
                  name="clockInTime"
                  value={formData.clockInTime}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="clockOutTime">Clock Out Time *</label>
                <input
                  type="time"
                  id="clockOutTime"
                  name="clockOutTime"
                  value={formData.clockOutTime}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="minimumHour">Minimum Hours</label>
              <input
                type="number"
                id="minimumHour"
                name="minimumHour"
                value={formData.minimumHour}
                onChange={handleChange}
                step="0.5"
                min="0"
                max="24"
                className="form-control"
                placeholder="Enter minimum hours"
              />
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
                placeholder="Enter reason for attendance request..."
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

export default AttendanceRequestModal;
