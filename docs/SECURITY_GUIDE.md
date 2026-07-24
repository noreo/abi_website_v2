# 🔒 Guide de Sécurité - abigailtherapeute.com

## ⚠️ IMPORTANT: Actions Immédiates Requises

### Si vous utilisez un dépôt Git PUBLIC:

#### 1. **REGÉNÉREZ VOS CLÉS API POUR LA PRODUCTION**

**Note:** Le code utilise maintenant des clés de développement en fallback pour permettre la prévisualisation, mais vous DEVEZ configurer de nouvelles clés pour la production.

Les clés de développement (fallback) actuelles:

**EmailJS:**
- Service ID: `service_tgza6fv`
- Template ID: `template_zvcw0zx`
- Public Key: `hiGIoKgp_u5kdg6f-`

**reCAPTCHA:**
- Site Key: `6LdCQIIsAAAAAEoHBG4kGuvgXs-HC7au9r53OsBT`

**Ces clés sont utilisées uniquement pour le développement/prévisualisation. Pour la production, vous devez en créer de nouvelles.**

#### 2. **Comment régénérer les clés:**

**EmailJS:**
1. Connectez-vous sur https://dashboard.emailjs.com/
2. Allez dans "Email Services" et créez un nouveau service OU changez les credentials du service existant
3. Allez dans "Email Templates" et notez votre nouveau Template ID
4. Allez dans "Account" > "API Keys" et générez une nouvelle clé publique

**Google reCAPTCHA:**
1. Allez sur https://www.google.com/recaptcha/admin
2. Supprimez l'ancienne clé (si possible) ou créez-en une nouvelle
3. Enregistrez votre domaine (abigailtherapeute.com + localhost pour le développement)

#### 3. **Nettoyer l'historique Git (OPTIONNEL mais recommandé)**

Si votre dépôt est déjà public, les anciennes clés sont dans l'historique Git. Pour les supprimer complètement:

```bash
# ⚠️ ATTENTION: Cela réécrit l'historique Git!
# Ne faites ceci que si vous êtes seul sur le projet

# Option 1: Utiliser BFG Repo-Cleaner (recommandé)
# Téléchargez depuis: https://rtyley.github.io/bfg-repo-cleaner/
java -jar bfg.jar --replace-text passwords.txt your-repo.git

# Option 2: Créer un nouveau dépôt propre (plus simple)
# Sauvegardez votre code actuel
# Supprimez le dossier .git
# Initialisez un nouveau dépôt Git
```

**OU plus simple:** Créez un nouveau dépôt Git à partir de votre code actuel (recommandé).

## ✅ Configuration Sécurisée (Déjà Implémentée)

### Fichiers de configuration créés:

1. **`.gitignore`** - Empêche les fichiers sensibles d'être commités
2. **`.env.example`** - Template pour les variables d'environnement
3. **`emailConfig.ts`** - Utilise maintenant des variables d'environnement
4. **`ContactSection.tsx`** - Utilise maintenant des variables d'environnement

## 📝 Utilisation des Variables d'Environnement

### En Développement Local:

1. **Créez un fichier `.env` à la racine du projet:**
   ```bash
   cp .env.example .env
   ```

2. **Remplissez avec vos NOUVELLES clés:**
   ```env
   VITE_EMAILJS_SERVICE_ID=votre_nouveau_service_id
   VITE_EMAILJS_TEMPLATE_ID=votre_nouveau_template_id
   VITE_EMAILJS_PUBLIC_KEY=votre_nouvelle_public_key
   VITE_RECAPTCHA_SITE_KEY=votre_nouvelle_recaptcha_key
   ```

3. **Relancez votre serveur de développement:**
   ```bash
   npm run dev
   ```

### En Production (Netlify):

1. **Connectez-vous sur Netlify**
2. **Allez dans:** Site settings > Environment variables
3. **Ajoutez chaque variable:**
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_RECAPTCHA_SITE_KEY`

4. **Redéployez le site**

## 🛡️ Bonnes Pratiques de Sécurité

### ✅ À FAIRE:

- ✅ Utiliser des variables d'environnement pour TOUTES les clés API
- ✅ Ajouter `.env` dans `.gitignore`
- ✅ Ne jamais commiter de fichiers `.env`
- ✅ Utiliser `.env.example` comme template (sans vraies valeurs)
- ✅ Régénérer les clés si elles sont exposées
- ✅ Limiter les domaines autorisés dans reCAPTCHA
- ✅ Utiliser HTTPS en production (automatique avec Netlify)
- ✅ Activer la vérification d'email dans EmailJS

### ❌ À NE JAMAIS FAIRE:

- ❌ Commiter des clés API dans le code
- ❌ Partager vos fichiers `.env`
- ❌ Utiliser les mêmes clés pour dev et production
- ❌ Exposer des clés secrètes côté client
- ❌ Commiter des tokens d'authentification

## 🔍 Vérifications de Sécurité

### Avant de pousser du code:

```bash
# Vérifiez qu'il n'y a pas de secrets dans votre code
git diff

# Vérifiez que .env n'est pas tracké
git status

# Si .env apparaît, ne le commitez PAS!
```

### Après déploiement:

- [ ] Les variables d'environnement sont configurées dans Netlify
- [ ] Le formulaire de contact fonctionne
- [ ] reCAPTCHA fonctionne
- [ ] Aucune clé API n'est visible dans le code source du navigateur
- [ ] HTTPS est activé
- [ ] Les domaines sont configurés dans reCAPTCHA admin

## 📚 Ressources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [reCAPTCHA Documentation](https://developers.google.com/recaptcha)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Netlify Environment Variables](https://docs.netlify.com/environment-variables/overview/)

## ❓ Questions Fréquentes

**Q: Les clés reCAPTCHA et EmailJS public key ne sont-elles pas censées être publiques?**
R: Oui, elles sont côté client, mais il est toujours recommandé de:
- Limiter les domaines autorisés dans reCAPTCHA
- Configurer les restrictions d'utilisation dans EmailJS
- Utiliser des variables d'environnement pour faciliter la rotation des clés

**Q: Dois-je vraiment nettoyer l'historique Git?**
R: Si votre dépôt n'est pas encore public, non. Si vous n'avez pas encore poussé sur GitHub, juste régénérez vos clés et continuez. Si c'est déjà public, c'est recommandé mais pas critique pour ces clés spécifiques (car elles sont côté client de toute façon).

**Q: Comment savoir si mes clés ont été utilisées frauduleusement?**
R: 
- EmailJS: Vérifiez votre dashboard pour des pics d'utilisation inhabituels
- reCAPTCHA: Vérifiez Google reCAPTCHA Admin pour l'usage

## 🚨 En Cas de Problème

Si vous pensez que vos clés ont été compromises:

1. **Régénérez immédiatement toutes les clés**
2. **Vérifiez vos logs EmailJS pour des abus**
3. **Changez les configurations de sécurité**
4. **Surveillez l'utilisation pendant quelques jours**

---

**Date de dernière mise à jour:** 9 Mars 2026
**Statut:** Variables d'environnement implémentées ✅
**Action requise:** Régénérer les clés API exposées ⚠️