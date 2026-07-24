# Guide des Images pour le Build

## Instructions

Pour que `npm run build` fonctionne correctement, vous devez placer **17 images** dans le dossier `/public/images/` avec les noms de fichiers exacts listés ci-dessous.

## Liste des Images Requises

Placez vos images dans le dossier `/public/images/` avec ces noms de fichiers exacts :

### Images Principales du Site

1. **f3ed7490cd82a6da969e31a77e729630ee792ffb.png**
   - Utilisée pour : Photo de profil principale (Hero, About page)
   - Variable : `imgPhoto`, `imgHero`, `imgImg`

2. **917fcdb5584aaefff7c66ea9c015ab9c9a3fd8a8.png**
   - Utilisée pour : Photo MBR (Méthode de Bien-Renaître)
   - Variable : `imgMbr2`, `imgMbr2Jpg`

3. **cd8d9a0123bad01a546e423a6e32d342810876da.png**
   - Utilisée pour : Card 1 (Photo thérapie 1)
   - Variable : `imgCard1`, `imgPhoto1`, `imgPexelsWildlittlethingsphoto708440`

4. **9cc07ee477be743a0e9303d89c5405cf078101ca.png**
   - Utilisée pour : Card 2 (Photo thérapie 2)
   - Variable : `imgCard2`, `imgPhoto2`, `imgPexelsWildlittlethingsphoto708441`

5. **c439956cc8a8c9c1c22337515568be384a7f0bf7.png**
   - Utilisée pour : Card 3 (Photo thérapie 3)
   - Variable : `imgCard3`, `imgPhoto3`, `imgPexelsWildlittlethingsphoto708442`

### Images par Catégorie de Thérapie

6. **009574079d5c9594bbd905966cdffb4245ff83ca.png**
   - Utilisée pour : Relations conflictuelles
   - Variable : `imgRelation`, `imgCardRelation`

7. **d651e6ee05d29cbc9bd200ce9c2ea93127c60196.png**
   - Utilisée pour : Neurodivergence
   - Variable : `imgNeurodivergent`

8. **19f3d0dcbfc42ee8fca3d53bb0667efa7497345a.png**
   - Utilisée pour : Deuil
   - Variable : `imgDeuil` (page Deuil)

9. **eafaf8f15fceebdb4a4becf6c58e07f0100f4b2a.png**
   - Utilisée pour : Thérapie en marchant
   - Variable : `imgWalking`

### Images de Détails et Icônes

10. **599548c9cbebc9d6e0bb8ffbbffd8cbf59da8721.png**
    - Utilisée pour : Icône/Vector dans HelpCard
    - Variable : `imgVector`

11. **948278c8b32f68b8b3116c0978a2893f4d91d1ab.png**
    - Utilisée pour : Vector/Icône relations
    - Variable : `imgVector1`, `imgVector2`, `imgCardRelation`

12. **6e512aa86f2c1a091d17728c0815f5b8e654a625.png**
    - Utilisée pour : DetailsSection image 1
    - Variable : `imgDetailsSection1`

13. **783c78a352076b15e4264d15720715433bb9eb32.png**
    - Utilisée pour : DetailsSection Deuil
    - Variable : `imgDeuil` (DetailsSection)

14. **ef9511533d9fc19f955be39091f5123be089c409.png**
    - Utilisée pour : DetailsSection principale
    - Variable : `imgDetailsSection`, `imgPexelsJaimeReimer137693084740054`

15. **d5d79462f10868781d51c97936189a3f739403bc.png**
    - Utilisée pour : Vector dans IndividualTherapyAbigail1
    - Variable : `imgVector1`

16. **190a22aed929c33152d4a65ca5e0c4ad3f591b66.png**
    - Utilisée pour : TherapieType-153-75
    - Variable : `imgTherapieType`

17. **ae67e2e8f9471e211ac899db67c1693efc98bed7.png**
    - Utilisée pour : TherapieType
    - Variable : `imgVector`

## Comment Procéder

1. Créez le dossier `/public/images/` s'il n'existe pas déjà
2. Placez vos 17 images dans ce dossier avec les noms de fichiers exacts listés ci-dessus
3. Lancez `npm run build`
4. Les images seront automatiquement copiées dans `/dist/images/` pendant le build

## Vérification

Après avoir placé vos images, vous pouvez vérifier que tout est en place :

```bash
# Compter les fichiers dans public/images
ls -1 public/images/*.png | wc -l
# Devrait afficher : 17
```

## Comment Fonctionne le Plugin

Le plugin Vite personnalisé dans `/vite.config.ts` :
- Transforme tous les imports `figma:asset/[filename].png` en `/images/[filename].png`
- Copie automatiquement toutes les images de `/public/images/` vers `/dist/images/` lors du build
- Assure que vos images sont disponibles en production

## Note Importante

Les noms de fichiers sont des hashes générés par Figma. Vous devez :
- Soit renommer vos images avec ces noms exacts
- Soit utiliser un script pour mapper vos images aux noms requis
