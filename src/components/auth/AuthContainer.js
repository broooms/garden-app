import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './Auth.css';

const AuthContainer = ({ onAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleAuthSuccess = (userData) => {
    // Pass the authenticated user data up to the parent component
    if (onAuthenticated) {
      onAuthenticated(userData);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Sign in to access your garden' : 'Join to start planning your garden'}</p>
        </div>
        
        {isLogin ? (
          <Login onLoginSuccess={handleAuthSuccess} />
        ) : (
          <Register onRegisterSuccess={handleAuthSuccess} />
        )}
        
        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              className="auth-toggle-btn" 
              onClick={toggleAuthMode}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;