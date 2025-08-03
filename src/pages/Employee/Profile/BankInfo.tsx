import React, { useState } from 'react';
import { BankInfo } from '../../../types/employee';

interface BankInfoProps {
  bankInfo: BankInfo;
  onSave: (data: BankInfo) => void;
}

const BankInfoComponent: React.FC<BankInfoProps> = ({ bankInfo, onSave }) => {
  const [formData, setFormData] = useState<BankInfo>(bankInfo);

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

  return (
    <div className="oh-general__tab-target oh-profile-section mb-4 d-none" id="bank">
      <div className="oh-profile-section__card">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="bank_name">Bank Name</label>
                <input
                  type="text"
                  id="bank_name"
                  name="bank_name"
                  className="oh-input"
                  value={formData.bank_name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="account_number">Account Number</label>
                <input
                  type="text"
                  id="account_number"
                  name="account_number"
                  className="oh-input"
                  value={formData.account_number}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="branch">Branch</label>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  className="oh-input"
                  value={formData.branch}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="any_other_code1">Bank Code #1</label>
                <input
                  type="text"
                  id="any_other_code1"
                  name="any_other_code1"
                  className="oh-input"
                  value={formData.any_other_code1}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="address">Bank Address</label>
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
                <select
                  id="state"
                  name="state"
                  className="oh-select"
                  value={formData.state}
                  onChange={handleInputChange}
                >
                  <option value="">Select State</option>
                  {/* States will be populated based on selected country */}
                </select>
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
                <label className="oh-label" htmlFor="any_other_code2">Bank Code #2</label>
                <input
                  type="text"
                  id="any_other_code2"
                  name="any_other_code2"
                  className="oh-input"
                  value={formData.any_other_code2}
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
    </div>
  );
};

export default BankInfoComponent;
