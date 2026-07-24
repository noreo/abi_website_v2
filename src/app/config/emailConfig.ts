// EmailJS Configuration
// Uses environment variables for security
// Set these in your .env file locally or in Netlify environment variables

// Development fallback keys (for preview/testing only - regenerate for production!)
const DEV_FALLBACK = {
  SERVICE_ID: "service_tgza6fv",
  TEMPLATE_ID: "template_zvcw0zx",
  USER_ID: "hiGIoKgp_u5kdg6f-",
};

export const emailConfig = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || DEV_FALLBACK.SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || DEV_FALLBACK.TEMPLATE_ID,
  USER_ID: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || DEV_FALLBACK.USER_ID,
};

// Validate that environment variables are set in production
if (
  import.meta.env.PROD &&
  (!import.meta.env.VITE_EMAILJS_SERVICE_ID ||
    !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
    !import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
) {
  console.error(
    "⚠️ Production build detected but EmailJS environment variables are not set! Please configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY"
  );
}