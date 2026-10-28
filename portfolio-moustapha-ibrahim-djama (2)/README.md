# Portfolio — Moustapha Ibrahim Djama

Portfolio en français consacré à l’ingénierie des systèmes électriques : quatre projets, fiches détaillées, filtres, illustrations et contact. Interface adaptée aux ordinateurs et aux mobiles.

## Démarrer en local

Prérequis : Node.js 22.12 ou supérieur et npm.

```sh
npm ci
npm run dev
```

Ouvrir l’adresse affichée dans le terminal. Aucune clé API ni variable d’environnement n’est nécessaire.

## Vérifier et compiler

```sh
npm run lint
npm run build
npm run preview
```

La compilation génère le dossier `dist/`, prêt pour un hébergement statique.

## Mettre le projet sur GitHub

1. Décompresser le ZIP.
2. Mettre son contenu à la racine du dépôt GitHub : `package.json`, `src/`, `public/`, etc.
3. Ne pas mettre uniquement le fichier ZIP dans le dépôt.
4. Ne pas ajouter `node_modules/`, `dist/`, de fichiers `.env` privés ou d’anciennes archives.

## Déployer sur Vercel

Importer le dépôt GitHub dans Vercel, sélectionner Vite, utiliser `npm run build` comme commande de compilation et `dist` comme dossier de sortie. La configuration `vercel.json` est incluse.

## Personnaliser

- `src/App.tsx` : mise en page et interactions.
- `src/index.css` : identité visuelle et adaptation mobile.
- `src/data/portfolioData.ts` : informations et contenu des projets.
- `public/design/` : illustrations SVG du design fourni.
- `index.html` : titre et métadonnées.

Les anciens composants conservés dans `src/components/` ne sont pas utilisés par la nouvelle page. Le portfolio ne présente aucun lien vers un CV ni vers une archive téléchargeable.
