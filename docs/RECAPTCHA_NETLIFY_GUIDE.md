# 🛡️ Guide Configuration Google reCAPTCHA sur Netlify

## 📋 Vue d'ensemble

Votre site utilise **Google reCAPTCHA v2** pour protéger le formulaire de contact contre les spams et les bots.

### ✅ Ce qui est déjà configuré dans le code

- ✅ Package `react-google-recaptcha` installé
- ✅ Composant reCAPTCHA intégré dans `/src/app/components/ContactSection.tsx`
- ✅ Validation côté client active
- ✅ Clé de développement fallback (pour tests uniquement)

### ⚠️ Ce que VOUS devez faire

1. Obtenir une clé reCAPTCHA de Google
2. Configurer les variables d'environnement sur Netlify
3. Déployer votre site

---

## 🚀 Étape 1 : Obtenir les Clés reCAPTCHA

### 1.1 Aller sur Google reCAPTCHA Admin Console

Visitez : **https://www.google.com/recaptcha/admin/create**

### 1.2 Créer un nouveau site

Remplissez le formulaire :

| Champ | Valeur |
|-------|--------|
| **Label** | Abigail Thérapeute - Site Web |
| **reCAPTCHA type** | ☑️ reCAPTCHA v2 → "I'm not a robot" Checkbox |
| **Domains** | Ajoutez vos domaines (voir ci-dessous) |
| **Owners** | Votre email Google |
| **Accept reCAPTCHA Terms** | ☑️ Cochez la case |

### 1.3 Ajouter vos domaines

Ajoutez **tous** ces domaines :

```
abigailtherapeute.com
www.abigailtherapeute.com
localhost
```

**Pourquoi localhost ?** Pour tester localement avant de déployer.

**Note** : Si vous utilisez un domaine Netlify temporaire, ajoutez-le aussi :
```
votre-site.netlify.app
```

### 1.4 Récupérer vos clés

Après soumission, Google vous donnera **2 clés** :

1. **Site Key** (clé publique) - Visible côté client
2. **Secret Key** (clé secrète) - **NE JAMAIS** partager publiquement

**📋 Copiez ces deux clés** - vous en aurez besoin pour l'étape 2.

---

## 🔧 Étape 2 : Configurer les Variables d'Environnement sur Netlify

### 2.1 Se connecter à Netlify

1. Allez sur **https://app.netlify.com/**
2. Connectez-vous à votre compte
3. Sélectionnez votre site

### 2.2 Accéder aux Variables d'Environnement

