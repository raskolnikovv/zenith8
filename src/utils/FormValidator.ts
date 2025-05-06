/**
 * Utilitário para validação e sanitização de formulários
 * Ajuda a prevenir ataques de injeção e garante a validade dos dados
 */

// Tipo para validação de email
type ValidationResult = {
  isValid: boolean;
  sanitizedValue?: string;
  error?: string;
};

/**
 * Sanitiza uma string removendo possíveis scripts e caracteres perigosos
 */
export const sanitizeString = (str: string): string => {
  if (!str) return "";

  // Substitui tags HTML e script tags
  const sanitized = str
    .replace(/<(\/)?script>/gi, "")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "");

  return sanitized.trim();
};

/**
 * Valida email com regex
 */
export const validateEmail = (email: string): ValidationResult => {
  const sanitizedEmail = sanitizeString(email);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailRegex.test(sanitizedEmail)) {
    return {
      isValid: false,
      sanitizedValue: sanitizedEmail,
      error:
        "Email inválido. Por favor, utilize um formato válido como exemplo@dominio.com",
    };
  }

  return {
    isValid: true,
    sanitizedValue: sanitizedEmail,
  };
};

/**
 * Valida número de telefone
 */
export const validatePhone = (phone: string): ValidationResult => {
  // Remove tudo que não for dígito
  const sanitizedPhone = phone.replace(/\D/g, "");

  // Aceita formatos brasileiros comuns
  if (sanitizedPhone.length < 10 || sanitizedPhone.length > 11) {
    return {
      isValid: false,
      sanitizedValue: sanitizedPhone,
      error: "Telefone inválido. Por favor, insira um telefone com DDD.",
    };
  }

  return {
    isValid: true,
    sanitizedValue: sanitizedPhone,
  };
};

/**
 * Valida campo de texto genérico
 */
export const validateTextField = (
  text: string,
  minLength: number = 2,
  maxLength: number = 500
): ValidationResult => {
  const sanitizedText = sanitizeString(text);

  if (sanitizedText.length < minLength) {
    return {
      isValid: false,
      sanitizedValue: sanitizedText,
      error: `Este campo deve ter pelo menos ${minLength} caracteres.`,
    };
  }

  if (sanitizedText.length > maxLength) {
    return {
      isValid: false,
      sanitizedValue: sanitizedText.substring(0, maxLength),
      error: `Este campo não pode exceder ${maxLength} caracteres.`,
    };
  }

  return {
    isValid: true,
    sanitizedValue: sanitizedText,
  };
};

/**
 * Gera um token CSRF para proteção de formulários
 */
export const generateCSRFToken = (): string => {
  // Em uma aplicação real, isso seria feito no backend
  // Aqui, simulamos um token com um número aleatório + timestamp
  const randomNum = Math.random().toString(36).substring(2, 15);
  const timestamp = Date.now();
  return `${randomNum}_${timestamp}`;
};

/**
 * Armazena o token CSRF na sessionStorage
 */
export const storeCSRFToken = (token: string): void => {
  sessionStorage.setItem("csrf_token", token);
};

/**
 * Recupera o token CSRF da sessionStorage
 */
export const getStoredCSRFToken = (): string | null => {
  return sessionStorage.getItem("csrf_token");
};
