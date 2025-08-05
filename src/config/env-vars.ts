export const envVars = {
  BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  PORT: import.meta.env.VITE_APP_PORT || "4500",
};
