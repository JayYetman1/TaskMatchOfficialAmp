import React from 'react';

interface AppWrapperProps {
  children: React.ReactNode;
  isTaskMatch?: boolean;
}

export default function AppWrapper({ children, isTaskMatch = false }: AppWrapperProps) {
  if (isTaskMatch) {
    // Reset styles for TaskMatch website
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'white',
        overflow: 'auto',
        zIndex: 1000
      }}>
        {children}
      </div>
    );
  }

  // Default wrapper for todos app - centered and styled
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: '2rem',
        maxWidth: '1280px',
        textAlign: 'center'
      }}>
        {children}
      </main>
    </div>
  );
}
