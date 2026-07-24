# Audit SEO - Liens internes (Internal Linking)

Date : Mars 2026  
Site : Abigaïl Thérapeute

---

## ✅ Résumé de l'audit

**Statut général : EXCELLENT** ✅

Tous les liens de navigation interne utilisent correctement des balises sémantiques HTML appropriées (`<a>` ou React Router `<Link>` qui rend des `<a>`). Aucun lien de navigation n'utilise de `onClick` handlers ou de `<button>` pour la navigation.

---

## 🔍 Composants audités

### ✅ Header.tsx
**Statut : Parfait**

- Navigation desktop : Utilise `<NavLink>` de React Router (render `<a>`)
- Navigation mobile : Utilise `<NavLink>` de React Router (render `<a>`)
- Logo : Utilise `<Link>` vers la page d'accueil
- CTA "Rendez-vous" : Utilise `<Link>` vers `/contact`
- Sous-menu thérapie : Utilise `<NavLink>` pour tous les liens

**Bénéfices SEO :**
- ✅ Crawlable par les moteurs de recherche
- ✅ Accessible au clavier
- ✅ Support des lecteurs d'écran
- ✅ Attributs ARIA appropriés (`aria-label`)

---

### ✅ Footer.tsx
**Statut : Parfait**

Tous les liens utilisent `<Link>` de React Router :
- FAQ → `/faq`
- Respect des lois → `/legal`
- Me joindre → `/contact`

**Bénéfices SEO :**
- ✅ Liens de pied de page crawlables
- ✅ Distribution du PageRank interne
- ✅ Navigation claire pour les utilisateurs

---

### ✅ HelpCard.tsx
**Statut : Parfait**

Composant de carte cliquable utilisant `<Link>` comme conteneur :
- Toute la carte est un lien `<Link to={linkTo}>`
- Utilisé pour les 3 types de thérapie sur la page d'accueil

**Bénéfices SEO :**
- ✅ Zone de clic large (meilleure UX)
- ✅ Lien crawlable avec texte descriptif
- ✅ Hover states pour feedback visuel

---

### ✅ SecondaryButton.tsx
**Statut : Parfait**

Composant intelligent qui s'adapte selon l'usage :

**Liens internes (paramètre `to`) :**
```tsx
<SecondaryButton to="/therapie">
  Découvrir la thérapie
</SecondaryButton>
```
→ Rend un `<Link>` de React Router ✅

**Liens externes (paramètre `href`) :**
```tsx
<SecondaryButton href="https://example.com">
  Lien externe
</SecondaryButton>
```
→ Rend un `<a>` avec `target="_blank"` et `rel="noopener noreferrer"` ✅

**Actions (paramètre `onClick` uniquement) :**
```tsx
<SecondaryButton onClick={handleAction}>
  Action
</SecondaryButton>
```
→ Rend un `<button type="button">` ✅

**Bénéfices SEO :**
- ✅ Sémantique HTML correcte
- ✅ Différenciation claire entre liens et boutons
- ✅ Sécurité pour les liens externes (`noopener noreferrer`)

---

### ✅ Tarif.tsx
**Statut : Parfait**

Bouton CTA "Rendez-vous" utilise `<Link to="/contact">` ✅

---

### ✅ ContactCTA.tsx
**Statut : Parfait**

Bouton "Me joindre" utilise `<Link to="/contact">` ✅

---

## 📊 Analyse des patterns de navigation

### Pages principales liées

| Page source | Pages liées | Composant utilisé |
|-------------|-------------|-------------------|
| Header | Toutes les pages | `<NavLink>` |
| Home | /therapie, /a-propos | `<SecondaryButton>` avec `to` |
| Home | /therapie/deuil, /therapie/relation-conflictuelle, /therapie/neurodiversite | `<HelpCard>` |
| Tarif section | /contact | `<Link>` |
| ContactCTA | /contact | `<Link>` |
| Footer | /faq, /legal, /contact | `<Link>` |

---

## 🎯 Bonnes pratiques respectées

### ✅ 1. Sémantique HTML correcte
- **Liens de navigation** : `<a>` (via React Router `<Link>` ou `<NavLink>`)
- **Actions** : `<button>`
- **Pas de divs ou spans cliquables** pour la navigation

### ✅ 2. Accessibilité
- Tous les liens sont accessibles au clavier (Tab navigation)
- Support des lecteurs d'écran
- Attributs ARIA appropriés (`aria-label`, `aria-expanded`)
- Indicateurs visuels (hover, focus, active states)

### ✅ 3. SEO technique
- **Crawlabilité** : Tous les liens internes sont crawlables par Google
- **PageRank flow** : Distribution correcte du jus de lien interne
- **Anchor text descriptif** : Textes de liens explicites et pertinents
- **href attributes** : Toujours présents pour les liens (pas de href="#")

### ✅ 4. Performance
- **Pas de JavaScript requis** pour la navigation de base
- Les liens fonctionnent même si JavaScript est désactivé
- React Router gère le prefetching automatique

