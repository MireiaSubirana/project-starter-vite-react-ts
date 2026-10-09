/**
 * ExamplePage - a smoke test, not a design.
 *
 * WHAT IT IS FOR
 * The moment you clone this template and run `npm run dev`, this page tells
 * you whether the whole pipeline is wired up correctly:
 *
 *   1. tokens.css was generated and loaded   -> the colours below are not grey
 *   2. base.css was loaded                   -> no browser default margins
 *   3. the text-style classes exist          -> the type scale renders
 *   4. dark mode is wired                    -> the toggle flips everything
 *   5. the layout tokens work                -> content is contained and gutted
 *   6. your font is loading                  -> text is not in a system sans
 *
 * If any of those look wrong, fix it before you build anything else - every
 * component you write afterwards sits on top of this.
 *
 * DELETE THIS FILE once the project has real pages. It is scaffolding.
 * (Also remove its import from main.tsx when you do.)
 */

import { useState } from 'react';
import { Button } from './components/Button';
import styles from './ExamplePage.module.css';

/** The text-style classes that tokens.css generates from the Figma text styles. */
const TEXT_STYLES = [
  'font-display-md',
  'font-headline-lg',
  'font-headline-md',
  'font-headline-sm',
  'font-body-md-default',
  'font-body-md-strong',
  'font-caption-md',
  'font-link-md',
  'font-link-inline',
  'font-button-md',
  'font-navigation-md',
] as const;

/** Semantic colour tokens, grouped the way the Figma collection is. */
const COLOR_GROUPS = [
  { name: 'text', tokens: ['default', 'muted', 'inverse', 'accent', 'disabled'] },
  { name: 'surface', tokens: ['default', 'raised', 'inverse', 'accent-subtle'] },
  { name: 'border', tokens: ['default', 'strong', 'accent', 'focus'] },
] as const;

/** The space scale, so you can see the rhythm rather than read numbers. */
const SPACE_STEPS = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

export function ExamplePage() {
  // Dark mode is driven by data-theme on <html>, which is exactly what
  // tokens.css expects. Setting it here rather than on a wrapper div means it
  // also recolours the area outside the app, like the real site would.
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
  }

  return (
    <div className="layout-container">
      <header className={styles.header}>
        <div>
          <h1 className="font-headline-lg">Design system smoke test</h1>
          <p className="font-body-md-default" style={{ color: 'var(--color-text-muted)' }}>
            If everything below looks right, the token pipeline is working.
          </p>
        </div>
        <Button
          label={dark ? 'Light mode' : 'Dark mode'}
          variant="secondary"
          onClick={toggleTheme}
        />
      </header>

      {/* ---- 1. Type scale ------------------------------------------------ */}
      <section className={styles.section}>
        <h2 className="font-headline-md">Text styles</h2>
        <p className="font-caption-md" style={{ color: 'var(--color-text-muted)' }}>
          One class per Figma text style. Resize the window - the sizes change at
          800px and 1280px, because the font-size tokens have breakpoint modes.
        </p>
        <div className={styles.stack}>
          {TEXT_STYLES.map((name) => (
            <div key={name} className={styles.typeRow}>
              <code className={styles.label}>.{name}</code>
              <span className={name}>The quick brown fox</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---- 2. Semantic colours ------------------------------------------ */}
      <section className={styles.section}>
        <h2 className="font-headline-md">Semantic colours</h2>
        <p className="font-caption-md" style={{ color: 'var(--color-text-muted)' }}>
          These are the only colours a component should use. Toggle dark mode -
          every swatch should change without any component knowing about it.
        </p>
        {COLOR_GROUPS.map((group) => (
          <div key={group.name} className={styles.swatchGrid}>
            {group.tokens.map((token) => {
              const varName = `--color-${group.name}-${token}`;
              return (
                <div key={varName} className={styles.swatch}>
                  <div
                    className={styles.chip}
                    style={{ background: `var(${varName})` }}
                  />
                  <code className={styles.label}>
                    {group.name}/{token}
                  </code>
                </div>
              );
            })}
          </div>
        ))}
      </section>

      {/* ---- 3. Space scale ----------------------------------------------- */}
      <section className={styles.section}>
        <h2 className="font-headline-md">Space scale</h2>
        <div className={styles.stack}>
          {SPACE_STEPS.map((step) => (
            <div key={step} className={styles.typeRow}>
              <code className={styles.label}>space/{step}</code>
              <div
                className={styles.spaceBar}
                style={{ width: `var(--space-${step})` }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---- 4. The specimen component ------------------------------------ */}
      <section className={styles.section}>
        <h2 className="font-headline-md">Button</h2>
        <p className="font-caption-md" style={{ color: 'var(--color-text-muted)' }}>
          The one component this template ships, as the pattern for every
          component you add. Hover and tab to it - the real browser states work;
          the forced <code>state</code> prop exists only so Storybook can show
          all four at once.
        </p>
        <div className={styles.buttonRow}>
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Disabled" variant="primary" disabled />
        </div>
      </section>
    </div>
  );
}
