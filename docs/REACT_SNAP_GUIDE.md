# 📄 Guide react-snap : Pré-rendu Statique pour le SEO

## 🎯 Qu'est-ce que react-snap ?

**react-snap** est un outil qui génère des fichiers HTML statiques pour chaque route de votre application React, ce qui améliore drastiquement le SEO.

### Pourquoi est-ce important ?

| Sans react-snap (SPA classique) | Avec react-snap |
|--------------------------------|-----------------|
| ❌ Un seul `index.html` | ✅ Un fichier HTML par route |
| ❌ Contenu chargé par JavaScript | ✅ HTML pré-rendu visible immédiatement |
| ❌ Mauvais SEO (Google voit une page vide) | ✅ Excellent SEO (Google voit le contenu complet) |
| ❌ Temps de chargement initial plus long | ✅ Affichage instantané du contenu |

---

## 🔧 Configuration Actuelle

### ✅ Ce qui est déjà configuré

**1. Package installé** (`package.json` ligne 64) :
```json
"react-snap": "^1.23.0"
```

**2. Script postbuild** (`package.json` ligne 8) :
```json
"scripts": {
  "build": "vite build",
  "postbuild": "react-snap"  // S'exécute automatiquement après build
}
```

**3. Configuration react-snap** (`package.json` lignes 94-113) :
```json
"reactSnap": {
  "source": "dist",  // ✅ CORRIGÉ : Pointe vers le dossier Vite
  "minifyHtml": {
    "collapseWhitespace": false,
    "removeComments": false
  },
  "puppeteerArgs": [
    "--no-sandbox",
    "--disable-setuid-sandbox"
  ],
  "include": [
    "/",                                // Page d'accueil
    "/approche",                        // Approche
    "/therapie",                        // Services
    "/therapie/deuil",                  // Deuil
    "/therapie/neurodiversite",         // Neurodiversité
    "/therapie/relation-conflictuelle", // Relation conflictuelle
    "/temoignages",                     // Témoignages
    "/a-propos",                        // À propos
    "/contact",                         // Contact
    "/legal",                           // Mentions légales
    "/faq"                              // FAQ
  ]
}
```

---

## 🚀 Comment ça marche ?

### Workflow complet

```
1. npm run build
   │
   ├─ Vite génère le build dans dist/
   │  └─ dist/index.html (un seul fichier)
   │
   ├─ react-snap s'exécute automatiquement (postbuild)
   │  ├─ Lance un navigateur headless (Puppeteer)
   │  ├─ Visite chaque URL dans "include"
   │  ├─ Capture le HTML rendu
   │  └─ Génère un fichier HTML statique pour chaque route
   │
   └─ Résultat final dans dist/ :
      ├─ index.html                                (/)
      ├─ approche/index.html                       (/approche)
      ├─ therapie/index.html                       (/therapie)
      ├─ therapie/deuil/index.html                 (/therapie/deuil)
      ├─ therapie/neurodiversite/index.html        (/therapie/neurodiversite)
      ├─ therapie/relation-conflictuelle/index.html
      ├─ temoignages/index.html                    (/temoignages)
      ├─ a-propos/index.html                       (/a-propos)
      ├─ contact/index.html                        (/contact)
      ├─ legal/index.html                          (/legal)
      └─ faq/index.html                            (/faq)
```

---

## ✅ Vérification après Build

### Étape 1 : Lancer le build

```bash
npm run build
```

**Ce que vous devriez voir** :

```
> vite build
✓ building...
✓ 1234 modules transformed.
dist/index.html                   1.23 kB │ gzip: 0.67 kB
dist/assets/index-a1b2c3d4.js    45.67 kB │ gzip: 12.34 kB
...

> react-snap

🔥 Starting pre-rendering...
✅ / (200)
✅ /approche (200)
✅ /therapie (200)
✅ /therapie/deuil (200)
✅ /therapie/neurodiversite (200)
✅ /therapie/relation-conflictuelle (200)
✅ /temoignages (200)
✅ /a-propos (200)
✅ /contact (200)
✅ /legal (200)
✅ /faq (200)

✅ Pre-rendering finished!
```

