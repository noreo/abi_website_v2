import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import type { Plugin } from 'vite'

// Plugin to resolve figma:asset imports
function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        // Extract the filename from figma:asset/filename.png
        const filename = id.replace('figma:asset/', '')
        // Return a virtual module ID
        return '\0figma-asset:' + filename
      }
    },
    load(id: string) {
      if (id.startsWith('\0figma-asset:')) {
        // Extract filename from virtual module ID
        const filename = id.replace('\0figma-asset:', '')
        const srcAssetPath = path.resolve(__dirname, 'src/assets', filename)

        // Prefer source assets so localhost works even when public/images is empty.
        if (fs.existsSync(srcAssetPath)) {
          return `import assetUrl from "/src/assets/${filename}"; export default assetUrl;`
        }

        // Fallback to public image path when only /public/images is populated.
        return `export default "/images/${filename}"`
      }
    },
    // Copy images to dist during build
    closeBundle() {
      const sourceDir = path.resolve(__dirname, 'public/images')
      const destDir = path.resolve(__dirname, 'dist/images')
      
      // Only copy if source directory exists
      if (fs.existsSync(sourceDir)) {
        // Create destination directory if it doesn't exist
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true })
        }
        
        // Copy all files from source to destination
        const files = fs.readdirSync(sourceDir)
        files.forEach(file => {
          const sourcePath = path.join(sourceDir, file)
          const destPath = path.join(destDir, file)
          fs.copyFileSync(sourcePath, destPath)
        })
      }
    }
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // Core Web Vitals optimizations for production builds
  build: {
    // Optimize bundle size
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'], // Remove specific console methods
      },
    },
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
          ],
        },
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 600,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },

  // Performance optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router',
      'react-helmet-async',
    ],
  },
})