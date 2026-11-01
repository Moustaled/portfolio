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

## Animations 3D et identité visuelle

- `public/brand/moustapha-djama.png` : logo fourni, cadré dans l’en-tête sans modifier le fichier original.
- `public/animations/systeme.html` : scène de l’accueil.
- `public/animations/reseau.html` : réseau industriel et étude détaillée.
- `public/animations/stockage.html` : stockage hybride.
- `public/animations/cables.html` : dimensionnement des câbles BT.
- `src/components/InteractiveScene.tsx` : intégration, commandes et pause hors écran.

Le bouton « Manipuler » active la rotation dans le portfolio ; « Terminer » restitue le défilement. « Explorer » ouvre l’expérience complète et ses paramètres dans un nouvel onglet. Les scènes respectent la préférence de réduction des animations. L’illustration du projet d’audit est conservée, sans animation correspondante fournie.

Three.js 0.170.0 et OrbitControls sont inclus dans `public/vendor/three/`, avec leur licence MIT : le moteur ne dépend pas d’un CDN à l’exécution. Servir les fichiers via Vite ou un hébergement HTTP, plutôt que par double-clic local. Les simulations sont pédagogiques ; leurs valeurs ne constituent pas des mesures réalisées sur une installation.

### Fiches projet et explications

Le bouton « Explorer » ouvre désormais la fiche du projet dans le portfolio : contexte, question à résoudre, simulation complète avec les explications des équipements, démarche, résultats et enseignements. Les commandes d’export des simulateurs s’utilisent depuis le lien « Agrandir le simulateur ».
