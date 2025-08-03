import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import './HorillaLogin.css';

const HorillaLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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

  return (
    <div id="main">
      <main className="oh-auth">
        <div className="oh-auth-card">
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
              <Link to="/forgot-password" className="oh-link oh-link--secondary justify-content-center">
                Forgot password?
              </Link>
            </small>
            
            <small className="text-center mt-3">
              Don't have an account? <Link to="/register" className="oh-link oh-link--secondary justify-content-center">
                Create Account
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

export default HorillaLogin;
