# [PROJECT NAME] — design system

> **TEMPLATE.** Fill in the bracketed bits when you start a project, then
> delete this line. Everything else is already true and should stay.

## Who you're working with

Mireia is a **designer who also builds the thing.** She reads design intent
fluently and programming idiom much less so.

- Explain in plain English, and explain the **why**, not just the what.
- Comment generously in any code you write — especially the non-obvious parts
  (build steps, generated files, why a prop exists, CSS like `aspect-ratio`,
  container queries, `:focus-visible`).
- Prefer pointing at the real file and walking through it over abstract
  explanation.
- Work in reviewable chunks and stop to show her, rather than one giant change.

## The Figma source

File: *[FILE NAME]* (fileKey `[KEY]`)

**Read-only unless she explicitly asks otherwise.**

Access it through the **figma-console MCP** (Desktop Bridge plugin), not the
REST API — the stored token lacks `files:read` scope, so REST-backed tools like
`figma_get_styles` return 403. Plugin-backed tools work fine. Check the
connection with `figma_diagnose`.

## How the project is wired

```
tokens.json              Figma variables + text styles. Source of truth.
   │  npm run build:tokens   (scripts/build-tokens.mjs)
   ▼
src/styles/tokens.css    GENERATED. Never hand-edit.
   │
   ├─ src/base.css            page-wide rules, uses the tokens
   ▼
src/components/<Name>/   Component + .module.css + .stories.tsx + index.ts
   │
   ▼
pages                    Assembled from components. No styling of their own.
```

**The rule the whole codebase follows: components use `var(--token)` and
nothing else.** If a literal value is unavoidable because Figma has no token
for it, it goes in `gaps.md` with a reason. No silent magic numbers.

---

## The naming rule — the most important thing in this file

> **A variable's own name must be globally unique and say what kind of thing it
> is. Never lean on the collection name to disambiguate.**

Figma hands over the collection and the variable name as *separate fields*, and
the converter uses only the name. So in Figma a semantic colour must be named
`color/text/default`, **not** `text/default` inside a collection called
`color`. Collections are for holding modes and organising the designer's
sidebar — they are not part of the name.

Get this right and the whole conversion is one line with no exceptions:

```js
'--' + figmaName.replace(/\//g, '-')      // color/text/default -> --color-text-default
```

Get it wrong and every fresh session has to *guess* whether to fold in the
collection name — and different sessions guess differently, so the same Figma
file produces different CSS names on different days.

**Name things like this:**

| Kind | In Figma | Becomes |
|---|---|---|
| Colour primitives | `color/brand/500` | `--color-brand-500` |
| Semantic colours | `color/text/default` | `--color-text-default` |
| Font sizes | `font-size/300` | `--font-size-300` |
| Spacing | `space/400` | `--space-400` |
| Radius | `radius/md` | `--radius-md` |
| Layout | `layout/gutter` | `--layout-gutter` |
| Text **styles** | `font/body/md` | `.font-body-md` (a class) |

**Figma text styles are not variables.** Styles cannot have modes; only
variables can. That is exactly why the font *sizes* are variables carrying the
sm/md/lg modes, and the text *styles* reference them — that is the entire
responsive-type mechanism. Keep it.

---

## Starting a new project from this template

1. **Read the Figma file** through figma-console. Write down the file name, key
   and date.
2. **Fill in `tokens.json`.** Replace the placeholder values with the real ones,
   keeping the structure. Update `$about.source` and delete `TEMPLATE_NOTE`.
   Check every Figma variable name against the naming rule above *before*
   transcribing — fix the names in Figma if they are wrong, since that is
   cheaper now than ever again.
3. **`npm run build:tokens`**, and read the output. It reports how many
   variables and styles it wrote; if a number looks low, something did not
   transcribe.
4. **Check the smoke test** — `npm run dev` and read `src/ExamplePage.tsx`'s
   checklist. Fix anything wrong here before building components.
5. **Build components one at a time**, copying the shape of
   `src/components/Button/` exactly. Add each to `src/index.ts`.
6. **Keep `gaps.md` as you go**, not at the end. It is the thing you will not
   reconstruct from memory.
7. **Delete the scaffolding**: `ExamplePage.tsx`, `ExamplePage.module.css`, and
   this section's TEMPLATE notes.

### Component checklist

Every component folder has exactly four files, like `Button/`:

| File | Holds |
|---|---|
| `Name.tsx` | The component and its props. Props mirror the Figma property names. |
| `Name.module.css` | The look. Tokens only. Explains its responsive strategy at the top. |
| `Name.stories.tsx` | One story per meaningful state, with written descriptions. |
| `index.ts` | The barrel re-export. |

- **A Figma variant becomes a prop**, with a TypeScript union type.
- **A Figma interaction state becomes a CSS pseudo-class** (`:hover`,
  `:active`, `:focus-visible`) — *not* a prop. The exception is a forced
  `state` prop used only so Storybook can show all states at once; `Button`
  shows the pattern.
- **Responsiveness is CSS, never a prop.** No component takes a `breakpoint`.
  Thresholds are **800** and **1280**, matching the `text primitives` modes in
  `tokens.json`, so layout and type scale always change on the same pixel.
- **Use a container query, not a media query, when a component is reusable at
  different widths** (a card in a grid vs in a sidebar). It should respond to
  the room *it* has, not the window's width.
- **Write the prop descriptions properly.** The Storybook MCP addon reads them,
  which is what lets an AI prototype new pages from real components.

---

## Commands

| Command | Does |
|---|---|
| `npm install` | First thing, after cloning |
| `npm run dev` | The real site, localhost:5173 |
| `npm run storybook` | Component catalogue, localhost:6006 |
| `npm run build:tokens` | Regenerate `tokens.css` from `tokens.json` |
| `npm run build` | Type-check **and** build. Use this, not `npx tsc --noEmit` — the bare command misses files the build config includes, and has let a real error through before. |
| `npm run lint` | oxlint |

## Conventions

- **CSS Modules**, not CSS-in-JS — plain CSS, scoped per component.
- **Type is CSS classes** (`.font-body-md`), not custom properties. This is a
  deliberate choice: the `font:` shorthand cannot carry letter-spacing, so the
  custom-property version needs a second `--…-tracking` variable per style.
  Classes avoid that entirely.
- **Dark mode** is `data-theme="dark"` on `<html>`. Components never write
  dark-mode CSS — the semantic tokens re-point themselves.
- Prop names match Figma property names, including awkward ones. If you rename
  something, record it in `gaps.md` and say why.
- Never hand-edit `src/styles/tokens.css`. It says so at the top of the file.
