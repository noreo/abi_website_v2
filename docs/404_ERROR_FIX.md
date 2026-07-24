# 🔧 Résolution de l'Erreur 404 sur Rafraîchissement

## 🚨 Problème

```
✅ Navigation par liens : Fonctionne
❌ Rafraîchissement de page : Erreur 404
❌ Accès direct à une URL : Erreur 404
```

**Exemple** :
- `https://abigailtherapeute.com/` → ✅ Fonctionne
- `https://abigailtherapeute.com/approche` → ❌ 404
- Cliquer sur un lien vers `/approche` → ✅ Fonctionne
- Rafraîchir `/approche` → ❌ 404

---

## 🎯 Cause du Problème

### Comment fonctionne une SPA (Single Page Application)

**1. Navigation normale (clic sur lien)** :
```
Utilisateur clique sur "Approche"
    ↓
React Router change l'URL → /approche
    ↓
React affiche le composant Approach
    ↓
✅ Pas de requête serveur, tout se passe côté client
```

**2. Rafraîchissement ou accès direct** :
```
Utilisateur visite directement /approche
    ↓
Le navigateur demande au serveur : "Donne-moi /approche/index.html"
    ↓
Netlify cherche le fichier /approche/index.html
    ↓
❌ Fichier trouvé MAIS Netlify sert le mauvais dossier
    ↓
❌ 404 Not Found
```

---

## 🔧 Solutions Appliquées

### ✅ Correction 1 : netlify.toml - Dossier `publish`

**Problème** : Netlify cherchait dans le mauvais dossier

**Avant** :
```toml
[build]
  publish = "build"  # ❌ Vite génère dans "dist"
```

**Après** :
```toml
[build]
  publish = "dist"  # ✅ Dossier correct
```

---

### ✅ Correction 2 : Fichier `_redirects`

**Problème** : `/public/_redirects` était un **dossier** au lieu d'un **fichier**

**Avant** :
```
/public/
└── _redirects/           ← ❌ Dossier
    └── main.tsx
```

**Après** :
```
/public/
└── _redirects            ← ✅ Fichier
```

**Contenu de `/public/_redirects`** :
```
/*    /index.html   200
```

**Ce que ça fait** :
- Toutes les requêtes (`/*`) sont redirigées vers `/index.html`
- Le code `200` signifie "réécriture" (pas de redirection visible)
- React Router prend ensuite le relais côté client

---

### ✅ Correction 3 : Headers de Cache Optimisés

**Problème** : Cache configuré pour `/static/*` mais Vite utilise `/assets/*`

**Avant** :
```toml
[[headers]]
  for = "/static/*"  # ❌ Vite n'utilise pas /static/
```

**Après** :
```toml
[[headers]]
  for = "/assets/*"  # ✅ Dossier Vite correct
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"  # ✅ Ajouté pour vos images
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## 🧪 Comment Tester Localement

### Test 1 : Vérifier le fichier `_redirects`

```bash
# Vérifier que c'est un fichier, pas un dossier
ls -la public/_redirects

# Afficher le contenu
cat public/_redirects
# Devrait afficher : /*    /index.html   200
```

---

### Test 2 : Build et servir localement

```bash
# Build complet
npm run build

# Vérifier la structure de dist/
ls -la dist/

# Servir avec npx serve (simule Netlify)
npx serve dist
```

**Puis testez** :
1. Visitez http://localhost:3000/
2. Visitez http://localhost:3000/approche
3. Rafraîchissez la page
4. Testez toutes les routes

**Résultat attendu** : ✅ Toutes les pages fonctionnent !

---

### Test 3 : Vérifier que `_redirects` est copié dans `dist/`

```bash
# Vérifier que le fichier est dans dist/
cat dist/_redirects
# Devrait afficher : /*    /index.html   200
```

**Si le fichier n'est pas là** :
- Vite copie automatiquement tout le contenu de `/public/` dans `/dist/`
- Vérifiez que `/public/_redirects` est bien un **fichier** (pas un dossier)

---

## 🚀 Déploiement sur Netlify

### Étape 1 : Commit et Push

```bash
git add .
git commit -m "Fix 404 errors - Update netlify.toml and _redirects"
git push
```

---

### Étape 2 : Vérifier le Build sur Netlify

1. Allez sur **Netlify Dashboard** → Votre site → **Deploys**
2. Regardez le dernier déploiement
3. Vérifiez les logs :

```
Build command: npm run build
> vite build
✓ built in 12s
> react-snap
✅ / (200)
✅ /approche (200)
...

