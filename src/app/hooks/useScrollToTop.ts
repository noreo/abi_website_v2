import { useEffect } from "react";

/**
 * Hook to scroll to top when component mounts
 * Use this in individual page components as a backup
 */
export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
}
