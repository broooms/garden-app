import React, { useState } from 'react';
import './App.css';
import RequirementsDashboard from './components/RequirementsDashboard';
import AuthContainer from './components/auth/AuthContainer';
import Dashboard from './components/dashboard/Dashboard';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Main app content that uses authentication
const AppContent = () => {
  // Get authentication state from context
  const { currentUser } = useAuth();
  
  // State to track if we're showing the requirements dashboard
  const [showRequirements, setShowRequirements] = useState(false);
  
  // Toggle function for requirements dashboard
  const toggleRequirements = () => {
    setShowRequirements(!showRequirements);
  };
  
  // Render authenticated or unauthenticated UI
  return (
    <div className="App">
      {!currentUser ? (
        // Unauthenticated - show login/register
        <>
          <header className="App-header-mini">
            <h1>Garden App</h1>
            <p>Your digital companion for garden planning and management</p>
          </header>
          <main>
            <AuthContainer />
          </main>
          <footer>
            <p>Garden App - Phase 1 Planning</p>
            <button className="link-button" onClick={toggleRequirements}>
              {showRequirements ? 'Hide Requirements' : 'View Project Requirements'}
            </button>
          </footer>
          
          {/* Conditionally render requirements dashboard */}
          {showRequirements && (
            <div className="requirements-overlay">
              <div className="requirements-modal">
                <button className="close-btn" onClick={toggleRequirements}>×</button>
                <RequirementsDashboard />
              </div>
            </div>
          )}
        </>
      ) : (
        // Authenticated - show dashboard
        <Dashboard />
      )}
    </div>
  );
};

// Root component that provides auth context
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;