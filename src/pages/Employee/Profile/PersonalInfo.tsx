import React, { useState } from 'react';
import { Employee } from '../../../types/employee';
import './EmployeeProfile.css';

interface PersonalInfoProps {
  employee: Employee;
  onSave: (data: Partial<Employee>) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ employee, onSave }) => {
  const [formData, setFormData] = useState<Employee>(employee);
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setFormData(prev => ({
          ...prev,
          employee_profile: imageUrl
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="oh-general__tab-target oh-profile-section mb-4" id="personal">
      <div className="oh-profile-section__card">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-center">
              <div 
                className="oh-profile-section__edit-photo me-4 mb-3" 
                onClick={() => setShowPhotoModal(true)}
                style={{ cursor: 'pointer' }}
              >
                <div className="oh-profile oh-profile--lg">
                  <div className="oh-profile__avatar">
                    <img
                      src={formData.employee_profile || "/images/upload/userphoto.png"}
                      className="oh-profile-section__avatar"
                      alt="Profile"
                      style={{ borderRadius: '10%', width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="oh-profile-section__edit-overlay">
                  <span>Edit Photo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="employee_first_name">First Name</label>
                <input
                  type="text"
                  id="employee_first_name"
                  name="employee_first_name"
                  className="oh-input"
                  value={formData.employee_first_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="employee_last_name">Last Name</label>
                <input
                  type="text"
                  id="employee_last_name"
                  name="employee_last_name"
                  className="oh-input"
                  value={formData.employee_last_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="oh-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="oh-input"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="oh-input"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  className="oh-select"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="qualification">Qualification</label>
                <input
                  type="text"
                  id="qualification"
                  name="qualification"
                  className="oh-input"
                  value={formData.qualification}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="experience">Experience</label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  className="oh-input"
                  value={formData.experience}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  className="oh-input"
                  rows={3}
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="country">Country</label>
                <select
                  id="country"
                  name="country"
                  className="oh-select"
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="IN">India</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="oh-input"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="oh-input"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="zip">Zip Code</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  className="oh-input"
                  value={formData.zip}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="emergency_contact">Emergency Contact</label>
                <input
                  type="tel"
                  id="emergency_contact"
                  name="emergency_contact"
                  className="oh-input"
                  value={formData.emergency_contact}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="emergency_contact_name">Contact Name</label>
                <input
                  type="text"
                  id="emergency_contact_name"
                  name="emergency_contact_name"
                  className="oh-input"
                  value={formData.emergency_contact_name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="emergency_contact_relation">Contact Relation</label>
                <input
                  type="text"
                  id="emergency_contact_relation"
                  name="emergency_contact_relation"
                  className="oh-input"
                  value={formData.emergency_contact_relation}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="marital_status">Marital Status</label>
                <select
                  id="marital_status"
                  name="marital_status"
                  className="oh-select"
                  value={formData.marital_status}
                  onChange={handleInputChange}
                >
                  <option value="">Select Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="children">Children</label>
                <input
                  type="number"
                  id="children"
                  name="children"
                  className="oh-input"
                  min="0"
                  value={formData.children}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <hr className="mt-5 mb-3" />
          <div className="w-100 d-flex align-items-center justify-content-end">
            <button type="submit" className="oh-btn oh-btn--secondary oh-btn--w-100-resp">
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Photo Upload Modal */}
      {showPhotoModal && (
        <div className="oh-modal" style={{ display: 'block' }}>
          <div className="oh-modal__dialog">
            <div className="oh-modal__dialog-header">
              <span className="oh-modal__dialog-title">Upload Photo</span>
              <button 
                className="oh-modal__close" 
                onClick={() => setShowPhotoModal(false)}
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="oh-modal__dialog-body">
              <div className="oh-profile-section__image-container">
                <div className="oh-profile-section__modal-avatar">
                  <img
                    src={formData.employee_profile || "/images/upload/userphoto.png"}
                    className="oh-profile-section__modal-image preview"
                    alt="Profile Preview"
                    style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '10%' }}
                  />
                </div>
                <input 
                  type="file" 
                  id="employee_profile" 
                  className="oh-input oh-input--file oh-input--file-sm mt-4" 
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
                <div className="d-flex justify-content-between w-100 align-items-center mt-4">
                  <button 
                    type="button"
                    className="oh-btn oh-btn--light-danger mr-1"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, employee_profile: '' }));
                      setShowPhotoModal(false);
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                    Delete Image
                  </button>
                  <button
                    type="button"
                    className="oh-btn oh-btn--secondary oh-btn--shadow"
                    onClick={() => setShowPhotoModal(false)}
                  >
                    Update Image
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
