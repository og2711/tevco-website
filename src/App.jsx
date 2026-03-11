import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

// --- Global UI & Providers ---
import { Toaster } from "@/components/ui/toaster";
import { queryClientInstance } from '@/lib/query-client';
import { AuthProvider, useAuth } from '@/lib/AuthContext';

// --- Project Configuration ---
import { pagesConfig } from './pages.config'; 

// --- Components & Error Pages ---
import PageNotFound from '@/lib/PageNotFound';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

// --- Custom Pages ---
import StrategicPartner from './pages/Consulting';

const { Pages, Layout, mainPage } = pagesConfig;

// Determine the default landing page
const mainPageKey = mainPage || (Pages ? Object.keys(Pages)[0] : null);
const MainPage = (Pages && mainPageKey) ? Pages[mainPageKey] : (() => <div>Page Not Found</div>);

/**
 * Wraps pages in the global Layout if one is provided in pages.config.js
 */
const LayoutWrapper = ({ children, currentPageName }) => {
  return Layout ? (
    <Layout currentPageName={currentPageName}>{children}</Layout>
  ) : (
    <>{children}</>
  );
};

const AuthenticatedApp = () => {
  const { 
    isLoadingAuth, 
    isLoadingPublicSettings, 
    authError, 
    navigateToLogin 
  } = useAuth();

  // 1. Loading State
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  // 2. Auth Error Handling
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  // 3. Main Routing Logic
  return (
    <Routes>
      {/* Root Route (Tevco Homepage) */}
      <Route 
        path="/" 
        element={
          <LayoutWrapper currentPageName={mainPageKey}>
            <MainPage />
          </LayoutWrapper>
        } 
      />

      {/* Dynamic Routes generated from pages.config.js */}
      {Pages && Object.entries(Pages).map(([path, PageComponent]) => (
        <Route
          key={path}
          path={path.startsWith('/') ? path : `/${path}`}
          element={
            <LayoutWrapper currentPageName={path}>
              <PageComponent />
            </LayoutWrapper>
          }
        />
      ))}

      {/* Manual Route for WIC Partnership - Placed outside the map loop */}
      <Route 
        path="/consulting" 
        element={
          <LayoutWrapper currentPageName="Strategic Partner">
            <StrategicPartner />
          </LayoutWrapper>
        } 
      />

      {/* Catch-all 404 Route */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

/**
 * Main Entry Point
 */
function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;