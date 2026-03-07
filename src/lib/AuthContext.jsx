import React, { createContext, useState, useContext, useEffect } from 'react';
import { appParams } from '@/lib/app-params';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Set these to false by default for standalone, or the app will hang on the spinner
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings, setAppPublicSettings] = useState({ id: 'tevco-standalone' });

  // Standalone: We can mock a check for a local token
  useEffect(() => {
    const checkLocalAuth = () => {
      if (appParams.token) {
        // Mock a successful user fetch
        setUser({ name: 'Tevco Admin', email: 'admin@tevco.com' });
        setIsAuthenticated(true);
      }
    };
    checkLocalAuth();
  }, []);

  const logout = (shouldRedirect = true) => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('tevco_access_token'); // Matches our new app-params prefix
    if (shouldRedirect) window.location.href = '/';
  };

  const navigateToLogin = () => {
    console.log("Standalone: Redirecting to your custom login page...");
    // For now, let's just bypass login
    setIsAuthenticated(true);
  };

  const checkAppState = async () => {
    // Standalone placeholder
    console.log("Checking standalone app state...");
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      logout,
      navigateToLogin,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};