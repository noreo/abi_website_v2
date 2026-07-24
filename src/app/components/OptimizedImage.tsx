import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  priority?: boolean; // For LCP images (hero, above-the-fold)
  loading?: 'lazy' | 'eager';
  className?: string;
}

/**
 * OptimizedImage component with Core Web Vitals optimizations:
 * - Prevents CLS with explicit aspect-ratio
 * - Uses fetchpriority for LCP images
 * - Proper loading attributes
 * - Error handling with fallback
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  aspectRatio,
  priority = false,
  loading = 'lazy',
  className = '',
  style,
  ...rest
}: OptimizedImageProps) {
  const [didError, setDidError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Calculate aspect-ratio if width and height are provided
  const computedAspectRatio = aspectRatio || (width && height ? `${width} / ${height}` : undefined);

  const imageStyle: React.CSSProperties = {
    ...style,
    // Prevent CLS by reserving space
    aspectRatio: computedAspectRatio,
    // Optimize rendering performance
    contentVisibility: priority ? 'auto' : 'auto',
    // Smooth fade-in when loaded (but keep minimal for INP)
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 150ms ease-in',
  };

  const errorFallbackSrc =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className}`}
        style={imageStyle}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={errorFallbackSrc} alt="Error loading image" />
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      // @ts-ignore - fetchpriority is valid but not in TS types yet
      fetchpriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      className={className}
      style={imageStyle}
      onError={handleError}
      onLoad={handleLoad}
      {...rest}
    />
  );
}
