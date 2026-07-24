/**
 * Performance utilities for Core Web Vitals optimization
 */

/**
 * Debounce function for scroll events to improve INP
 * Reduces the frequency of expensive operations
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for high-frequency events to improve INP
 * Ensures function is called at most once per specified time period
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Run code during browser idle time to improve INP
 * Falls back to setTimeout if requestIdleCallback is not available
 */
export function runWhenIdle(callback: () => void, timeout = 2000) {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 1);
  }
}

/**
 * Preload critical resources for better LCP
 */
export function preloadResource(url: string, as: string, type?: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = url;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
}

/**
 * Monitor and log Core Web Vitals (for development)
 * Use only in development to track performance improvements
 */
export function logCoreWebVitals() {
  if (process.env.NODE_ENV !== 'production') {
    // LCP - Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // FID/INP - First Input Delay / Interaction to Next Paint
    new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // CLS - Cumulative Layout Shift
    let clsScore = 0;
    new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsScore += entry.value;
          console.log('CLS:', clsScore);
        }
      });
    }).observe({ entryTypes: ['layout-shift'] });
  }
}

/**
 * Defer non-critical JavaScript to improve initial page load
 */
export function deferNonCriticalJS(callback: () => void) {
  if (document.readyState === 'complete') {
    runWhenIdle(callback);
  } else {
    window.addEventListener('load', () => runWhenIdle(callback));
  }
}
