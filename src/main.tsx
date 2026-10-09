/**
 * main.tsx - the starting point of the real website.
 *
 * When you run `npm run dev`, this is the first file that runs. It loads the
 * two global stylesheets, finds the empty <div> in index.html, and draws the
 * app inside it.
 *
 * THE ORDER OF THE TWO IMPORTS MATTERS.
 * tokens.css defines the CSS variables; base.css uses them. Swap them and the
 * page-wide background and text colour silently fall back to nothing.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 1. The generated design tokens. Every CSS variable in the system.
import './styles/tokens.css';
// 2. The page-wide rules that sit on top of them.
import './base.css';

// TEMPLATE: replace this with the project's real root component, and delete
// ExamplePage.tsx + ExamplePage.module.css once you have real pages.
import { ExamplePage } from './ExamplePage';

// `document.getElementById('root')` finds <div id="root"> in index.html.
// The `!` tells TypeScript "trust me, this definitely exists".
createRoot(document.getElementById('root')!).render(
  // StrictMode is a development-only helper that warns about common mistakes.
  // It does nothing in the built site.
  <StrictMode>
    <ExamplePage />
  </StrictMode>,
);
