# Recipe: mobile app

Native-feeling UI. The biggest difference from every other recipe: the layout
tokens and the breakpoint modes are mostly irrelevant, and touch rules
everything.

## Components you'll probably need
TabBar (bottom) · NavBar (top, with back) · ListItem · Card · Sheet / bottom
drawer · Segmented control · Toggle · Form inputs · Toast · EmptyState ·
Avatar · Badge

## Pull from DemoDesignSystem
`Button`. Not much else transfers — web chrome and app chrome are different
animals.

## Set up in Figma first
- **Tap targets: nothing interactive below 44×44pt.** Make it a rule in the
  file, not a thing you check later.
- Safe-area padding as tokens (notch, home indicator).
- A single-column space scale. Breakpoint modes are usually unnecessary —
  consider dropping to one mode rather than carrying three empty ones.
- Decide platform conventions up front: iOS and Android disagree about back
  navigation, sheets and typography.

## Watch out for
- **This template is a web stack.** If the project is genuinely native
  (React Native, Swift, Kotlin), only `tokens.json` and the naming rule carry
  over — the CSS pipeline does not. That is still the valuable half: export
  the tokens to whatever format the platform wants.
- If it is a web app pretending to be native (PWA), everything here applies,
  but build mobile-first and treat desktop as the afterthought — the reverse of
  every other recipe.
