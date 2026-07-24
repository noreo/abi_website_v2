import { useEffect } from 'react';

/**
 * Component to dynamically set the favicon
 * This ensures the favicon is loaded from the Figma asset
 * Note: The favicon image should be placed in /public/images/ directory
 */
export function FaviconComponent() {
  useEffect(() => {
    // Use a data URL for the favicon temporarily until the actual image is available
    const faviconDataUrl = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%237a0081"/><path d="M50 20 L70 60 L30 60 Z" fill="white"/></svg>';
    
    // Set the favicon dynamically
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = faviconDataUrl;
    
    if (!document.querySelector("link[rel*='icon']")) {
      document.head.appendChild(link);
    }

    // Set apple-touch-icon
    const appleLink = document.querySelector("link[rel='apple-touch-icon']") || document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = faviconDataUrl;
    
    if (!document.querySelector("link[rel='apple-touch-icon']")) {
      document.head.appendChild(appleLink);
    }
  }, []);

  return null;
}