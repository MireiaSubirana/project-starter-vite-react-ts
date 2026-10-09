# Recipe: landing page

One page, one goal, usually a signup or a purchase. The design system is small;
the typography and spacing carry almost all the work.

## Components you'll probably need
Navigation (often just logo + one CTA) · Hero · FeatureGrid · Testimonial ·
PricingCard · FAQ (accordion) · CTA band · Footer

## Pull from DemoDesignSystem
`Hero`, `Skills` (a feature grid — rename it), `SkillItem`, `Footer`,
`Navigation`, `Button`.

## Set up in Figma first
- A big type scale. Landing pages lean on display sizes — make sure
  `font-size/600` and up actually differ across breakpoints, or the mobile
  hero will be unreadable.
- `color/surface/accent-subtle` for alternating section bands. Landing pages
  stripe constantly and this is the token that does it.

## Watch out for
- **Section rhythm is a token, not a vibe.** Pick one vertical padding step for
  all sections and stick to it, or the page reads as drifting.
- The hero is the one place a client will ask for "just a bit bigger" ten
  times. Keep it on the type scale anyway; add a scale step if you truly need
  one rather than a one-off size.