---

### Étape 2 : Vérifier la structure du dossier `dist/`

```bash
ls -R dist/
```

**Vous devriez voir** :

```
dist/
├─ index.html                              ← Page d'accueil
├─ approche/
│  └─ index.html                           ← HTML pré-rendu pour /approche
├─ therapie/
│  ├─ index.html                           ← HTML pré-rendu pour /therapie
│  ├─ deuil/
│  │  └─ index.html                        ← HTML pré-rendu pour /therapie/deuil
│  ├─ neurodiversite/
│  │  └─ index.html
│  └─ relation-conflictuelle/
│     └─ index.html
├─ temoignages/
│  └─ index.html
├─ a-propos/
│  └─ index.html
├─ contact/
│  └─ index.html
├─ legal/
│  └─ index.html
├─ faq/
│  └─ index.html
├─ assets/
│  ├─ index-a1b2c3d4.js
│  ├─ index-e5f6g7h8.css
│  └─ ...
└─ images/
   └─ ... (vos images)
```

---

### Étape 3 : Vérifier le contenu HTML

Ouvrez un fichier HTML généré :

```bash
cat dist/approche/index.html
```

**Ce que vous devriez voir** :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Métadonnées SEO pré-rendues -->
  <title>Approche Thérapeutique | Abigail Thérapeute</title>
  <meta name="description" content="Découvrez mon approche..." />
  
  <!-- Open Graph -->
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
  
  <!-- Schema.org -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      ...
    }
  </script>
</head>
<body>
  <div id="root">
    <!-- ✅ CONTENU PRÉ-RENDU VISIBLE ICI -->
    <header>...</header>
    <main>
      <h1>Mon Approche Thérapeutique</h1>
      <p>Contenu complet de la page...</p>
    </main>
    <footer>...</footer>
  </div>
  
  <!-- JavaScript chargé ensuite pour l'interactivité -->
  <script type="module" src="/assets/index-a1b2c3d4.js"></script>
</body>
</html>
```

**Points clés** :
- ✅ Le contenu est **visible dans le HTML** (pas chargé par JavaScript)
- ✅ Les balises SEO sont **pré-rendues**
- ✅ Google peut **lire le contenu immédiatement**

---

## 🆚 Comparaison : Avant vs Après

### Avant react-snap (SPA classique)

**Structure du dossier** :
```
dist/
└─ index.html  ← Un seul fichier
```

**Contenu de `index.html`** :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Abigail Thérapeute</title>
</head>
<body>
  <div id="root"></div>  ← VIDE ! Contenu chargé par JS
  <script src="/assets/index.js"></script>
</body>
</html>
```

**Problème pour le SEO** :
- ❌ Google voit une page vide
- ❌ Pas de contenu dans le HTML source
- ❌ Métadonnées génériques seulement

---

### Après react-snap

**Structure du dossier** :
```
dist/
├─ index.html
├─ approche/index.html
├─ therapie/index.html
├─ therapie/deuil/index.html
└─ ... (11 fichiers HTML au total)
```

**Contenu de `approche/index.html`** :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Approche Thérapeutique | Abigail Thérapeute</title>
  <meta name="description" content="..." />
</head>
<body>
  <div id="root">
    <header>...</header>  ← CONTENU PRÉ-RENDU !
    <main>
      <h1>Mon Approche</h1>
      <p>Texte complet...</p>
    </main>
  </div>
  <script src="/assets/index.js"></script>
