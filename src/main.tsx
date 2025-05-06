import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.tsx";

// Inicializações de monitoramento e analytics
import { initializeGA } from "./utils/analytics";
import { initializeSentry } from "./utils/error-monitoring";

// Inicializar serviços em produção
if (import.meta.env.PROD) {
  // Inicializa o Google Analytics
  initializeGA();

  // Inicializa o Sentry para monitoramento de erros
  initializeSentry();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
