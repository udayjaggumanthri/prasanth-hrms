import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Auth.css';

const ResetPassword: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const token = searchParams.get('token');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle reset password logic here
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>Password Reset Successful</h2>
          <p>Your password has been reset successfully.</p>
          <Link to="/login" className="auth-link">
            Login with New Password
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Reset Password
          </button>
        </form>
        <Link to="/login" className="auth-link">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
