// src/stores/stateStore.js
import { writable } from 'svelte/store';

// init const
// animation flip
export const isFlipped = writable(false);

export const ongletState = writable("canvas");
// intro / dashboard
export const state = writable("intro");

export const greenMain = writable("#C0C999");
export const greenSub = writable("#2C6E49");
export const black = writable("#333333");
export const grey = writable("#B0BEA9");
export const white = writable("#FCFAF9");

// Skills descriptions
export const cssDesc = writable([
    "Maîtrise des bases",
    "Flexbox & Grid",
    "Responsive Design",
    "Animations & Transitions",
    "Préprocesseurs (Sass, Less)",
    "Accessibilité & Performance"
]);

export const jsDesc = writable([
    "Manipulation du DOM",
    "Programmation asynchrone",
    "ES6+",
    "POO et programmation fonctionnelle",
    "Frameworks (Svelte, React)",
    "Bundlers (Vite, Rollup)"
]);

export const htmlDesc = writable([
    "Structure sémantique",
    "SEO-friendly",
    "Intégration multimédia",
    "Formulaires interactifs",
    "Interaction CSS et JavaScript",
    "Accessibilité (ARIA)"
]);

export const svelteDesc = writable([
    "Syntaxe simple et réactive",
    "Stores et réactivité",
    "Composants légers",
    "Routing",
    "Intégration",
    "Déploiement optimisé"
]);

export const sveltestrapDesc = writable([
    "Intégration",
    "Utilisation des composants",
    "Bonne pratique responsive design",
]);

export const bootstrapDesc = writable([
    "Grid system",
    "Intégration de composants",
    "Personnalisation avec SCSS",
    "Utilisation des classes utilitaires pour un code propre",
    "Compatibilité multi-navigateurs et responsive"
]);

export const bulmaDesc = writable([
    "Framework CSS moderne et léger basé sur Flexbox",
    "Syntaxe simple et intuitive pour un design épuré",
    "Classes utilitaires puissantes pour une mise en page rapide",
    "Thème et personnalisation avec variables SCSS",
    "Intégration facile avec Svelte, Vue ou React"
]);

export const cDesc = writable([
    "Algorithmie complexe",
    "ISO/POSIX",
    "Manipulation des pointeurs et des structures",
    "Programmation système",
    "Compilation via Makefile"
]);

export const shellDesc = writable([
    "Automatisation",
    "Gestion des fichiers",
    "Création de scripts robustes",
    "Interaction avec les processus",
    "Maîtrise avancée de l'environnement Linux"
]);

export const pythonDesc = writable([
    "Développement web",
    "Frameworks web : Expérience avec Flask et Django",
    "Automatisation",
    "Analyse de données"
]);





// night mode
// Crée un store pour le mode nuit avec une valeur initiale de false (mode clair)
export const darkMode = writable(true);

// Fonction pour basculer entre le mode clair et le mode nuit
export const toggleDarkMode = () => {
    darkMode.update((current) => !current);
};