Publish directory: dist  ← ✅ Doit être "dist"
```

---

### Étape 3 : Tester en Production

Visitez directement ces URLs :
- `https://abigailtherapeute.com/`
- `https://abigailtherapeute.com/approche`
- `https://abigailtherapeute.com/therapie/deuil`
- `https://abigailtherapeute.com/contact`

**Puis rafraîchissez chaque page** : ✅ Devrait fonctionner !

---

## 📊 Comparaison Avant/Après

### Avant (Erreur 404)

```
Utilisateur → /approche
    ↓
Netlify cherche dans /build/approche/index.html  ← ❌ Mauvais dossier
    ↓
404 Not Found
```

---

### Après (Fonctionne)

```
Utilisateur → /approche
    ↓
Netlify cherche dans /dist/approche/index.html  ← ✅ Bon dossier
    ↓
Règle _redirects : /* → /index.html (200)
    ↓
React Router charge la route /approche
    ↓
✅ Page affichée
```

---

## 🔍 Vérification de la Configuration

### netlify.toml

```toml
[build]
  command = "npm run build"
  publish = "dist"  # ✅ Doit être "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200  # ✅ Réécriture, pas redirection
```

---

### /public/_redirects

```
/*    /index.html   200
```

**Format** :
- `/*` : Toutes les routes
- `/index.html` : Fichier cible
- `200` : Code de réécriture (invisible pour l'utilisateur)

---

## 🆘 Dépannage

### Problème 1 : Toujours 404 en local

**Cause** : `npx serve` ne lit pas `_redirects` par défaut

**Solution** : Utilisez l'option `-s` :
```bash
npx serve -s dist
```

L'option `-s` (single-page) active le fallback SPA automatique.

---

### Problème 2 : 404 sur Netlify mais pas en local

**Causes possibles** :

1. **`netlify.toml` pas commité** :
```bash
git add netlify.toml
git commit -m "Add netlify.toml"
git push
```

2. **Publish directory incorrect dans Netlify UI** :
   - Allez sur Netlify → Site settings → Build & deploy
   - Vérifiez : Publish directory = `dist`

3. **Cache Netlify** :
   - Sur Netlify → Deploys → Trigger deploy → Clear cache and deploy

---

### Problème 3 : Fichier `_redirects` non copié dans `dist/`

**Vérification** :
```bash
npm run build
ls dist/_redirects  # Devrait exister
```

**Si absent** :
- Vérifiez que `/public/_redirects` est bien un **fichier**
- Supprimez le dossier `/public/_redirects/` s'il existe
- Relancez le build

---

## 📋 Checklist de Vérification

### Configuration
- [x] `netlify.toml` : `publish = "dist"`
- [x] `/public/_redirects` existe et est un **fichier**
- [x] Contenu de `_redirects` : `/*    /index.html   200`

### Build Local
- [ ] `npm run build` fonctionne
- [ ] `dist/_redirects` existe après build
- [ ] `npx serve -s dist` fonctionne
- [ ] Rafraîchissement fonctionne en local

### Production Netlify
- [ ] Code committé et pushé
- [ ] Build réussi sur Netlify
- [ ] Publish directory = "dist" dans les logs
- [ ] Toutes les URLs accessibles directement
- [ ] Rafraîchissement fonctionne

---

## 🎯 Résumé

**Problème** : 404 sur rafraîchissement ou accès direct

**Causes** :
1. ❌ `netlify.toml` pointait vers `"build"` au lieu de `"dist"`
2. ❌ `/public/_redirects` était un dossier au lieu d'un fichier
3. ❌ Headers de cache configurés pour `/static/*` au lieu de `/assets/*`

**Solutions** :
1. ✅ Corrigé `netlify.toml` : `publish = "dist"`
2. ✅ Créé `/public/_redirects` comme fichier
3. ✅ Mis à jour les headers pour `/assets/*` et `/images/*`

**Prochaine étape** :
```bash
# Testez localement
npm run build
npx serve -s dist

# Si ça marche, déployez !
git add .
git commit -m "Fix 404 errors on page refresh"
git push
```

---

**Votre site devrait maintenant fonctionner parfaitement ! 🎉**