1. Cliquez sur **Site settings** (Paramètres du site)
2. Dans le menu de gauche, cliquez sur **Environment variables** (Variables d'environnement)
3. Cliquez sur **Add a variable** (Ajouter une variable)

### 2.3 Ajouter la Variable reCAPTCHA

Créez une nouvelle variable :

| Nom de la variable | Valeur |
|-------------------|--------|
| `VITE_RECAPTCHA_SITE_KEY` | Votre **Site Key** de Google |

**Étapes détaillées** :

1. **Key** : `VITE_RECAPTCHA_SITE_KEY`
2. **Value** : Collez votre Site Key (ex: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`)
3. **Scope** : Sélectionnez `All scopes` (ou seulement `Production` si vous préférez)
4. Cliquez sur **Create variable**

### 2.4 Vérification

Votre variable devrait apparaître ainsi :

```
VITE_RECAPTCHA_SITE_KEY = 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
```

⚠️ **Important** : Le nom DOIT commencer par `VITE_` pour être accessible dans votre application React avec Vite.

---

## 🚀 Étape 3 : Déployer sur Netlify

### 3.1 Déclencher un nouveau déploiement

Après avoir ajouté la variable d'environnement, vous devez **redéployer** votre site :

**Option A - Redéployer automatiquement** (recommandé)
1. Allez dans **Deploys**
2. Cliquez sur **Trigger deploy** → **Deploy site**

**Option B - Push Git**
```bash
git commit --allow-empty -m "Redeploy for environment variables"
git push
```

### 3.2 Vérifier le déploiement

1. Attendez que le déploiement soit terminé
2. Visitez votre site : `https://abigailtherapeute.com/contact`
3. Vérifiez que le widget reCAPTCHA s'affiche correctement

---

## 🧪 Étape 4 : Tester le reCAPTCHA

### 4.1 Test en local (avant déploiement)

Créez un fichier `.env` à la racine de votre projet :

```bash
# .env
VITE_RECAPTCHA_SITE_KEY=votre_site_key_ici
```

⚠️ **IMPORTANT** : Ajoutez `.env` à votre `.gitignore` pour ne pas commiter vos clés !

Vérifiez que `.gitignore` contient :
```
.env
.env.local
```

Puis lancez en local :
```bash
npm run dev
```

### 4.2 Test en production

1. Allez sur votre site déployé
2. Naviguez vers la page Contact : `/contact`
3. Remplissez le formulaire
4. **Cochez la case reCAPTCHA** "Je ne suis pas un robot"
5. Soumettez le formulaire

### 4.3 Vérifications

✅ Le widget reCAPTCHA s'affiche correctement  
✅ La case à cocher "Je ne suis pas un robot" fonctionne  
✅ Le formulaire se soumet uniquement si reCAPTCHA est validé  
✅ Un message d'erreur s'affiche si reCAPTCHA n'est pas coché  

---

## 🔍 Code Actuel dans ContactSection.tsx

Voici comment le reCAPTCHA est configuré dans votre code :

```typescript
// Ligne 5 - Import
import ReCAPTCHA from "react-google-recaptcha";

// Lignes 8-12 - Configuration de la clé
const DEV_RECAPTCHA_KEY = "6LdCQIIsAAAAAEoHBG4kGuvgXs-HC7au9r53OsBT";
const RECAPTCHA_SITE_KEY = 
  import.meta.env.VITE_RECAPTCHA_SITE_KEY || DEV_RECAPTCHA_KEY;

// Ligne 84 - Référence
const recaptchaRef = useRef<ReCAPTCHA>(null);

// Lignes 123-131 - Validation
const recaptchaValue = recaptchaRef.current?.getValue();
if (!recaptchaValue) {
  setErrors({
    name: "",
    email: "",
    phone: "",
    message: "",
    recaptcha: "Veuillez confirmer que vous n'êtes pas un robot",
  });
  setIsSubmitting(false);
  return;
}

// Lignes 244-247 - Widget
<ReCAPTCHA
  ref={recaptchaRef}
  sitekey={RECAPTCHA_SITE_KEY}
  theme="light"
/>
```

---

## 🛡️ Sécurité et Bonnes Pratiques

### ✅ Ce qui est bien configuré

1. **Clé de développement séparée** : Utilisée uniquement en développement
2. **Variables d'environnement** : La vraie clé est dans Netlify, pas dans le code
3. **Validation côté client** : Le formulaire ne se soumet pas sans reCAPTCHA

### ⚠️ Limitations actuelles

**Validation côté serveur** : Actuellement, votre formulaire utilise EmailJS qui gère l'envoi directement côté client. Pour une sécurité maximale, vous pourriez :

1. Créer une fonction Netlify serverless
2. Valider le token reCAPTCHA côté serveur avec la Secret Key
3. Envoyer l'email depuis le serveur

**Pour l'instant, la validation côté client suffit pour 99% des cas d'usage.**

---

## 🔧 Configuration Avancée (Optionnel)

### Fonction Netlify pour Validation Serveur

Si vous voulez une sécurité maximale, créez une fonction Netlify :

**1. Créer `/netlify/functions/submit-contact.js`** :

```javascript
const axios = require('axios');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { recaptchaToken, name, email, message } = JSON.parse(event.body);

  // Vérifier reCAPTCHA avec Google
  try {
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        },
      }
    );

    if (!response.data.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'reCAPTCHA validation failed' }),
      };
    }

    // reCAPTCHA validé, envoyer l'email ici
    // ... logique d'envoi d'email ...

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' }),
    };
  }
};
```

**2. Ajouter la Secret Key sur Netlify** :

Variable : `RECAPTCHA_SECRET_KEY` = Votre Secret Key de Google

**3. Installer les dépendances** :

```bash
npm install axios
```

**Note** : Cette configuration avancée est **optionnelle** et nécessite de modifier le code du formulaire pour appeler la fonction Netlify au lieu d'EmailJS.

---

## 📊 Monitoring et Analytics

### Voir les statistiques reCAPTCHA

1. Allez sur **https://www.google.com/recaptcha/admin**
2. Cliquez sur votre site
3. Consultez les statistiques :
   - Nombre de requêtes
   - Taux de spam bloqué
   - Score de confiance

---

## 🆘 Dépannage

### Le widget reCAPTCHA ne s'affiche pas

**Causes possibles** :

1. **Variable d'environnement manquante**
   - Vérifiez que `VITE_RECAPTCHA_SITE_KEY` est bien configurée sur Netlify
   - Redéployez après avoir ajouté la variable

2. **Domaine non autorisé**
   - Vérifiez que votre domaine est bien ajouté dans Google reCAPTCHA Admin
   - Ajoutez `*.netlify.app` si vous utilisez un sous-domaine Netlify

3. **Clé invalide**
   - Vérifiez que vous utilisez la **Site Key** (pas la Secret Key)
   - Vérifiez qu'il n'y a pas d'espaces avant/après la clé

### Message d'erreur "Invalid site key"

- La clé est incorrecte ou le domaine n'est pas autorisé
- Vérifiez dans Google reCAPTCHA Admin Console
- Régénérez une nouvelle paire de clés si nécessaire

### Le formulaire se soumet sans reCAPTCHA

- Vérifiez le code dans `ContactSection.tsx`
- La validation doit être présente (lignes 123-131)
- Ne jamais bypasser la validation reCAPTCHA

### Erreur CORS

- reCAPTCHA doit être chargé depuis le même domaine
- Vérifiez que votre domaine est bien configuré

---

## ✅ Checklist Complète

### Configuration Google reCAPTCHA
- [ ] Créé un site reCAPTCHA sur Google Admin Console
- [ ] Type : reCAPTCHA v2 "I'm not a robot"
- [ ] Ajouté tous les domaines (production + localhost)
- [ ] Copié la Site Key et la Secret Key

### Configuration Netlify
- [ ] Connecté à Netlify
- [ ] Ajouté la variable `VITE_RECAPTCHA_SITE_KEY`
- [ ] Valeur = Site Key de Google
- [ ] Redéployé le site

### Tests
- [ ] Widget reCAPTCHA s'affiche sur la page Contact
- [ ] Case "Je ne suis pas un robot" fonctionne
- [ ] Message d'erreur si reCAPTCHA non coché
- [ ] Formulaire se soumet correctement après validation
- [ ] Email reçu avec succès

### Sécurité
- [ ] Secret Key jamais committée dans Git
- [ ] Fichier `.env` dans `.gitignore`
- [ ] Variables d'environnement seulement sur Netlify

---

## 📚 Ressources Utiles

- **Google reCAPTCHA Admin** : https://www.google.com/recaptcha/admin
- **Documentation reCAPTCHA** : https://developers.google.com/recaptcha/docs/display
- **Netlify Environment Variables** : https://docs.netlify.com/configure-builds/environment-variables/
- **react-google-recaptcha** : https://www.npmjs.com/package/react-google-recaptcha

---

## 🎯 Résumé en 3 Étapes

1. **Google** : Créez un site reCAPTCHA, obtenez la Site Key
2. **Netlify** : Ajoutez `VITE_RECAPTCHA_SITE_KEY` avec votre Site Key
3. **Déployer** : Redéployez et testez !

---

**Votre site est déjà configuré côté code. Il vous suffit d'ajouter la clé sur Netlify !** 🚀
