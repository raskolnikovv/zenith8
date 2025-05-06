import * as Sentry from "@sentry/react";

// Substitua pelo seu DSN do Sentry
const SENTRY_DSN = "";

/**
 * Inicializa o Sentry para monitoramento de erros
 */
export const initializeSentry = () => {
  // Inicializa apenas em produção, a menos que forçado
  if (import.meta.env.PROD) {
    Sentry.init({
      dsn: SENTRY_DSN,
      integrations: [Sentry.browserTracingIntegration()],

      // Ajusta a amostragem em ambiente de produção
      // (valor entre 0 e 1, sendo 1 = 100% dos erros são reportados)
      tracesSampleRate: 0.5,

      // Configurações adicionais
      beforeSend(event) {
        // Não enviar erros de desenvolvimento
        if (import.meta.env.DEV) {
          return null;
        }
        return event;
      },

      // Filtra erros que podem ser causados por adblockers ou extensões
      ignoreErrors: [
        "Network Error",
        "Failed to fetch",
        "Load failed",
        "ResizeObserver loop limit exceeded",
      ],
    });

    console.log("Sentry inicializado para monitoramento de erros");
  }
};

/**
 * Captura e reporta um erro para o Sentry
 */
export const captureError = (
  error: Error,
  context?: Record<string, unknown>
) => {
  if (import.meta.env.PROD) {
    Sentry.captureException(error, {
      extra: context,
    });
  } else {
    console.error("Erro capturado:", error, context);
  }
};

/**
 * Rastreia um evento personalizado no Sentry
 */
export const trackEvent = (name: string, data?: Record<string, unknown>) => {
  Sentry.captureEvent({
    message: name,
    level: "info",
    extra: data,
  });
};

/**
 * Wrapper para identificar usuários no Sentry
 * Use somente para identificar usuários autenticados e com seu consentimento
 */
export const identifyUser = (id: string, email?: string, name?: string) => {
  Sentry.setUser({
    id,
    email,
    username: name,
  });
};

/**
 * Limpa as informações do usuário
 */
export const clearUserIdentity = () => {
  Sentry.setUser(null);
};

/**
 * Adiciona informações de contexto para os erros
 */
export const setErrorContext = (
  name: string,
  context: Record<string, unknown>
) => {
  Sentry.setContext(name, context);
};

export default Sentry;
