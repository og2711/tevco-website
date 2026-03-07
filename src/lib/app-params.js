// src/lib/app-params.js

const isNode = typeof window === 'undefined';

// Use a generic prefix for your standalone Tevco app
const STORAGE_PREFIX = 'tevco_';

const toSnakeCase = (str) => str.replace(/([A-Z])/g, '_$1').toLowerCase();

const getAppParamValue = (paramName, { defaultValue = null } = {}) => {
  if (isNode) return defaultValue;

  const storageKey = `${STORAGE_PREFIX}${toSnakeCase(paramName)}`;
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get(paramName);

  // 1. Check URL first
  if (searchParam) {
    localStorage.setItem(storageKey, searchParam);
    return searchParam;
  }

  // 2. Check LocalStorage
  const storedValue = localStorage.getItem(storageKey);
  if (storedValue) return storedValue;

  // 3. Fallback to default
  return defaultValue;
};

export const appParams = {
  // Use hardcoded defaults or generic env variables for standalone
  appId: getAppParamValue("app_id", { defaultValue: 'tevco-prod' }),
  token: getAppParamValue("access_token"),
  appBaseUrl: window.location.origin,
};