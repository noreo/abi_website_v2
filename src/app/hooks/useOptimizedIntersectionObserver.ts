import { useEffect, useRef, useState } from 'react';

interface UseOptimizedIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  /**
   * Delay the observer initialization to improve INP
   * Useful for non-critical animations
   */
  delay?: number;
}

/**
 * Optimized Intersection Observer hook for better INP
 * - Uses passive observation
 * - Supports delayed initialization to reduce main thread blocking
 * - Automatically disconnects when no longer needed
 * - Batches observations efficiently
 */
export function useOptimizedIntersectionObserver(
  options: UseOptimizedIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // S'assurer que nous sommes côté client
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Pour le SSR, considérer l'élément comme visible
      setIsIntersecting(true);
      setHasIntersected(true);
      return;
    }

    // Delay observer creation to improve initial page load (INP optimization)
    const timeoutId = setTimeout(() => {
      if (!elementRef.current) return;

      // Use requestIdleCallback if available for even better performance
      const createObserver = () => {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            // Process all entries in a single callback to reduce overhead
            entries.forEach((entry) => {
              const isNowIntersecting = entry.isIntersecting;
              
              setIsIntersecting(isNowIntersecting);

              if (isNowIntersecting && !hasIntersected) {
                setHasIntersected(true);

                // Disconnect observer if triggerOnce is enabled
                if (triggerOnce && observerRef.current && elementRef.current) {
                  observerRef.current.unobserve(elementRef.current);
                }
              }
            });
          },
          {
            threshold,
            rootMargin,
          }
        );

        if (elementRef.current) {
          observerRef.current.observe(elementRef.current);
        }
      };

      // Use requestIdleCallback for non-critical observers
      if ('requestIdleCallback' in window) {
        requestIdleCallback(createObserver, { timeout: 2000 });
      } else {
        createObserver();
      }
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasIntersected]);

  return { ref: elementRef, isIntersecting, hasIntersected };
}