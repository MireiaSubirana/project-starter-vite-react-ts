# Project Starter — Vite + React + TypeScript

A **starter project template** for building a site or app from a Figma file.
Clone it every time you start something new, point it at a different Figma
file, and go.

It is not a design system. It is the scaffolding you'd otherwise rebuild from
scratch each time: the token pipeline from Figma to CSS, the house conventions
for writing a component, Storybook already configured, and the written
step-by-step for a fresh Figma → code run.

**Stack:** Vite · React · TypeScript · Storybook · Vitest. The stack is baked
in deliberately — the token build script, the Storybook config and the
component conventions all assume it. For a different stack (Astro, Next, plain
HTML), start a separate template rather than bending this one.

**It deliberately ships almost no components.** Every project — landing page,
ecommerce, corporate site, portfolio, mobile app, webapp — needs a different
set, so a shipped component library would be nine folders you delete and one
you keep. What it ships instead is the machinery, plus **one** component
(`Button`) as the worked example of the house conventions.

## What's in the box

| | What it is |
|---|---|
| `tokens.json` → `scripts/build-tokens.mjs` → `src/styles/tokens.css` | The token pipeline. Edit the JSON, run one command, never touch the CSS. |
| `src/base.css` | The page-wide rules: reset, body, focus ring, layout container. |
| `src/components/Button/` | The specimen. Copy its shape for every component you add. |
| `src/ExamplePage.tsx` | A smoke test that proves the pipeline works. Delete it once real pages exist. |
| `.storybook/` | Light/dark toolbar switch, the three Figma frame widths, a11y panel, Storybook MCP. |
| `CLAUDE.md` | The conventions, and the step-by-step for a fresh Figma → code run. **Read this first.** |
| `gaps.md` | An empty structure for recording what didn't translate cleanly from Figma. Fill it in as you go. |
| `recipes/` | Short notes per project type: which components that type usually needs, what to set up in Figma. |

## Start a project

```bash
npm install
npm run dev
```

The smoke-test page at localhost:5173 tells you whether everything is wired
up. Then follow **"Starting a new project from this template"** in `CLAUDE.md`.

```bash
npm run storybook
```

## The one rule that matters most

> A Figma variable's own name must be globally unique and say what kind of
> thing it is. Never lean on the collection name to disambiguate.

Name a semantic colour `color/text/default` in Figma, not `text/default` in a
collection called `color`. Figma hands the collection and the name over as
separate fields and the converter only sees the name — so that prefix is the
difference between a conversion that is one deterministic line forever, and one
where every fresh AI session guesses differently and you get different CSS
names on different days.

`CLAUDE.md` has the full naming table. Get it right in Figma at the start; it
is the cheapest it will ever be.

## Known

- The token values in `tokens.json` are **placeholders**, kept so the build
  works the moment you clone. Replace them with the real file's tokens.
- `node_modules` is not included; run `npm install`.
- No tests are written, though Vitest and the Storybook test addon are wired up.
- The a11y addon runs in Storybook as a warning, not a gate.
