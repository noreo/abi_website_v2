#!/usr/bin/env node

/**
 * Générateur de script de renommage pour les images
 * 
 * Usage:
 * 1. Placez vos images originales dans un dossier (ex: ./mes-images/)
 * 2. Lancez: node generate-rename-script.js
 * 3. Un fichier rename-images.sh sera créé
 * 4. Modifiez le mapping dans ce script si nécessaire
 * 5. Exécutez: bash rename-images.sh
 */

const fs = require('fs');
const path = require('path');

// Mapping suggéré : À PERSONNALISER selon vos noms de fichiers
const SUGGESTED_MAPPING = {
  // Images principales
  'photo-profil.png': 'f3ed7490cd82a6da969e31a77e729630ee792ffb.png',
  'photo-mbr.png': '917fcdb5584aaefff7c66ea9c015ab9c9a3fd8a8.png',
  'therapie-1.png': 'cd8d9a0123bad01a546e423a6e32d342810876da.png',
  'therapie-2.png': '9cc07ee477be743a0e9303d89c5405cf078101ca.png',
  'therapie-3.png': 'c439956cc8a8c9c1c22337515568be384a7f0bf7.png',
  
  // Images par type de thérapie
  'relations.png': '009574079d5c9594bbd905966cdffb4245ff83ca.png',
  'neurodivergence.png': 'd651e6ee05d29cbc9bd200ce9c2ea93127c60196.png',
  'deuil.png': '19f3d0dcbfc42ee8fca3d53bb0667efa7497345a.png',
  'therapie-marchant.png': 'eafaf8f15fceebdb4a4becf6c58e07f0100f4b2a.png',
  
  // Icônes et vectors
  'icone-vector.png': '599548c9cbebc9d6e0bb8ffbbffd8cbf59da8721.png',
  'vector-relations.png': '948278c8b32f68b8b3116c0978a2893f4d91d1ab.png',
  'details-section-1.png': '6e512aa86f2c1a091d17728c0815f5b8e654a625.png',
  'details-deuil.png': '783c78a352076b15e4264d15720715433bb9eb32.png',
  'details-principale.png': 'ef9511533d9fc19f955be39091f5123be089c409.png',
  'vector-therapie.png': 'd5d79462f10868781d51c97936189a3f739403bc.png',
  'therapie-type-153.png': '190a22aed929c33152d4a65ca5e0c4ad3f591b66.png',
  'therapie-type-vector.png': 'ae67e2e8f9471e211ac899db67c1693efc98bed7.png',
};

console.log('🗂️  Générateur de Script de Renommage d\'Images\n');
console.log('================================================\n');

// Générer le script bash
let bashScript = `#!/bin/bash

# Script de renommage automatique des images
# Généré le ${new Date().toLocaleDateString('fr-FR')}

echo "🔄 Renommage des images en cours..."
echo ""

# IMPORTANT: Modifiez le chemin source selon l'emplacement de vos images
SOURCE_DIR="./mes-images"
DEST_DIR="./public/images"

# Créer le dossier de destination s'il n'existe pas
mkdir -p "$DEST_DIR"

# Compteur
count=0
total=${Object.keys(SUGGESTED_MAPPING).length}

`;

Object.entries(SUGGESTED_MAPPING).forEach(([original, newName]) => {
  bashScript += `
# ${original} → ${newName}
if [ -f "$SOURCE_DIR/${original}" ]; then
  cp "$SOURCE_DIR/${original}" "$DEST_DIR/${newName}"
  echo "✓ ${original} copié"
  ((count++))
else
  echo "⚠ ${original} introuvable"
fi
`;
});

bashScript += `
echo ""
echo "📊 Résumé: $count / $total images copiées"
echo ""

if [ "$count" -eq "$total" ]; then
  echo "✅ Toutes les images ont été copiées avec succès!"
  echo "   Vérifiez avec: node check-images.js"
else
  echo "⚠️  Certaines images sont manquantes."
  echo "   Consultez /IMAGE_MAPPING_HELPER.md pour plus d'informations"
fi
`;

// Écrire le script bash
const scriptPath = path.join(__dirname, 'rename-images.sh');
fs.writeFileSync(scriptPath, bashScript, { mode: 0o755 });

console.log(`✅ Script généré: ${scriptPath}\n`);
console.log('📝 Prochaines étapes:\n');
console.log('1. Modifiez le mapping dans generate-rename-script.js si nécessaire');
console.log('2. Modifiez SOURCE_DIR dans rename-images.sh pour pointer vers vos images');
console.log('3. Exécutez: bash rename-images.sh');
console.log('4. Vérifiez: node check-images.js\n');

// Générer aussi un script Node.js
let nodeScript = `#!/usr/bin/env node

/**
 * Script de renommage Node.js
 * Généré le ${new Date().toLocaleDateString('fr-FR')}
 */

const fs = require('fs');
const path = require('path');

const SOURCE_DIR = './mes-images'; // MODIFIEZ selon votre dossier
const DEST_DIR = './public/images';

const mapping = ${JSON.stringify(SUGGESTED_MAPPING, null, 2)};

console.log('🔄 Renommage des images en cours...\\n');

// Créer le dossier de destination
if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

let count = 0;
const total = Object.keys(mapping).length;

Object.entries(mapping).forEach(([original, newName]) => {
  const srcPath = path.join(SOURCE_DIR, original);
  const destPath = path.join(DEST_DIR, newName);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(\`✓ \${original} copié\`);
    count++;
  } else {
    console.log(\`⚠ \${original} introuvable\`);
  }
});

console.log(\`\\n📊 Résumé: \${count} / \${total} images copiées\\n\`);

if (count === total) {
  console.log('✅ Toutes les images ont été copiées avec succès!');
  console.log('   Vérifiez avec: node check-images.js');
} else {
  console.log('⚠️  Certaines images sont manquantes.');
  console.log('   Consultez /IMAGE_MAPPING_HELPER.md pour plus d\\'informations');
}
`;

const nodeScriptPath = path.join(__dirname, 'rename-images.js');
fs.writeFileSync(nodeScriptPath, nodeScript, { mode: 0o755 });

console.log(`✅ Script Node.js généré: ${nodeScriptPath}\n`);
console.log('💡 Astuce: Modifiez SUGGESTED_MAPPING dans generate-rename-script.js');
console.log('   pour correspondre aux noms de VOS fichiers images.\n');

// Afficher un exemple de structure
console.log('📁 Structure recommandée:\n');
console.log('  votre-projet/');
console.log('  ├── mes-images/              ← Placez vos images originales ici');
console.log('  │   ├── photo-profil.png');
console.log('  │   ├── therapie-1.png');
console.log('  │   └── ...');
console.log('  ├── public/');
console.log('  │   └── images/              ← Les images seront copiées ici');
console.log('  ├── rename-images.sh         ← Script bash généré');
console.log('  ├── rename-images.js         ← Script node généré');
console.log('  └── check-images.js          ← Pour vérifier\n');
