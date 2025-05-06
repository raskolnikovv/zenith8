import React from "react";
import { captureError } from "../utils/error-monitoring";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: any): void {
    console.error(error, info);
    // Reporta erro para o Sentry se disponível
    if (typeof captureError === "function") {
      captureError(error, { errorInfo: info });
    }
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="container-custom py-20 text-center">
            <h2 className="text-2xl font-bold mb-4">Algo deu errado</h2>
            <p className="mb-4">
              Desculpe pelo inconveniente. Tente recarregar a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Recarregar
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
