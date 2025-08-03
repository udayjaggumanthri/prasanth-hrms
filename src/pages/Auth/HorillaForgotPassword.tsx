import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HorillaForgotPassword.css';

const HorillaForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');
    
    try {
      // Simulate API call for forgot password
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Password reset instructions have been sent to your email.');
    } catch (error) {
      setError('Failed to send reset instructions. Please try again.');
      console.error('Forgot password error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="main">
      <main className="oh-auth">
        <div className="oh-auth-card">
          <h1 className="oh-onboarding-card__title oh-onboarding-card__title--h2 text-center my-3">
            Forgot Password?
          </h1>
          <p className="text-muted text-center">
            Type in your email to reset the password
          </p>
          
          {message && (
            <div className="oh-alert oh-alert--success">
              {message}
            </div>
          )}
          
          {error && (
            <div className="oh-alert oh-alert--error">
              {error}
            </div>
          )}
          
          <form className="oh-form-group" onSubmit={handleSubmit}>
            <div className="oh-input-group">
              <label className="oh-label" htmlFor="email">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="oh-input w-100" 
                placeholder="e.g. jane.doe@acme.com" 
                autoFocus 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="oh-btn oh-onboarding-card__button mt-4 oh-btn--secondary oh-btn--shadow w-100 mb-4"
              role="button"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Change Password'}
            </button>
            
            <div className="text-center">
              <Link to="/login" className="oh-link oh-link--secondary">
                Back to Sign In
              </Link>
            </div>
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

export default HorillaForgotPassword;
