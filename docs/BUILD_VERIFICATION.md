# ✅ Guide de Vérification du Build

## 🎯 Vérifier que tout fonctionne correctement

Ce guide vous aide à vérifier que votre build génère bien les fichiers HTML statiques pour le SEO.

---

## 📋 Checklist Rapide

```bash
# 1. Lancer le build
npm run build

# 2. Vérifier le nombre de fichiers HTML générés
find dist -name "index.html" | wc -l
# ✅ Résultat attendu : 11

# 3. Lister tous les fichiers HTML
find dist -name "index.html"
# ✅ Vous devriez voir :
#    dist/index.html
#    dist/approche/index.html
#    dist/therapie/index.html
#    dist/therapie/deuil/index.html
#    dist/therapie/neurodiversite/index.html
#    dist/therapie/relation-conflictuelle/index.html
#    dist/temoignages/index.html
#    dist/a-propos/index.html
#    dist/contact/index.html
#    dist/legal/index.html
#    dist/faq/index.html

# 4. Vérifier qu'une page contient du contenu
cat dist/approche/index.html | grep "<h1"
# ✅ Si vous voyez du contenu, c'est bon !

# 5. Tester localement
npx serve dist
# Puis ouvrez http://localhost:3000
```

---

## 🔍 Que Vérifier dans la Console

### Pendant `npm run build`

**1. Phase Vite** :
```
> vite build

vite v6.3.5 building for production...
✓ 1234 modules transformed.
dist/index.html                        1.23 kB │ gzip: 0.67 kB
dist/assets/index-abc123.js           45.67 kB │ gzip: 12.34 kB
dist/assets/index-def456.css           8.90 kB │ gzip: 2.34 kB
✓ built in 12.34s
```

**2. Phase react-snap** :
```
> react-snap

🔥 Starting react-snap
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
```

**Si vous voyez tous ces ✅, c'est parfait !**

---

## 🚨 Problèmes Courants

### ❌ react-snap ne s'exécute pas

**Symptôme** :
```
> vite build
✓ built in 12.34s

(Pas de ligne "react-snap")
```

**Cause** : Le script `postbuild` n'est pas configuré.

**Solution** : Vérifiez `package.json` ligne 8 :
```json
"scripts": {
  "build": "vite build",
  "postbuild": "react-snap"  // ← Doit être présent
}
```

---

### ❌ Un seul fichier HTML dans dist/

**Symptôme** :
```bash
find dist -name "index.html"
# Résultat : dist/index.html (seulement 1 fichier)
```

**Causes possibles** :

1. **Config `source` incorrecte** :
   - Vérifiez `package.json` ligne 95 : doit être `"source": "dist"`

2. **Routes manquantes** :
   - Vérifiez `package.json` lignes 104-113 : toutes vos routes doivent être listées

3. **Erreur JavaScript pendant le pre-render** :
   - Relancez `npm run build` et regardez les erreurs dans la console

---

### ❌ Erreur Puppeteer

**Symptôme** :
```
Error: Failed to launch the browser process!
```

**Solution** : Ajoutez dans `package.json` :
```json
"reactSnap": {
  "puppeteerArgs": [
    "--no-sandbox",
    "--disable-setuid-sandbox"
  ]
}
```

✅ **Déjà configuré dans votre projet !**

---

### ❌ Contenu manquant dans le HTML

**Symptôme** :
```bash
cat dist/approche/index.html
# Vous voyez : <div id="root"></div>  ← VIDE
```

**Causes possibles** :

1. **Le composant charge le contenu dans `useEffect`** :
   - react-snap capture le premier rendu
   - Le contenu chargé dans `useEffect` n'est pas capturé

2. **Lazy loading trop agressif** :
   - Les composants lazy-loaded peuvent ne pas être rendus à temps

**Solution** : Vérifiez que le contenu principal est rendu immédiatement (pas dans `useEffect`).

---

## 📊 Structure Attendue du Dossier `dist/`

```
dist/
│
├─ index.html                              ← Page d'accueil (/)
│
├─ approche/
│  └─ index.html                           ← /approche
│
├─ therapie/
│  ├─ index.html                           ← /therapie
│  ├─ deuil/
│  │  └─ index.html                        ← /therapie/deuil
│  ├─ neurodiversite/
│  │  └─ index.html                        ← /therapie/neurodiversite
│  └─ relation-conflictuelle/
│     └─ index.html                        ← /therapie/relation-conflictuelle
│
├─ temoignages/
│  └─ index.html                           ← /temoignages
│
├─ a-propos/
│  └─ index.html                           ← /a-propos
│
├─ contact/
│  └─ index.html                           ← /contact
│
├─ legal/
│  └─ index.html                           ← /legal
│
├─ faq/
│  └─ index.html                           ← /faq
│
├─ assets/
│  ├─ index-[hash].js                      ← JavaScript minifié
│  ├─ index-[hash].css                     ← CSS minifié
│  ├─ react-vendor-[hash].js               ← React vendor chunk
│  └─ ui-vendor-[hash].js                  ← UI vendor chunk
│
├─ images/
│  ├─ [image1].png
│  ├─ [image2].png
│  └─ ...                                  ← Vos 17 images
│
├─ robots.txt                              ← SEO
├─ sitemap.xml                             ← SEO
└─ _redirects                              ← Netlify redirects
```

