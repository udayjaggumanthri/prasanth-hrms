import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import './LoginPage.css';

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, isLoading, error } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
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

  return (
    <div className="login-container">
      <main className="oh-auth">
        <div className="oh-auth-card">
          <h1 className="oh-onboarding-card__title">Create Account</h1>
          <p className="auth-subtitle">Join SYNC HRMS to get started.</p>
          
          <form onSubmit={handleSubmit} className="oh-form-group">
            {error && (
              <div className="error-message" style={{
                background: '#fee',
                border: '1px solid #fcc',
                color: '#c33',
                padding: '12px',
                borderRadius: '6px',
                fontSize: '0.9rem',
                marginBottom: '16px'
              }}>
                {error}
              </div>
            )}
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="oh-input"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              
              <div className="oh-input-group">
                <label className="oh-label" htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="oh-input"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="oh-input-group">
              <label className="oh-label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="oh-input"
                placeholder="e.g. john.doe@SYNC.com"
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
                  className="oh-input oh-input--password"
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
                  {showPassword ? (
                    <svg className="password-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="password-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
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
                  className="oh-input oh-input--password"
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
                  {showConfirmPassword ? (
                    <svg className="password-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="password-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {password !== confirmPassword && confirmPassword && (
                <small style={{ color: '#e74c3c', fontSize: '0.8rem' }}>
                  Passwords do not match
                </small>
              )}
            </div>
            
            <button
              type="submit"
              className="oh-btn oh-onboarding-card__button oh-btn--secondary"
              disabled={isLoading || password !== confirmPassword}
            >
              <svg className="lock-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0v4h2m4-6V7a3 3 0 00-6 0v4m6-4h2v4" />
              </svg>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
            
            <div className="register-link" style={{ textAlign: 'center', marginTop: '16px' }}>
              <span style={{ color: '#666', fontSize: '0.85rem' }}>
                Already have an account?{' '}
                <Link to="/login" className="oh-link oh-link--secondary">
                  Sign in
                </Link>
              </span>
            </div>
          </form>
        </div>
        
        <div className="auth-logo-container">
          <img 
            src="/logo.svg" 
            alt="SYNC" 
            className="auth-logo"
          />
        </div>
      </main>
    </div>
  );
};

export default Register;