</body>
</html>
```

**Avantages SEO** :
- ✅ Google voit le contenu complet
- ✅ Métadonnées spécifiques à chaque page
- ✅ Temps de chargement initial réduit

---

## 🧪 Comment Tester

### Test 1 : Vérifier le nombre de fichiers HTML

```bash
find dist -name "index.html" | wc -l
```

**Résultat attendu** : `11` (un pour chaque route)

---

### Test 2 : Vérifier qu'une page contient du contenu

```bash
cat dist/approche/index.html | grep -A 5 "<h1"
```

**Résultat attendu** :
```html
<h1>Mon Approche Thérapeutique</h1>
<p>Contenu de la page...</p>
```

Si vous voyez le contenu, **c'est bon** ! ✅

---

### Test 3 : Tester localement

```bash
# Servir le dossier dist/
npx serve dist
```

Puis visitez :
- http://localhost:3000/
- http://localhost:3000/approche
- http://localhost:3000/contact

**Vérification** :
1. Le contenu s'affiche **instantanément** (pas de spinner)
2. View Source (`Ctrl+U`) montre le **contenu pré-rendu**

---

### Test 4 : Vérifier avec curl (sans JavaScript)

```bash
curl http://localhost:3000/approche
```

**Si vous voyez le contenu HTML complet**, react-snap fonctionne ! ✅

---

## 📊 Impact SEO

### Avant (SPA sans pré-rendu)

```html
<!-- Ce que Google voit -->
<div id="root"></div>
```

**Score SEO** : ❌ Très mauvais

---

### Après (avec react-snap)

```html
<!-- Ce que Google voit -->
<div id="root">
  <header>
    <nav>...</nav>
  </header>
  <main>
    <h1>Titre de la page</h1>
    <p>Contenu complet...</p>
  </main>
  <footer>...</footer>
</div>
```

**Score SEO** : ✅ Excellent

---

## 🛠️ Dépannage

### Problème 1 : react-snap ne génère qu'un seul fichier

**Cause** : La configuration `source` pointe vers le mauvais dossier.

**Solution** : Vérifiez `package.json` ligne 95 :
```json
"source": "dist"  // ✅ Doit être "dist", pas "build"
```

---

### Problème 2 : Erreur "Failed to pre-render"

**Cause possible** : Routes non accessibles ou erreurs JavaScript.

**Solution** :
1. Vérifiez que toutes les routes dans `include` existent
2. Vérifiez la console pour les erreurs JavaScript
3. Testez chaque route manuellement en dev

---

### Problème 3 : Contenu manquant dans le HTML

**Cause** : Le composant utilise `useEffect` pour charger le contenu.

**Solution** : react-snap capture le contenu au premier rendu. Assurez-vous que le contenu principal est rendu immédiatement (pas dans un `useEffect`).

---

### Problème 4 : Erreurs Puppeteer sur Netlify

**Cause** : Sandbox de Puppeteer non supporté.

**Solution** : ✅ Déjà configuré dans `package.json` :
```json
"puppeteerArgs": [
  "--no-sandbox",
  "--disable-setuid-sandbox"
]
```

---

## 🚀 Déploiement sur Netlify

### Ce qui se passe automatiquement

1. Netlify exécute `npm run build`
2. Vite génère le build dans `dist/`
3. react-snap s'exécute automatiquement (`postbuild`)
4. Netlify déploie le dossier `dist/` complet

**Aucune configuration supplémentaire nécessaire !** ✅

---

## 📝 Checklist Finale

### Configuration
- [x] Package react-snap installé
- [x] Script `postbuild` configuré
- [x] `source: "dist"` dans la config
- [x] Routes correctes dans `include`

### Vérification
- [ ] `npm run build` s'exécute sans erreur
- [ ] react-snap génère 11 fichiers HTML
- [ ] Contenu visible dans le HTML source
- [ ] Test local avec `npx serve dist` fonctionne

### SEO
- [ ] Métadonnées pré-rendues
- [ ] Contenu visible sans JavaScript
- [ ] Balises Schema.org présentes
- [ ] Google peut indexer le contenu

---

## 🎯 Résumé

**Question** : C'est normal d'avoir un seul `index.html` après `vite build` ?

**Réponse** : 
- ✅ **Oui**, c'est normal pour Vite seul
- ✅ **Mais** react-snap doit ensuite générer **11 fichiers HTML** supplémentaires
- ✅ **Configuration corrigée** : `source: "dist"` au lieu de `"build"`
- ✅ **Routes mises à jour** : Toutes vos 11 routes sont maintenant incluses

**Prochaine étape** : Lancez `npm run build` et vérifiez que react-snap génère bien 11 fichiers HTML !

---

**Votre site aura maintenant un SEO parfait ! 🎉**