**Total de fichiers HTML** : **11**

---

## 🧪 Tests Avancés

### Test 1 : Vérifier le contenu pré-rendu

```bash
# Vérifier que la page approche contient du texte
cat dist/approche/index.html | grep -i "approche"

# Vérifier que la page contact contient le formulaire
cat dist/contact/index.html | grep -i "formulaire"

# Vérifier les métadonnées
cat dist/a-propos/index.html | grep "<title>"
```

---

### Test 2 : Vérifier les métadonnées SEO

```bash
# Vérifier le titre
cat dist/approche/index.html | grep "<title>"

# Vérifier la description
cat dist/approche/index.html | grep "description"

# Vérifier Schema.org
cat dist/approche/index.html | grep "application/ld+json"
```

---

### Test 3 : Test sans JavaScript

```bash
# Démarrer le serveur local
npx serve dist

# Dans un autre terminal, récupérer la page sans JavaScript
curl http://localhost:3000/approche

# Si vous voyez du contenu HTML complet, c'est parfait !
```

---

### Test 4 : Simuler Google Bot

```bash
# Google Bot ne charge pas le JavaScript
# Vérifiez que le contenu est visible dans le HTML source

curl -A "Googlebot" http://localhost:3000/approche
```

**Si le contenu est visible**, Google pourra indexer votre page ! ✅

---

## 📈 Mesurer l'Impact SEO

### Avant react-snap

**Test** :
```bash
curl http://localhost:3000/approche | grep "<h1"
# Résultat : (rien)
```

**Problème** : Le `<h1>` est chargé par JavaScript, invisible pour Google.

---

### Après react-snap

**Test** :
```bash
curl http://localhost:3000/approche | grep "<h1"
# Résultat : <h1>Mon Approche Thérapeutique</h1>
```

**Succès** : Le `<h1>` est pré-rendu dans le HTML ! ✅

---

## 🚀 Déploiement sur Netlify

### Vérification avant déploiement

```bash
# 1. Build local
npm run build

# 2. Vérifier la structure
ls -R dist/

# 3. Tester localement
npx serve dist

# 4. Vérifier chaque page manuellement :
#    - http://localhost:3000/
#    - http://localhost:3000/approche
#    - http://localhost:3000/therapie
#    - http://localhost:3000/contact
#    - etc.

# 5. Si tout fonctionne, déployer !
git add .
git commit -m "Fix react-snap configuration"
git push
```

---

### Vérification après déploiement sur Netlify

1. **Allez sur Netlify** → Deploys → Dernier déploiement

2. **Vérifiez les logs** :
```
Build command: npm run build
> vite build
✓ built in 15s
> react-snap
✅ / (200)
✅ /approche (200)
...
```

3. **Testez votre site** :
   - Visitez `https://abigailtherapeute.com/approche`
   - Faites `Ctrl+U` (View Source)
   - Vérifiez que le contenu est visible dans le HTML

---

## ✅ Checklist de Validation Finale

### Build Local
- [ ] `npm run build` s'exécute sans erreur
- [ ] react-snap affiche ✅ pour les 11 routes
- [ ] `find dist -name "index.html" | wc -l` retourne `11`
- [ ] `npx serve dist` fonctionne
- [ ] Toutes les pages s'affichent correctement

### Contenu Pré-rendu
- [ ] View Source montre le contenu HTML complet
- [ ] Les balises `<h1>` sont visibles dans le HTML
- [ ] Les métadonnées SEO sont pré-rendues
- [ ] Les balises Schema.org sont présentes

### SEO
- [ ] `curl` sans JavaScript montre le contenu
- [ ] Les titres sont spécifiques à chaque page
- [ ] Les descriptions sont uniques
- [ ] Le contenu est indexable par Google

### Netlify
- [ ] Les logs de build montrent react-snap
- [ ] Toutes les routes retournent 200
- [ ] Le site fonctionne en production
- [ ] Les redirects fonctionnent

---

## 🎯 Résumé

**Question** : C'est normal d'avoir un seul `index.html` ?

**Réponse** :
- ✅ **Après `vite build`** : Oui, un seul fichier
- ✅ **Après `react-snap`** : Non, vous devez avoir **11 fichiers HTML**
- ✅ **Configuration corrigée** : `source: "dist"` + routes mises à jour
- ✅ **Prochaine étape** : Lancez `npm run build` et vérifiez !

---

## 🛠️ Commandes Utiles

```bash
# Build complet
npm run build

# Compter les fichiers HTML
find dist -name "index.html" | wc -l

# Lister tous les fichiers HTML
find dist -name "index.html"

# Voir le contenu d'une page
cat dist/approche/index.html

# Servir localement
npx serve dist

# Vérifier le contenu sans JavaScript
curl http://localhost:3000/approche

# Nettoyer et rebuilder
rm -rf dist/ && npm run build
```

---

**Votre site est maintenant optimisé pour le SEO ! 🎉**

Pour plus de détails sur react-snap, consultez : **[REACT_SNAP_GUIDE.md](./REACT_SNAP_GUIDE.md)**
