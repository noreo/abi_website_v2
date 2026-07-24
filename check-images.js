#!/usr/bin/env node

/**
 * Script de vérification des images pour npm run build
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_IMAGES = [
  'f3ed7490cd82a6da969e31a77e729630ee792ffb.png',
  '917fcdb5584aaefff7c66ea9c015ab9c9a3fd8a8.png',
  'cd8d9a0123bad01a546e423a6e32d342810876da.png',
  '9cc07ee477be743a0e9303d89c5405cf078101ca.png',
  'c439956cc8a8c9c1c22337515568be384a7f0bf7.png',
  '009574079d5c9594bbd905966cdffb4245ff83ca.png',
  'd651e6ee05d29cbc9bd200ce9c2ea93127c60196.png',
  '19f3d0dcbfc42ee8fca3d53bb0667efa7497345a.png',
  'eafaf8f15fceebdb4a4becf6c58e07f0100f4b2a.png',
  '599548c9cbebc9d6e0bb8ffbbffd8cbf59da8721.png',
  '948278c8b32f68b8b3116c0978a2893f4d91d1ab.png',
  '6e512aa86f2c1a091d17728c0815f5b8e654a625.png',
  '783c78a352076b15e4264d15720715433bb9eb32.png',
  'ef9511533d9fc19f955be39091f5123be089c409.png',
  'd5d79462f10868781d51c97936189a3f739403bc.png',
  '190a22aed929c33152d4a65ca5e0c4ad3f591b66.png',
  'ae67e2e8f9471e211ac899db67c1693efc98bed7.png',
];

const imagesDir = path.join(__dirname, 'public', 'images');

console.log('🔍 Vérification des images pour npm run build');
console.log('================================================\n');

// Vérifie si le dossier existe
if (!fs.existsSync(imagesDir)) {
  console.error('❌ Le dossier /public/images/ n\'existe pas!');
  console.log('   Créez-le avec: mkdir -p public/images\n');
  process.exit(1);
}

// Liste les fichiers présents
let presentFiles = [];
let missingFiles = [];

try {
  const files = fs.readdirSync(imagesDir);
  presentFiles = files.filter(f => f.endsWith('.png'));
  
  // Identifie les fichiers manquants
  REQUIRED_IMAGES.forEach(requiredFile => {
    if (!presentFiles.includes(requiredFile)) {
      missingFiles.push(requiredFile);
    }
  });
} catch (error) {
  console.error('❌ Erreur lors de la lecture du dossier:', error.message);
  process.exit(1);
}

const presentCount = presentFiles.length;
const totalRequired = REQUIRED_IMAGES.length;

console.log(`📊 Nombre de fichiers PNG trouvés: ${presentCount} / ${totalRequired}\n`);

if (missingFiles.length === 0 && presentCount === totalRequired) {
  console.log('✅ Parfait! Toutes les images sont présentes.');
  console.log('   Vous pouvez lancer: npm run build\n');
  console.log('📝 Liste des fichiers:');
  presentFiles.forEach(file => console.log(`   - ${file}`));
  process.exit(0);
} else if (presentCount === 0) {
  console.log('❌ Aucune image trouvée!\n');
  console.log('📖 Consultez /IMAGE_GUIDE.md pour la liste complète');
  console.log('📖 ou /public/images/README.md pour la liste rapide\n');
  process.exit(1);
} else {
  console.log(`⚠️  Images manquantes: ${missingFiles.length}\n`);
  
  if (presentFiles.length > 0) {
    console.log('📝 Fichiers présents:');
    presentFiles.forEach(file => {
      const isRequired = REQUIRED_IMAGES.includes(file);
      const icon = isRequired ? '✓' : '?';
      console.log(`   ${icon} ${file}`);
    });
    console.log('');
  }
  
  if (missingFiles.length > 0) {
    console.log('❌ Fichiers manquants:');
    missingFiles.forEach(file => console.log(`   - ${file}`));
    console.log('');
  }
  
  console.log('📖 Consultez /IMAGE_GUIDE.md pour la liste complète\n');
  process.exit(1);
}
