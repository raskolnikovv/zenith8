import ReactGA from "react-ga4";
import type { MetricType } from "web-vitals";

// Substitua por seu ID do Google Analytics
const MEASUREMENT_ID = "G-XXXXXXXXXX";
let initialized = false;

/**
 * Inicializa o Google Analytics
 */
export const initializeGA = () => {
  if (!initialized) {
    // Só inicializa em produção ou se forçado
    if (import.meta.env.PROD) {
      ReactGA.initialize(MEASUREMENT_ID);
      console.log("Google Analytics inicializado");
      initialized = true;

      // Reportar Web Vitals para melhor monitoramento de performance
      reportWebVitals(sendWebVitalsToGA);
    }
  }
};

interface MetricReport {
  name: string;
  delta: number;
  id: string;
}

/**
 * Envia métricas de Web Vitals para o Google Analytics
 */
const sendWebVitalsToGA = ({ name, delta, id }: MetricReport) => {
  ReactGA.event({
    category: "Web Vitals",
    action: name,
    label: id,
    value: Math.round(name === "CLS" ? delta * 1000 : delta),
    nonInteraction: true,
  });
};

/**
 * Função auxiliar para reportar Web Vitals
 * Para usar com onCLS, onFCP, onLCP, etc. da biblioteca web-vitals
 */
export const reportWebVitals = (onPerfEntry?: (metric: MetricType) => void) => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    import("web-vitals").then(
      ({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
        onINP(onPerfEntry);
        // FID está depreciado, mas ainda incluído para compatibilidade
        onFID(onPerfEntry);
      }
    );
  }
};

/**
 * Envia um evento de pageview para o Google Analytics
 */
export const trackPageView = (path: string) => {
  if (initialized) {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

/**
 * Envia um evento personalizado para o Google Analytics
 */
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  if (initialized) {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};

// Eventos comuns
export const trackButtonClick = (buttonName: string) => {
  trackEvent("Interação", "Clique em Botão", buttonName);
};

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent(
    "Formulário",
    success ? "Enviado com Sucesso" : "Erro no Envio",
    formName
  );
};

export const trackExternalLinkClick = (url: string) => {
  trackEvent("Link Externo", "Clique", url);
};

export const trackServiceInterest = (serviceName: string) => {
  trackEvent("Interesse em Serviço", "Visualização Detalhada", serviceName);
};

export const trackDownload = (fileName: string) => {
  trackEvent("Download", "Iniciado", fileName);
};

// Eventos de conversão
export const trackLead = (source: string) => {
  trackEvent("Conversão", "Lead", source);
};

export const trackContactFormSuccess = () => {
  trackEvent("Conversão", "Formulário de Contato Enviado");
};

// Exportar o objeto ReactGA para funções personalizadas adicionais
export default ReactGA;
