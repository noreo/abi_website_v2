# Guide de déploiement Netlify - abigailtherapeute.com

## ⚠️ IMPORTANT: Sécurité Avant Déploiement

**AVANT de pousser votre code sur Git public ou de déployer:**

1. **Lisez le fichier `SECURITY_GUIDE.md`**
2. **Régénérez vos clés API** (EmailJS et reCAPTCHA) si vous avez déjà commité le code avec des clés hardcodées
3. **Créez un fichier `.env` local** avec vos nouvelles clés (voir `.env.example`)
4. **Ne commitez JAMAIS le fichier `.env`** (déjà dans .gitignore)

## Étapes de déploiement

### Option 1: Déploiement via Git (Recommandé)

1. **Préparer votre code**
   - Assurez-vous que tout votre code est commité dans un dépôt Git (GitHub, GitLab, ou Bitbucket)

2. **Connecter à Netlify**
   - Allez sur [app.netlify.com](https://app.netlify.com)
   - Cliquez sur "Add new site" > "Import an existing project"
   - Choisissez votre fournisseur Git
   - Sélectionnez votre repository

3. **Configurer les paramètres de build**
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   - **Node version:** 18 ou supérieur
   
   Ces paramètres sont déjà configurés dans le fichier `netlify.toml`

4. **Configurer les variables d'environnement**
   - Dans Netlify, allez dans "Site settings" > "Environment variables"
   - Ajoutez les variables suivantes :
     ```
     VITE_EMAILJS_SERVICE_ID=votre_service_id
     VITE_EMAILJS_TEMPLATE_ID=votre_template_id
     VITE_EMAILJS_PUBLIC_KEY=votre_public_key
     VITE_RECAPTCHA_SITE_KEY=votre_recaptcha_site_key
     ```

5. **Déployer**
   - Cliquez sur "Deploy site"
   - Netlify va automatiquement build et déployer votre site
   - À chaque push sur votre branche principale, le site sera automatiquement redéployé

### Option 2: Déploiement manuel via Netlify CLI

1. **Installer Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Se connecter à Netlify**
   ```bash
   netlify login
   ```

3. **Build le projet localement**
   ```bash
   npm run build
   ```

4. **Déployer**
   ```bash
   # Pour un déploiement de test
   netlify deploy
   
   # Pour un déploiement en production
   netlify deploy --prod
   ```

### Option 3: Déploiement par Drag & Drop

1. **Build le projet localement**
   ```bash
   npm run build
   ```

2. **Aller sur Netlify**
   - Connectez-vous sur [app.netlify.com](https://app.netlify.com)
   - Faites glisser le dossier `build` dans la zone de dépôt

## Configuration du domaine personnalisé

1. **Dans Netlify**
   - Allez dans "Domain settings"
   - Cliquez sur "Add custom domain"
   - Entrez `abigailtherapeute.com`

2. **Configuration DNS**
   - Ajoutez les enregistrements DNS fournis par Netlify
   - OU changez les nameservers pour utiliser ceux de Netlify

3. **SSL/HTTPS**
   - Netlify active automatiquement SSL gratuit via Let's Encrypt
   - Attendez quelques minutes pour la propagation

## Vérifications post-déploiement

- ✅ Le site se charge correctement
- ✅ Toutes les pages sont accessibles (/, /approche, /services, etc.)
- ✅ Le formulaire de contact fonctionne
- ✅ Le reCAPTCHA fonctionne
- ✅ Les images se chargent correctement
- ✅ Le SEO est correct (vérifier les meta tags)
- ✅ La version mobile est responsive
- ✅ Le sitemap.xml est accessible
- ✅ Le robots.txt est accessible

## Optimisations Netlify

Le fichier `netlify.toml` inclut déjà :
- ✅ Configuration de build
- ✅ Redirections pour le routing SPA
- ✅ Headers de sécurité
- ✅ Cache optimization pour les assets statiques

## Support et dépannage

### Problème: Le site affiche une 404
**Solution:** Vérifiez que le fichier `netlify.toml` contient bien les redirections SPA

### Problème: Le formulaire de contact ne fonctionne pas
**Solution:** Vérifiez que les variables d'environnement EmailJS et reCAPTCHA sont bien configurées

### Problème: Les images ne se chargent pas
**Solution:** Assurez-vous que le dossier `public` est bien inclus dans le build

### Problème: react-snap échoue pendant le build
**Solution:** Vérifiez les logs de build Netlify. Si nécessaire, vous pouvez temporairement désactiver react-snap en modifiant le script `postbuild` dans package.json

## Surveillance et analytics

- **Netlify Analytics:** Activez dans les paramètres du site pour voir le trafic
- **Google Search Console:** Soumettez votre sitemap.xml
- **Google Analytics:** Ajoutez le code de tracking si nécessaire

## Builds automatiques

Netlify rebuildera automatiquement votre site à chaque fois que :
- Vous pushez du code sur la branche principale
- Vous créez une pull request (build de preview)
- Vous déclenchez un build manuellement

## Notes importantes

1. **Temps de build:** Avec react-snap, le build peut prendre 2-5 minutes
2. **Node version:** Assurez-vous d'utiliser Node 18+ pour éviter les problèmes de compatibilité
3. **Variables d'environnement:** Ne commitez jamais vos clés API dans le code
4. **Cache:** Netlify gère automatiquement le cache des builds pour accélérer les déploiements

## Ressources

- [Documentation Netlify](https://docs.netlify.com/)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/)
- [Custom domains](https://docs.netlify.com/domains-https/custom-domains/)
- [Environment variables](https://docs.netlify.com/environment-variables/overview/)