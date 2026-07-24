# Google Analytics - Configuration et Suivi

Date : Mars 2026  
ID de suivi : **G-HD9XJSQYR7**

---

## ✅ Installation complétée

Google Analytics 4 (GA4) a été installé avec succès sur votre site.

### Emplacement du code
**Fichier : `/index.html`**
- Script placé dans le `<head>` pour un chargement optimal
- Chargement asynchrone (`async`) pour ne pas bloquer le rendu
- DNS prefetch ajouté pour améliorer les performances

---

## 📊 Données collectées automatiquement

Google Analytics suit automatiquement :

### Événements automatiques
- ✅ **Page views** - Chaque page visitée
- ✅ **Session start** - Début de chaque session
- ✅ **First visit** - Première visite d'un utilisateur
- ✅ **Scroll depth** - Profondeur de défilement
- ✅ **Outbound clicks** - Clics sur liens externes
- ✅ **Site search** - Recherches sur le site (si activé)
- ✅ **File downloads** - Téléchargements de fichiers

### Métriques d'engagement
- Durée de session
- Pages par session
- Taux de rebond
- Temps d'engagement

### Données démographiques (si activées dans GA4)
- Âge et sexe (anonymisées)
- Centres d'intérêt
- Localisation géographique
- Langue
- Appareil et navigateur

---

## 🔍 Événements personnalisés recommandés

Pour suivre les conversions importantes sur votre site de thérapie :

### 1. Soumission du formulaire de contact

Ajoutez dans `/src/app/components/ContactSection.tsx` après la soumission réussie :

```typescript
// Après la soumission réussie du formulaire
if (typeof window !== 'undefined' && (window as any).gtag) {
  (window as any).gtag('event', 'contact_form_submission', {
    event_category: 'engagement',
    event_label: 'Contact Form',
    value: 1
  });
}
```

### 2. Clic sur le bouton "Rendez-vous"

Pour suivre les intentions de prise de rendez-vous :

```typescript
// Dans Header.tsx, SecondaryButton.tsx, etc.
const handleRendezVousClick = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: 'Rendez-vous Button',
      page_location: window.location.pathname
    });
  }
};
```

### 3. Clic sur les cartes thérapie (HelpCard)

Pour savoir quels types de thérapie intéressent le plus :

```typescript
// Dans HelpCard.tsx
const trackTherapyClick = (therapyType: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'therapy_card_click', {
      event_category: 'engagement',
      event_label: therapyType,
      page_location: '/therapie'
    });
  }
};
```

### 4. Appel téléphonique

Pour suivre les clics sur le numéro de téléphone :

```typescript
// Lors du clic sur le lien tel:
if (typeof window !== 'undefined' && (window as any).gtag) {
  (window as any).gtag('event', 'phone_call_click', {
    event_category: 'conversion',
    event_label: 'Phone Number Click',
    value: 1
  });
}
```

### 5. Email click

Pour suivre les clics sur l'email :

```typescript
// Lors du clic sur le lien mailto:
if (typeof window !== 'undefined' && (window as any).gtag) {
  (window as any).gtag('event', 'email_click', {
    event_category: 'conversion',
    event_label: 'Email Click',
    value: 1
  });
}
```

---

## 🎯 Objectifs de conversion à créer dans GA4

### Dans Google Analytics 4 → Admin → Événements

Créez ces événements comme conversions :

1. **contact_form_submission** 
   - Objectif principal : Soumission du formulaire
   - Valeur : Important

2. **phone_call_click**
   - Objectif : Clic sur téléphone
   - Valeur : Important

3. **email_click**
   - Objectif : Clic sur email
   - Valeur : Moyen

4. **cta_click** avec label "Rendez-vous Button"
   - Objectif : Intention de rendez-vous
   - Valeur : Important

---

## 📈 Rapports personnalisés recommandés

### Rapport 1 : Funnel de conversion
1. Visite page d'accueil
2. Navigation vers page "Thérapie" ou "Approche"
3. Navigation vers page "Contact"
4. Soumission formulaire OU clic téléphone

### Rapport 2 : Pages de thérapie populaires
Comparez les vues entre :
- `/therapie/deuil`
- `/therapie/relation-conflictuelle`
- `/therapie/neurodiversite`

### Rapport 3 : Sources de trafic
- Organique (Google)
- Direct
- Réseaux sociaux
- Référents

---

## 🔐 Confidentialité et RGPD

### ⚠️ Important pour un site de thérapie

Votre site traite des données sensibles (santé). Vous devez :

### 1. Anonymisation IP (déjà activée par défaut dans GA4)
✅ Google Analytics 4 anonymise automatiquement les IPs.

### 2. Ajouter une politique de confidentialité

Créez une page `/politique-confidentialite` qui explique :
- Utilisation de Google Analytics
- Cookies utilisés
- Durée de conservation des données
- Droits des utilisateurs (RGPD)

### 3. Banner de consentement des cookies

**Option 1 - Simple (recommandée pour commencer) :**
Ajouter un simple message informatif dans le footer ou une bannière.

**Option 2 - Complète (si requis) :**
Installer un gestionnaire de consentement comme :
- Axeptio
- Cookiebot
- Onetrust

