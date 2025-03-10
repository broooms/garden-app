import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
  };
  
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Garden, {currentUser.name}!</h1>
        <p>Your digital garden companion</p>
      </header>
      
      <div className="dashboard-content">
        <div className="dashboard-welcome">
          <div className="welcome-card">
            <h2>Getting Started</h2>
            <p>
              Thank you for joining Garden App! This is where you'll manage your garden,
              track your plants, and plan your growing seasons.
            </p>
            <p>
              Your gardening experience level: <strong>{currentUser.gardenExperience}</strong>
            </p>
            <div className="action-buttons">
              <button className="primary-btn">Create Garden Bed</button>
              <button className="secondary-btn">Browse Plants</button>
            </div>
          </div>
          
          <div className="feature-cards">
            <div className="feature-card">
              <h3>Garden Designer</h3>
              <p>Design your garden layout with our intuitive tools</p>
              <button className="text-btn">Coming Soon</button>
            </div>
            
            <div className="feature-card">
              <h3>Plant Browser</h3>
              <p>Explore plants that will thrive in your growing conditions</p>
              <button className="text-btn">Coming Soon</button>
            </div>
            
            <div className="feature-card">
              <h3>Progress Tracker</h3>
              <p>Monitor the growth and health of your plants over time</p>
              <button className="text-btn">Coming Soon</button>
            </div>
            
            <div className="feature-card">
              <h3>Garden Settings</h3>
              <p>Configure your garden preferences and account details</p>
              <button className="text-btn">Coming Soon</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="user-menu">
        <div className="user-info">
          <div className="user-avatar">
            {currentUser.name.charAt(0)}
          </div>
          <div className="user-details">
            <span className="user-name">{currentUser.name}</span>
            <span className="user-email">{currentUser.email}</span>
          </div>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;