const _BACKEND_BASE_URL =
  process.env.BACKEND_BASE_URL || "http://localhost:3001";
export const buildBackendUrl = (url: string) => new URL(url, _BACKEND_BASE_URL);
