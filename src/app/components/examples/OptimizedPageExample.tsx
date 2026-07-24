/**
 * EXEMPLE - Composant de page optimisé pour Core Web Vitals
 * 
 * Ce fichier est un EXEMPLE qui montre les meilleures pratiques
 * pour créer une page avec d'excellents scores Core Web Vitals.
 * 
 * NE PAS utiliser directement - c'est juste un guide de référence.
 */

import { lazy, Suspense } from 'react';
import { OptimizedImage } from '../OptimizedImage';
import { FadeInOnScroll } from '../FadeInOnScroll';
import { useOptimizedIntersectionObserver } from '../../hooks/useOptimizedIntersectionObserver';

// Lazy-load des composants lourds pour améliorer INP
const HeavyComponent = lazy(() => import('./HeavyComponent'));

export function OptimizedPageExample() {
  // Hook d'intersection observer optimisé
  const { ref: videoRef, isIntersecting: videoVisible } = useOptimizedIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
    delay: 200, // Retarde l'initialisation pour ne pas bloquer le thread principal
  });

  return (
    <div className="optimized-page">
      {/* 
        SECTION HERO - Optimisée pour LCP 
        ================================
      */}
      <section className="hero bg-gray-100 min-h-[600px]">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contenu texte - Always visible (pas d'animation sur hero) */}
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">
                Titre Principal Optimisé
              </h1>
              <p className="text-xl text-gray-600">
                Le contenu hero doit se charger le plus vite possible
                pour améliorer le LCP.
              </p>
            </div>

            {/* 
              Image Hero - CRITIQUE pour LCP 
              - priority={true} : fetchpriority="high"
              - aspectRatio : prévient CLS
              - loading="eager" : chargement immédiat
            */}
            <OptimizedImage
              src="votre-image-hero.jpg"
              alt="Image principale"
              priority={true}  // IMPORTANT pour LCP
              aspectRatio="16/9"  // IMPORTANT pour CLS
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 
        SECTION CONTENU - Animations au scroll 
        =====================================
      */}
      <section className="content py-16 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Animation au scroll - FadeInOnScroll est déjà optimisé */}
          <FadeInOnScroll>
            <h2 className="text-4xl font-bold text-center mb-12">
              Nos Services
            </h2>
          </FadeInOnScroll>

          {/* Grille de cartes avec animations échelonnées */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <FadeInOnScroll 
                key={item}
                delay={index * 100}  // Animation échelonnée
              >
                <div className="card bg-gray-50 p-6 rounded-lg">
                  {/* 
                    Images standard - Lazy loading automatique 
                    - aspectRatio pour prévenir CLS
                    - loading="lazy" par défaut (pas besoin de le spécifier)
                  */}
                  <OptimizedImage
                    src={`image-${item}.jpg`}
                    alt={`Service ${item}`}
                    aspectRatio="4/3"
                    className="w-full rounded mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Service {item}
                  </h3>
                  <p className="text-gray-600">
                    Description du service avec du contenu optimisé.
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 
        SECTION VIDEO - Lazy loading intelligent 
        =======================================
      */}
      <section className="video-section py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <h2 className="text-4xl font-bold text-center mb-12">
              Notre Présentation Vidéo
            </h2>
          </FadeInOnScroll>

          {/* 
            Vidéo chargée uniquement quand visible (améliore INP) 
            Utilisation du hook useOptimizedIntersectionObserver
          */}
          <div 
            ref={videoRef}
            className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
            style={{ 
              // Réserve l'espace pour prévenir CLS
              minHeight: '400px' 
            }}
          >
            {videoVisible && (
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Vidéo de présentation"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {!videoVisible && (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Chargement de la vidéo...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 
        SECTION COMPOSANT LOURD - Code Splitting 
        ========================================
      */}
      <section className="heavy-section py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <h2 className="text-4xl font-bold text-center mb-12">
              Composant Complexe
            </h2>
          </FadeInOnScroll>

          {/* 
            Lazy loading de composant React 
            - Suspense avec fallback pour prévenir CLS
            - Améliore INP en réduisant le bundle initial
          */}
          <Suspense fallback={
            <div 
              className="bg-gray-100 rounded-lg p-8 animate-pulse"
              style={{ 
                // Réserve l'espace approximatif (prévient CLS)
                minHeight: '300px' 
              }}
            >
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          }>
            <HeavyComponent />
          </Suspense>
        </div>
      </section>

      {/* 
        SECTION IMAGES MULTIPLES - Aspect-ratio pour toutes 
        ==================================================
      */}
      <section className="gallery py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <h2 className="text-4xl font-bold text-center mb-12">
              Galerie Photos
            </h2>
          </FadeInOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <FadeInOnScroll key={item} delay={index * 50}>
                {/* 
                  Chaque image a un aspect-ratio défini 
                  - Prévient CLS quand elles se chargent
                  - Lazy loading automatique
                */}
                <OptimizedImage
                  src={`gallery-${item}.jpg`}
                  alt={`Photo de galerie ${item}`}
                  aspectRatio="1/1"
                  className="w-full rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * RÉSUMÉ DES OPTIMISATIONS UTILISÉES :
 * ===================================
 * 
 * ✅ LCP (Largest Contentful Paint) :
 *    - OptimizedImage avec priority={true} sur image hero
 *    - Préchargement des polices (dans index.html)
 *    - fetchpriority="high" automatique
 * 
 * ✅ CLS (Cumulative Layout Shift) :
 *    - aspectRatio sur TOUTES les images
 *    - minHeight sur les conteneurs de contenu dynamique
 *    - Suspense avec fallback de taille fixe
 *    - Espace réservé pour la vidéo
 * 
 * ✅ INP (Interaction to Next Paint) :
 *    - FadeInOnScroll avec GPU acceleration
 *    - Lazy loading de composants avec React.lazy()
 *    - useOptimizedIntersectionObserver avec delay
 *    - Animations CSS avec transform (GPU)
 * 
 * ✅ Performance générale :
 *    - Code splitting (React.lazy)
 *    - Lazy loading des images (automatique)
 *    - Lazy loading de la vidéo (seulement quand visible)
 *    - Animations échelonnées pour éviter le blocage
 */

export default OptimizedPageExample;
