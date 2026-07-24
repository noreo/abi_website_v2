#!/bin/bash

# Script de vérification des images pour le build

echo "🔍 Vérification des images pour npm run build"
echo "================================================"
echo ""

# Vérifie si le dossier existe
if [ ! -d "public/images" ]; then
    echo "❌ Le dossier /public/images/ n'existe pas!"
    echo "   Créez-le avec: mkdir -p public/images"
    exit 1
fi

# Compte les fichiers PNG
png_count=$(find public/images -name "*.png" -type f | wc -l)

echo "📊 Nombre de fichiers PNG trouvés: $png_count / 17"
echo ""

if [ "$png_count" -eq 17 ]; then
    echo "✅ Parfait! Toutes les images sont présentes."
    echo "   Vous pouvez lancer: npm run build"
    echo ""
    echo "📝 Liste des fichiers:"
    ls -1 public/images/*.png 2>/dev/null | sed 's/public\/images\//   - /'
    exit 0
elif [ "$png_count" -eq 0 ]; then
    echo "❌ Aucune image trouvée!"
    echo ""
    echo "📖 Consultez /IMAGE_GUIDE.md pour la liste complète"
    echo "📖 ou /public/images/README.md pour la liste rapide"
    exit 1
else
    echo "⚠️  Images manquantes: $(( 17 - png_count ))"
    echo ""
    echo "📝 Fichiers présents:"
    ls -1 public/images/*.png 2>/dev/null | sed 's/public\/images\//   - /'
    echo ""
    echo "📖 Consultez /IMAGE_GUIDE.md pour la liste complète"
    exit 1
fi
