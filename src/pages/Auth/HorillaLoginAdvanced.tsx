import React, { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import './HorillaLoginAdvanced.css';

interface CompanyInfo {
  name: string;
  icon?: string;
  tagline?: string;
}

interface HorillaLoginAdvancedProps {
  companyInfo?: CompanyInfo;
  showDemoOptions?: boolean;
  showInitializeDb?: boolean;
}

const HorillaLoginAdvanced: React.FC<HorillaLoginAdvancedProps> = ({ 
  companyInfo = { name: 'Horilla', tagline: 'HRMS Platform' },
  showDemoOptions = false,
  showInitializeDb = false
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const { login, isLoading, error } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await login({
        email: username,
        password: password
      });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInitializeDatabase = () => {
    // Handle database initialization
    console.log('Initialize Database clicked');
  };

  const handleLoadDemoData = () => {
    setShowDemoModal(true);
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

  const LockIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <circle cx="12" cy="16" r="1"></circle>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );

  const ArrowForwardIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12,5 19,12 12,19"></polyline>
    </svg>
  );

  return (
    <div id="main">
      {/* Alert Container for Messages */}
      <div className="oh-alert-container">
        {error && (
          <div className="oh-alert oh-alert--animated oh-alert--error">
            {error}
          </div>
        )}
      </div>

      <main className="oh-auth">
        <div className="oh-auth-card mb-4">
          <h1 className="oh-onboarding-card__title oh-onboarding-card__title--h2 text-center my-3">
            Sign In
          </h1>
          <p className="text-muted text-center">
            Please login to access the dashboard.
          </p>
          
          <form method="post" className="oh-form-group" onSubmit={handleSubmit}>
            <div className="oh-input-group">
              <label className="oh-label" htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                className="oh-input w-100"
                placeholder="e.g. adam.luis@horilla.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            
            <button
              type="submit"
              className="oh-btn oh-onboarding-card__button mt-4 oh-btn--secondary oh-btn--shadow w-100 mb-4"
              role="button"
              disabled={isLoading}
            >
              <LockIcon />
              <span className="me-2"></span>
              {isLoading ? 'Signing in...' : 'Secure Sign-in'}
            </button>
            
            <small className="text-center">
              <a href="#" className="oh-link oh-link--secondary justify-content-center">
                Forgot password?
              </a>
            </small>
          </form>

          {/* Demo Data and Initialize Database Options */}
          {(showInitializeDb || showDemoOptions) && (
            <div>
              <div className="d-flex gap-2">
                {showInitializeDb && (
                  <button
                    onClick={handleInitializeDatabase}
                    className="oh-btn oh-onboarding-card__button mt-4 oh-btn--secondary oh-btn--shadow w-100 mb-4"
                    role="button"
                    style={{
                      backgroundColor: 'rgba(229, 79, 56, 0.1)',
                      color: 'hsl(8, 77%, 56%)',
                      border: 'none'
                    }}
                  >
                    Initialize Database
                    <ArrowForwardIcon />
                  </button>
                )}
                
                {showDemoOptions && (
                  <button
                    onClick={handleLoadDemoData}
                    className="oh-btn oh-onboarding-card__button mt-4 oh-btn--secondary oh-btn--shadow w-100 mb-4"
                    style={{
                      backgroundColor: '#31b46e1f',
                      color: '#1fad61',
                      border: 'none'
                    }}
                    role="button"
                  >
                    Load Demo Data
                    <ArrowForwardIcon />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        
        <div className="oh-auth-logo">
          <img 
            src={companyInfo.icon || "/images/ui/auth-logo.png"}
            alt={companyInfo.name}
            className="oh-auth-logo__image"
            style={{ opacity: 0.9, width: '200px', height: '140px' }}
          />
          {companyInfo.tagline && (
            <p className="oh-auth-company-tagline mt-2">
              {companyInfo.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Demo Data Modal */}
      {showDemoModal && (
        <div 
          className="oh-modal oh-modal--show" 
          id="dataLoadAuthentication" 
          role="dialog" 
          aria-labelledby="dataLoadAuthenticationLabel" 
          aria-hidden="false"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <div className="oh-modal__dialog">
            <div className="oh-modal__content">
              <div className="oh-modal__header">
                <h5 className="oh-modal__title">Load Demo Data</h5>
                <button 
                  type="button" 
                  className="oh-modal__close"
                  onClick={() => setShowDemoModal(false)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="oh-modal__body">
                <p>Are you sure you want to load demo data? This will populate the system with sample information.</p>
              </div>
              <div className="oh-modal__footer">
                <button 
                  type="button" 
                  className="oh-btn oh-btn--secondary"
                  onClick={() => setShowDemoModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="oh-btn oh-btn--primary"
                >
                  Load Demo Data
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorillaLoginAdvanced;
