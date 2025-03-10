import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Check for existing auth on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if we have a token in localStorage
        const token = localStorage.getItem('garden_app_auth_token');
        
        if (token) {
          // In a real app, you would validate the token with your backend
          // For demo, we'll just assume it's valid if it exists
          
          // Mock user data
          const userData = {
            id: '1',
            name: 'Demo User',
            email: 'demo@example.com',
            gardenExperience: 'intermediate'
          };
          
          setCurrentUser(userData);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        // Clear potentially invalid auth data
        localStorage.removeItem('garden_app_auth_token');
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, []);
  
  // Login function
  const login = (userData) => {
    setCurrentUser(userData);
  };
  
  // Logout function
  const logout = () => {
    localStorage.removeItem('garden_app_auth_token');
    setCurrentUser(null);
  };
  
  // Register function (simplified, just uses login in this demo)
  const register = (userData) => {
    setCurrentUser(userData);
  };
  
  // The context value that will be supplied to any descendants of this provider
  const value = {
    currentUser,
    loading,
    login,
    logout,
    register
  };
  
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;