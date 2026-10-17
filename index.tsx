import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#002FA7',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          fontFamily: 'sans-serif',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
            Arthur Chauvin — Portfolio
          </h1>
          <p style={{ maxWidth: '500px', marginBottom: '24px', opacity: 0.9, lineHeight: 1.5 }}>
            Une incompatibilité temporaire a été détectée sur votre navigateur. Cliquez ci-dessous pour recharger l'application ou vider le cache.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#ffffff',
                color: '#002FA7',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '9999px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Recharger la page
            </button>
          </div>
          {this.state.error && (
            <pre style={{
              marginTop: '32px',
              padding: '16px',
              backgroundColor: 'rgba(0,0,0,0.3)',
              borderRadius: '8px',
              fontSize: '11px',
              maxWidth: '800px',
              overflow: 'auto',
              textAlign: 'left'
            }}>
              {this.state.error.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
