import Example from '../../components/Example/Example';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={styles.home}>
      <h2 className={styles.title}>Home</h2>
      <p>Welcome to the Stock AI Analyzer</p>

      <Example />
    </main>
  );
};

export default Home;

// # Vite + React + TypeScript – Starter Template

// ## 🚀 What is this?

// This is a modern and minimal starter template for building React apps using Vite, TypeScript, and SCSS. It's designed for real-world production readiness, but light enough to be cloned and extended for personal projects.

// Built with:

// - ⚡ Vite (with SWC for fast builds)
// - ⚛️ React 19
// - 🧠 TypeScript
// - 🎨 SCSS + CSS Modules
// - 🎯 React Router
// - 🛠️ ESLint + Prettier + EditorConfig

// ---

// ## 📦 Features

// 1. ✅ **React Router v6** with `NavLink` and layout-ready routing
// 2. ✅ **TypeScript** setup with type safety and strict mode
// 3. ✅ **SASS (SCSS)** with modular file support
// 4. ✅ **CSS Modules** for scoped and safe styles
// 5. ✅ **Global CSS Reset**
// 6. ✅ **Dark/Light theme support** using CSS custom properties
// 7. ✅ **Example Component** with SCSS modules and hooks
// 8. ✅ **VS Code integration** (`.vscode/settings.json`, `.editorconfig`)
// 9. ✅ **ESLint + Prettier** pre-configured for modern standards
// 10. ✅ **GitHub Actions PR Validation** – Automatically lints and builds on pull requests targeting `main`

// 🔧 Nothing super opinionated. Just fast, clean, and extensible.
