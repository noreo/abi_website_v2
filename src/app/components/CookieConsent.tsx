import { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'cookie-consent';
const CONSENT_EXPIRY_DAYS = 90; // 3 mois

interface ConsentData {
  accepted: boolean;
  timestamp: number;
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // S'assurer que nous sommes côté client
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return;
    }

    // Vérifier si l'utilisateur a déjà fait un choix
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (storedConsent) {
      try {
        const consentData: ConsentData = JSON.parse(storedConsent);
        const now = Date.now();
        const expiryTime = consentData.timestamp + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
        
        // Si le consentement a expiré, afficher la modal
        if (now > expiryTime) {
          localStorage.removeItem(COOKIE_CONSENT_KEY);
          setIsVisible(true);
        } else {
          // Appliquer le consentement existant
          applyConsent(consentData.accepted);
        }
      } catch (e) {
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }
  }, []);

  const applyConsent = (accepted: boolean) => {
    // S'assurer que nous sommes côté client
    if (typeof window === 'undefined') {
      return;
    }

    if (accepted) {
      // Activer Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
      }
    } else {
      // Désactiver Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied'
        });
      }
      // Désactiver également le tracking
      window['ga-disable-G-HD9XJSQYR7'] = true;
    }
  };

  const handleConsent = (accepted: boolean) => {
    // S'assurer que nous sommes côté client
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return;
    }

    const consentData: ConsentData = {
      accepted,
      timestamp: Date.now()
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    applyConsent(accepted);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-slide-in">
      <div className="bg-card rounded-lg shadow-2xl border border-border p-6">
        <h3 className="text-[18px] leading-relaxed text-primary font-bold">
          Utilisation des témoins (cookies)
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          J'utilise des témoins de connexion (cookies) pour améliorer votre 
          expérience du site avec Google Analytics. Vous pouvez accepter ou refuser 
          l'utilisation des témoins (valable pendant 3 mois).
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => handleConsent(true)}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-[18px] hover:opacity-90 transition-opacity"
          >
            Accepter
          </button>
          <button
            onClick={() => handleConsent(false)}
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold text-[18px] hover:bg-primary/10 transition-colors"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}

// Déclarer le type gtag pour TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}