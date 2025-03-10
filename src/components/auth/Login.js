import React, { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear field-specific error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      // In a real app, replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, just check for a test user
      if (formData.email === 'demo@example.com' && formData.password === 'password123') {
        const userData = {
          id: '1',
          name: 'Demo User',
          email: formData.email,
          // Other user data would go here
        };
        
        // Save auth token to localStorage (in a real app)
        localStorage.setItem('garden_app_auth_token', 'demo_token');
        
        // Call the success handler
        onLoginSuccess(userData);
      } else {
        setLoginError('Invalid email or password');
      }
    } catch (error) {
      setLoginError('An error occurred during login. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {loginError && <div className="auth-error-message">{loginError}</div>}
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={errors.email ? 'error' : ''}
          disabled={isLoading}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className={errors.password ? 'error' : ''}
          disabled={isLoading}
        />
        {errors.password && <span className="error-text">{errors.password}</span>}
      </div>
      
      <div className="form-group forgot-password">
        <button type="button" className="text-button">
          Forgot password?
        </button>
      </div>
      
      <button 
        type="submit" 
        className="auth-submit-btn"
        disabled={isLoading}
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
      
      <div className="demo-credentials">
        <p>Demo credentials:</p>
        <p>Email: demo@example.com</p>
        <p>Password: password123</p>
      </div>
    </form>
  );
};

export default Login;