### 4. Configuration GA4 pour la confidentialité

Dans Google Analytics Admin → Collecte de données :
- ✅ Activer "Anonymisation IP" (déjà activé)
- ✅ Désactiver "Remarketing" (pour site de thérapie)
- ✅ Désactiver "Signaux Google" (données démographiques) si souhaité
- ✅ Régler la durée de conservation des données à 14 mois maximum

---

## 🚀 Vérification de l'installation

### 1. Google Analytics Debugger
Installez l'extension Chrome "Google Analytics Debugger" :
1. Visitez votre site
2. Ouvrez la console Chrome (F12)
3. Activez l'extension
4. Vérifiez que les événements sont envoyés

### 2. Vue en temps réel
Dans Google Analytics :
1. Allez dans **Rapports** → **Temps réel**
2. Visitez votre site dans un autre onglet
3. Vous devriez voir votre visite en temps réel

### 3. Extension Google Tag Assistant
Utilisez "Tag Assistant" de Google pour vérifier :
- Présence de la balise GA4
- ID de suivi correct
- Pas d'erreurs

---

## 📊 Métriques clés à suivre

### Pour un site de thérapie

#### Acquisition
- **Source/Medium** : D'où viennent vos visiteurs ?
- **Campagnes** : Si vous faites de la publicité
- **Recherche organique** : Mots-clés utilisés (dans Google Search Console)

#### Engagement
- **Pages les plus visitées** : Quelles pages attirent le plus ?
- **Durée moyenne de session** : Les visiteurs prennent-ils le temps de lire ?
- **Taux de rebond** : Quittent-ils rapidement ?

#### Conversions
- **Formulaire de contact** : Combien de soumissions par mois ?
- **Clics téléphone/email** : Taux de conversion visite → contact
- **Funnel** : Quel chemin mène aux conversions ?

#### Géographique
- **Villes** : Montréal, autres villes du Québec ?
- **Régions** : Canada, autres pays ?

---

## 🎯 KPIs recommandés

Pour mesurer le succès de votre site :

| Métrique | Objectif | Fréquence |
|----------|----------|-----------|
| Visiteurs uniques/mois | 500+ | Mensuel |
| Durée moyenne de session | 2+ minutes | Mensuel |
| Taux de rebond | < 60% | Mensuel |
| Pages/session | 3+ | Mensuel |
| Soumissions formulaire | 10+ par mois | Mensuel |
| Taux de conversion | 2-5% | Mensuel |

---

## 🔧 Intégration avec Search Console

### Lier Google Analytics et Search Console

1. Dans GA4 → **Admin** → **Liens Search Console**
2. Cliquez sur **Lier**
3. Sélectionnez votre propriété Search Console
4. Confirmez

**Bénéfices :**
- Voir les mots-clés de recherche Google
- CTR et positions moyennes
- Pages avec le plus d'impressions
- Opportunités d'optimisation SEO

---

## 📝 Checklist de configuration

- [x] Code GA4 installé dans `/index.html`
- [x] DNS prefetch ajouté pour les performances
- [ ] Vérifier l'installation avec Google Tag Assistant
- [ ] Créer des événements personnalisés (formulaire, téléphone, etc.)
- [ ] Configurer les conversions dans GA4
- [ ] Créer une politique de confidentialité
- [ ] Ajouter un banner de consentement (si requis)
- [ ] Lier Google Search Console
- [ ] Créer un rapport personnalisé pour le funnel
- [ ] Définir des objectifs mensuels
- [ ] Configurer des alertes (baisse de trafic, etc.)

---

## 📚 Ressources utiles

### Documentation Google
- [Guide GA4 officiel](https://support.google.com/analytics/answer/10089681)
- [Événements recommandés](https://support.google.com/analytics/answer/9267735)
- [RGPD et Analytics](https://support.google.com/analytics/answer/9019185)

### Outils
- [Google Tag Assistant](https://tagassistant.google.com/)
- [GA Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/)
- [Google Analytics Demo Account](https://support.google.com/analytics/answer/6367342) - Pour apprendre

---

## 🎉 Prochaines étapes

1. **Vérifier l'installation** (dans les 24h)
   - Visitez votre site
   - Vérifiez dans "Temps réel" de GA4

2. **Configurer les événements** (cette semaine)
   - Formulaire de contact
   - Clics téléphone/email
   - Navigation entre pages

3. **Créer les objectifs** (cette semaine)
   - Marquer les événements importants comme conversions

4. **Politique de confidentialité** (dans le mois)
   - Créer la page
   - Ajouter le lien dans le footer
   - (Optionnel) Ajouter un banner de cookies

5. **Analyser les données** (après 1 mois)
   - Premiers insights sur le trafic
   - Ajuster la stratégie de contenu

---

**Installation effectuée avec succès !** 🎉

Votre site est maintenant équipé de Google Analytics et prêt à collecter des données précieuses sur vos visiteurs.

---

**Note importante pour la confidentialité :**  
Étant donné que votre site concerne la thérapie (données de santé), assurez-vous de respecter les lois sur la confidentialité au Québec (Loi 25) et au Canada (PIPEDA), en plus du RGPD européen si vous avez des visiteurs européens.
