/**
 * Web Vitals Reporting
 * 
 * Ce fichier permet de monitorer les Core Web Vitals en production
 * et de les envoyer à un service d'analytics.
 * 
 * Usage:
 * - En développement : Log dans la console
 * - En production : Envoyer à Google Analytics, Vercel Analytics, etc.
 */

interface Metric {
  id: string;
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  navigationType: string;
}

/**
 * Détermine le rating d'une métrique selon les seuils Google
 */
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds: Record<string, { good: number; poor: number }> = {
    LCP: { good: 2500, poor: 4000 },
    FID: { good: 100, poor: 300 },
    INP: { good: 200, poor: 500 },
    CLS: { good: 0.1, poor: 0.25 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 },
  };

  const threshold = thresholds[name];
  if (!threshold) return 'good';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Formate la métrique pour l'affichage
 */
function formatMetric(metric: Metric): string {
  const emoji = {
    good: '✅',
    'needs-improvement': '⚠️',
    poor: '❌',
  }[metric.rating];

  const unit = metric.name === 'CLS' ? '' : 'ms';
  return `${emoji} ${metric.name}: ${metric.value}${unit} (${metric.rating})`;
}

/**
 * Envoie la métrique à Google Analytics (si disponible)
 */
function sendToGoogleAnalytics(metric: Metric) {
  // @ts-ignore - gtag peut ne pas être défini
  if (typeof window.gtag === 'function') {
    // @ts-ignore
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

/**
 * Envoie la métrique à un endpoint personnalisé
 */
async function sendToCustomEndpoint(metric: Metric) {
  // Exemple : Envoyer à votre propre API
  try {
    await fetch('/api/web-vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metric),
      // keepalive pour ne pas interrompre la requête lors de la navigation
      keepalive: true,
    });
  } catch (error) {
    // Ne pas logger en production pour éviter le bruit
    if (import.meta.env.DEV) {
      console.error('Error sending web vitals:', error);
    }
  }
}

/**
 * Handler principal pour les métriques Web Vitals
 */
export function handleWebVitals(metric: Metric) {
  // Ajouter le rating à la métrique
  const enrichedMetric = {
    ...metric,
    rating: getRating(metric.name, metric.value),
  };

  // En développement : Log dans la console
  if (import.meta.env.DEV) {
    console.log(formatMetric(enrichedMetric));
    console.table({
      Métrique: enrichedMetric.name,
      Valeur: `${enrichedMetric.value}${enrichedMetric.name === 'CLS' ? '' : 'ms'}`,
      Rating: enrichedMetric.rating,
      ID: enrichedMetric.id,
      Delta: enrichedMetric.delta,
      'Type de navigation': enrichedMetric.navigationType,
    });
  }

  // En production : Envoyer aux analytics
  if (import.meta.env.PROD) {
    // Option 1 : Google Analytics
    sendToGoogleAnalytics(enrichedMetric);

    // Option 2 : Endpoint personnalisé
    // sendToCustomEndpoint(enrichedMetric);

    // Option 3 : Vercel Analytics (si vous utilisez Vercel)
    // if (window.va) {
    //   window.va('event', 'Web Vitals', enrichedMetric);
    // }

    // Option 4 : Cloudflare Web Analytics
    // Automatique si vous avez configuré le script dans index.html
  }

  // Logging en production (optionnel, pour debugging)
  if (import.meta.env.PROD && enrichedMetric.rating === 'poor') {
    console.warn(
      `Poor ${enrichedMetric.name}: ${enrichedMetric.value}${enrichedMetric.name === 'CLS' ? '' : 'ms'}`
    );
  }
}

/**
 * Initialise le monitoring des Web Vitals
 * 
 * Note : Ce code nécessite le package 'web-vitals'
 * Installation : npm install web-vitals
 */
export async function initWebVitalsMonitoring() {
  if (typeof window === 'undefined') return;

  try {
    // Import dynamique pour ne pas bloquer le chargement initial
    const { onCLS, onINP, onLCP, onFCP, onTTFB } = await import('web-vitals');

    // Observer toutes les métriques
    onLCP(handleWebVitals);
    onINP(handleWebVitals);
    onCLS(handleWebVitals);
    onFCP(handleWebVitals);
    onTTFB(handleWebVitals);
  } catch (error) {
    // Le package web-vitals n'est pas installé
    if (import.meta.env.DEV) {
      console.warn(
        'web-vitals package not found. Install it with: npm install web-vitals'
      );
    }
  }
}

/**
 * Version lightweight sans dépendances externes
 * Utilise les API natives du navigateur
 */
export function initNativeWebVitalsMonitoring() {
  if (typeof window === 'undefined') return;

  // LCP - Largest Contentful Paint
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        const value = lastEntry.renderTime || lastEntry.loadTime;

        handleWebVitals({
          id: `lcp-${Date.now()}`,
          name: 'LCP',
          value,
          rating: getRating('LCP', value),
          delta: value,
          navigationType: 'navigate',
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // Browser ne supporte pas largest-contentful-paint
    }

    // FID - First Input Delay (pour les navigateurs qui ne supportent pas INP)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          const value = entry.processingStart - entry.startTime;

          handleWebVitals({
            id: `fid-${Date.now()}`,
            name: 'FID',
            value,
            rating: getRating('FID', value),
            delta: value,
            navigationType: 'navigate',
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // Browser ne supporte pas first-input
    }

    // CLS - Cumulative Layout Shift
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;

            handleWebVitals({
              id: `cls-${Date.now()}`,
              name: 'CLS',
              value: clsValue,
              rating: getRating('CLS', clsValue),
              delta: entry.value,
              navigationType: 'navigate',
            });
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Browser ne supporte pas layout-shift
    }

    // FCP - First Contentful Paint
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0] as any;
        const value = firstEntry.startTime;

        handleWebVitals({
          id: `fcp-${Date.now()}`,
          name: 'FCP',
          value,
          rating: getRating('FCP', value),
          delta: value,
          navigationType: 'navigate',
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // Browser ne supporte pas paint
    }

    // TTFB - Time to First Byte
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
      if (navigationEntry) {
        const value = navigationEntry.responseStart;

        handleWebVitals({
          id: `ttfb-${Date.now()}`,
          name: 'TTFB',
          value,
          rating: getRating('TTFB', value),
          delta: value,
          navigationType: navigationEntry.type,
        });
      }
    } catch (e) {
      // Erreur lors de la récupération de TTFB
    }
  }
}

/**
 * Fonction d'initialisation automatique
 * À appeler dans le point d'entrée de l'application
 */
export function setupWebVitals() {
  if (typeof window === 'undefined') return;

  // Attendre que la page soit chargée pour ne pas impacter les performances
  if (document.readyState === 'complete') {
    // Utiliser requestIdleCallback pour ne pas bloquer le thread principal
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => initNativeWebVitalsMonitoring(), { timeout: 2000 });
    } else {
      setTimeout(initNativeWebVitalsMonitoring, 1000);
    }
  } else {
    window.addEventListener('load', () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => initNativeWebVitalsMonitoring(), { timeout: 2000 });
      } else {
        setTimeout(initNativeWebVitalsMonitoring, 1000);
      }
    });
  }
}
