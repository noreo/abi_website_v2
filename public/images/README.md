# Dossier des Images

## ⚠️ ACTION REQUISE

Vous devez placer **17 images** dans ce dossier avant de lancer `npm run build`.

Consultez le fichier `/IMAGE_GUIDE.md` à la racine du projet pour la liste complète des images requises et leurs noms de fichiers exacts.

## Liste Rapide

Les 17 fichiers PNG requis :

1. `f3ed7490cd82a6da969e31a77e729630ee792ffb.png` - Photo profil principale
2. `917fcdb5584aaefff7c66ea9c015ab9c9a3fd8a8.png` - Photo MBR
3. `cd8d9a0123bad01a546e423a6e32d342810876da.png` - Card 1
4. `9cc07ee477be743a0e9303d89c5405cf078101ca.png` - Card 2
5. `c439956cc8a8c9c1c22337515568be384a7f0bf7.png` - Card 3
6. `009574079d5c9594bbd905966cdffb4245ff83ca.png` - Relations
7. `d651e6ee05d29cbc9bd200ce9c2ea93127c60196.png` - Neurodivergence
8. `19f3d0dcbfc42ee8fca3d53bb0667efa7497345a.png` - Deuil
9. `eafaf8f15fceebdb4a4becf6c58e07f0100f4b2a.png` - Thérapie en marchant
10. `599548c9cbebc9d6e0bb8ffbbffd8cbf59da8721.png` - Icône Vector
11. `948278c8b32f68b8b3116c0978a2893f4d91d1ab.png` - Vector relations
12. `6e512aa86f2c1a091d17728c0815f5b8e654a625.png` - DetailsSection 1
13. `783c78a352076b15e4264d15720715433bb9eb32.png` - DetailsSection Deuil
14. `ef9511533d9fc19f955be39091f5123be089c409.png` - DetailsSection principale
15. `d5d79462f10868781d51c97936189a3f739403bc.png` - Vector therapy
16. `190a22aed929c33152d4a65ca5e0c4ad3f591b66.png` - TherapieType 153-75
17. `ae67e2e8f9471e211ac899db67c1693efc98bed7.png` - TherapieType Vector

## Ce Qui Se Passe Pendant le Build

1. Le plugin Vite lit tous les imports `figma:asset/[filename].png`
2. Les transforme en chemins `/images/[filename].png`
3. Copie automatiquement tous les fichiers de `/public/images/` vers `/dist/images/`
4. Votre application en production aura accès à toutes les images

## Vérification

Avant de lancer `npm run build`, vérifiez :

```bash
ls -1 public/images/*.png | wc -l
```

Devrait afficher : **17**
