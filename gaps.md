# Gaps, judgement calls and things to know

> **TEMPLATE FILE.** Keep this file in every project and fill it in as you go.
> The headings below are the categories that actually came up last time — delete
> any that stay empty, add your own.

Everything in this file is something that could not be taken straight from
Figma: a value that was missing, a name that looked wrong, or a decision made
on your behalf. Nothing here should be blocking — the design system works —
but these are the things worth a look before relying on it.

**Why bother.** Three reasons, and they all pay off later:

1. **Client conversations.** "Your Figma says the secondary button border uses
   the primary colour — intentional?" is a better question than silently
   guessing, and it makes you look like you read the file properly.
2. **Your own memory.** In four months you will not remember why the logo is
   48px and not a token. This file is where that lives.
3. **The AI's memory.** A fresh Claude session has no idea which oddities were
   deliberate. Without this file it will "helpfully" re-tokenise the thing you
   decided to leave alone, every time.

Read on: **[date]**, from Figma file *[file name]* (`[fileKey]`).
State clearly whether Figma was only read, or also written to.

---

## 1. Likely mistakes in the Figma file

The ones actually worth going back and looking at. For each: what Figma says,
what it actually does, and what the code does about it.

## 2. States and variants that don't exist in Figma

Real interfaces need states a static design often skips — `disabled`, `hover`
on links, loading, empty, error. Note which ones you invented and which tokens
you built them from.

## 3. Values with no token behind them

Anything hardcoded in the CSS, and why no token covered it. Every entry here is
a candidate for a new Figma variable — this list is useful feedback to take
back into the design file.

## 4. Accessibility

Contrast pairs that fail, focus states that were not designed, tap targets
under 44px, headings that skip a level, anything relying on colour alone.

## 5. Fonts

Which weights are actually loaded vs which the tokens reference, and any
fallback behaviour.

## 6. Things changed after comparing against Figma screenshots

Where the first pass of the code did not match the design, and what moved.

## 7. Building the pages

Decisions made while assembling screens that are not visible in any single
component.

## 8. Smaller judgement calls

Naming, prop shapes, anything renamed from Figma and why.

## 9. Known setup issues

Environment or tooling problems that are not design decisions but will bite the
next person — or the next you.
