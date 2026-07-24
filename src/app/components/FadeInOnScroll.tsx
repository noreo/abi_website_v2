import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
}

/**
 * Optimized FadeInOnScroll component with improved INP performance
 * - Uses content-visibility for better rendering performance
 * - Minimizes style recalculations
 * - Uses transform3d for GPU acceleration
 * - Automatic cleanup to prevent memory leaks
 */
export function FadeInOnScroll({
  children,
  className = "",
  delay = 0,
  duration = 300,
  threshold = 0.1,
}: FadeInOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // S'assurer que nous sommes côté client et que IntersectionObserver est disponible
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Pour le SSR, rendre le contenu visible immédiatement
      setIsVisible(true);
      return;
    }

    // Delay observer creation slightly to improve initial page load INP
    const timeoutId = setTimeout(() => {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame to batch DOM updates
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
            
            // Once visible, stop observing to free up resources
            if (ref.current && observerRef.current) {
              observerRef.current.unobserve(ref.current);
            }
          }
        },
        {
          threshold,
          rootMargin: "50px", // Start animation slightly before element is visible
        }
      );

      if (ref.current) {
        observerRef.current.observe(ref.current);
      }
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        // Use translate3d for GPU acceleration (better INP)
        transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        // Hint to browser about upcoming changes
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}