### ✅ 5. Expérience utilisateur
- **Zone de clic généreuse** : Cards entières cliquables
- **Feedback visuel** : Hover states, active states
- **Navigation au clavier** : Support complet Tab/Enter
- **Click droit fonctionnel** : "Ouvrir dans un nouvel onglet" fonctionne

---

## 🚫 Anti-patterns ÉVITÉS

### ❌ Liens avec onClick uniquement
```tsx
// ❌ MAUVAIS (non trouvé dans le code)
<div onClick={() => navigate('/page')}>Cliquez ici</div>
```

### ❌ Boutons pour la navigation
```tsx
// ❌ MAUVAIS (non trouvé dans le code)
<button onClick={() => window.location.href = '/page'}>
  Navigation
</button>
```

### ❌ Liens vides
```tsx
// ❌ MAUVAIS (non trouvé dans le code)
<a href="#" onClick={handleClick}>Cliquez</a>
```

---

## 📈 Recommandations pour de nouvelles fonctionnalités

### Pour les liens internes

**✅ FAIRE :**
```tsx
import { Link } from "react-router";

// Lien simple
<Link to="/page">Texte du lien</Link>

// Lien avec style
<Link 
  to="/page" 
  className="btn-primary"
>
  Texte du lien
</Link>

// Utiliser SecondaryButton pour les CTA
<SecondaryButton to="/contact">
  Rendez-vous
</SecondaryButton>
```

**❌ NE PAS FAIRE :**
```tsx
// Ne pas utiliser onClick pour la navigation
<div onClick={() => navigate('/page')}>...</div>

// Ne pas utiliser button pour la navigation
<button onClick={() => window.location = '/page'}>...</button>

// Ne pas utiliser href="#"
<a href="#" onClick={preventAndNavigate}>...</a>
```

### Pour les liens externes

**✅ FAIRE :**
```tsx
// Utiliser SecondaryButton
<SecondaryButton href="https://external.com">
  Lien externe
</SecondaryButton>

// Ou balise <a> directe
<a 
  href="https://external.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Lien externe
</a>
```

### Pour les actions (non-navigation)

**✅ FAIRE :**
```tsx
// Utiliser <button> pour les actions
<button onClick={handleAction}>
  Soumettre
</button>

// Ou SecondaryButton sans to/href
<SecondaryButton onClick={handleAction}>
  Action
</SecondaryButton>
```

---

## 🔍 Textes d'ancrage (Anchor Text) - Analyse SEO

### Liens vers /contact
Variations d'anchor text trouvées :
- "Rendez-vous" (Header, CTA buttons)
- "Me joindre" (Footer, ContactCTA)

**✅ Bon** : Diversité naturelle des anchor texts

### Liens vers /therapie
- "Thérapie" (Navigation)
- "Découvrir la thérapie" (CTA bouton)

**✅ Bon** : Textes descriptifs et variés

### Liens vers les sous-pages thérapie
- "Deuil" 
- "Relation conflictuelle"
- "Neurodiversité"

**✅ Excellent** : Keywords ciblés, descriptifs

---

## 📋 Checklist de vérification pour nouvelles pages

Lors de la création d'une nouvelle page, vérifiez :

- [ ] Les liens de navigation utilisent `<Link>` ou `<NavLink>`
- [ ] Les boutons d'action utilisent `<button>`
- [ ] Pas de `onClick` pour la navigation interne
- [ ] Les liens externes ont `rel="noopener noreferrer"`
- [ ] Les anchor texts sont descriptifs et pertinents
- [ ] Les liens sont accessibles au clavier
- [ ] Les liens ont des hover/focus states
- [ ] Pas de `href="#"` ou `href="javascript:void(0)"`

---

## 🎯 Score SEO - Liens internes

| Critère | Score | Note |
|---------|-------|------|
| Sémantique HTML | 10/10 | Parfait |
| Accessibilité | 10/10 | Complet |
| Crawlabilité | 10/10 | Tous les liens crawlables |
| Anchor text | 9/10 | Descriptifs et variés |
| Structure | 10/10 | Navigation claire |
| Performance | 10/10 | Prefetching React Router |

**Score global : 59/60 (98%)** 🎉

---

## 💡 Opportunités d'amélioration

### 1. Internal linking stratégique
Considérer l'ajout de liens contextuels dans le contenu :
- De la page "Approche" vers les pages thérapie spécifiques
- De chaque page thérapie vers les pages connexes
- Breadcrumbs pour améliorer la navigation (déjà implémenté avec SEO component)

### 2. Sitemap HTML
Créer une page `/sitemap` (en plus du sitemap.xml) avec tous les liens du site.

### 3. Related content
Ajouter une section "Articles/Pages connexes" en bas de chaque page.

---

## ✅ Conclusion

**Le site respecte toutes les meilleures pratiques SEO pour les liens internes.**

Aucune action corrective n'est nécessaire. La structure actuelle est optimale pour :
- Le crawling par les moteurs de recherche
- L'accessibilité
- L'expérience utilisateur
- La distribution du PageRank interne

---

**Audit effectué par : AI Assistant**  
**Date : Mars 2026**  
**Prochaine révision recommandée : Après tout ajout de nouvelles fonctionnalités**
