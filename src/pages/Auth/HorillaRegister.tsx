import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import './HorillaRegister.css';

const HorillaRegister: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const { register, isLoading, error } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      return;
    }
    
    if (!agreeToTerms) {
      return;
    }
    
    try {
      await register({
        firstName,
        lastName,
        email,
        password,
        confirmPassword
      });
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Icon components matching Horilla's ionicons
  const EyeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );

  const EyeOffIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  );

  const PersonAddIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <line x1="20" y1="8" x2="20" y2="14"></line>
      <line x1="23" y1="11" x2="17" y2="11"></line>
    </svg>
  );

  return (
    <div id="main">
      <main className="oh-auth">
        <div className="oh-auth-card">
          <h1 className="oh-onboarding-card__title oh-onboarding-card__title--h2 text-center my-3">
            Create Account
          </h1>
          <p className="text-muted text-center">
            Join our platform to access all features.
          </p>
          
          <form method="post" className="oh-form-group" onSubmit={handleSubmit}>
            <div className="oh-input-row">
              <div className="oh-input-group oh-input-group--half">
                <label className="oh-label" htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  className="oh-input w-100"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              
              <div className="oh-input-group oh-input-group--half">
                <label className="oh-label" htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  className="oh-input w-100"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="oh-input-group">
              <label className="oh-label" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="oh-input w-100"
                placeholder="e.g. john.doe@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="oh-input-group">
              <label className="oh-label" htmlFor="password">Password</label>
              <div className="oh-password-input-container">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  id="password" 
                  name="password"
                  className="oh-input oh-input--password w-100" 
                  placeholder="Use alphanumeric characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  className="oh-btn oh-btn--transparent oh-password-input--toggle"
                  onClick={togglePasswordVisibility}
                >
                  <span 
                    className={`oh-passowrd-input__show-icon ${showPassword ? 'd-none' : ''}`}
                    title="Show Password"
                  >
                    <EyeIcon />
                  </span>
                  <span 
                    className={`oh-passowrd-input__hide-icon ${!showPassword ? 'd-none' : ''}`}
                    title="Hide Password"
                  >
                    <EyeOffIcon />
                  </span>
                </button>
              </div>
            </div>
            
            <div className="oh-input-group">
              <label className="oh-label" htmlFor="confirmPassword">Confirm Password</label>
              <div className="oh-password-input-container">
                <input 
                  type={showConfirmPassword ? 'text' : 'password'} 
                  id="confirmPassword" 
                  name="confirmPassword"
                  className="oh-input oh-input--password w-100" 
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  className="oh-btn oh-btn--transparent oh-password-input--toggle"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  <span 
                    className={`oh-passowrd-input__show-icon ${showConfirmPassword ? 'd-none' : ''}`}
                    title="Show Password"
                  >
                    <EyeIcon />
                  </span>
                  <span 
                    className={`oh-passowrd-input__hide-icon ${!showConfirmPassword ? 'd-none' : ''}`}
                    title="Hide Password"
                  >
                    <EyeOffIcon />
                  </span>
                </button>
              </div>
            </div>
            
            <div className="oh-checkbox-group">
              <label className="oh-checkbox-label">
                <input 
                  type="checkbox" 
                  className="oh-checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  required
                />
                <span className="oh-checkbox-text">
                  I agree to the <Link to="/terms" className="oh-link oh-link--secondary">Terms of Service</Link> and <Link to="/privacy" className="oh-link oh-link--secondary">Privacy Policy</Link>
                </span>
              </label>
            </div>
            
            {password !== confirmPassword && confirmPassword && (
              <div className="oh-alert oh-alert--error">
                Passwords do not match
              </div>
            )}
            
            <button
              type="submit"
              className="oh-btn oh-onboarding-card__button mt-4 oh-btn--secondary oh-btn--shadow w-100 mb-4"
              role="button"
              disabled={isLoading || !agreeToTerms || password !== confirmPassword}
            >
              <PersonAddIcon />
              <span className="me-2"></span>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
            
            <small className="text-center">
              Already have an account? <Link to="/login" className="oh-link oh-link--secondary justify-content-center">
                Sign In
              </Link>
            </small>
            
            {error && (
              <div className="oh-alert oh-alert--error mt-3">
                {error}
              </div>
            )}
          </form>
        </div>
        
        <div className="oh-auth-logo">
          <img 
            src="/images/ui/auth-logo.png" 
            alt="Horilla"
            className="oh-auth-logo__image"
          />
        </div>
      </main>
    </div>
  );
};

export default HorillaRegister;
