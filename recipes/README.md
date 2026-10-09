# Recipes

One short note per project type: what that type usually needs, what to set up
in Figma before you start, and which patterns to pull from the `DemoDesignSystem`
repo rather than build fresh.

**Why these are notes and not separate templates.** Maintaining four starter
repos means every upgrade (Storybook 10 → 11, Vite 8 → 9, React 19 → 20) is
four times the work for one person — so within a year three are stale and you
stop trusting all four. Markdown costs nothing to maintain and can never break
a build. One template, many recipes.

**These are first drafts, written from general practice rather than from your
past projects.** Edit them after each real job — that is when they become
actually valuable. A recipe you have corrected twice is worth more than
anything written up front.

| Recipe | For |
|---|---|
| [landing-page.md](landing-page.md) | One-page marketing, campaign, launch |
| [corporate-site.md](corporate-site.md) | Multi-page company site |
| [ecommerce.md](ecommerce.md) | Shop, catalogue, checkout |
| [portfolio.md](portfolio.md) | Personal or studio showcase |
| [webapp.md](webapp.md) | Dashboard, tool, anything behind a login |
| [mobile-app.md](mobile-app.md) | Native-feeling app UI |

## What every recipe assumes

Whatever the type, these are always true and are not repeated in each file:

- The naming rule in `CLAUDE.md` applies. Check Figma variable names before
  transcribing anything.
- Set up the colour collection with **Light and Dark modes** even if the client
  only wants light. Retrofitting dark mode later means touching every token;
  adding it up front costs one extra mode column.
- Set up the breakpoint modes on font sizes at the start, with whatever
  thresholds the design actually uses. The default here is 800 / 1280.
- `layout/gutter` and `layout/container-max` exist in every project. Fill them
  in rather than hardcoding a container width in the first component that
  needs one.
- Keep `gaps.md` from day one.
