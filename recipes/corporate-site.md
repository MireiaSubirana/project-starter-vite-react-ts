# Recipe: corporate site

Many pages, many editors, long life. The system matters more than any single
page, because people who are not you will add content to it.

## Components you'll probably need
Navigation (multi-level, mobile drawer) · Breadcrumb · Hero (several sizes) ·
RichText block · Card · TeamMember · Stat · Accordion · Table · ContactForm ·
Footer (usually large, multi-column)

## Pull from DemoDesignSystem
`Navigation`, `Menu`, `Footer`, `About` (a media-and-text block — rename it to
`MediaSection`), `ProjectCard`, `Button`.

## Set up in Figma first
- **A RichText style set.** Corporate sites are mostly prose. Define h2/h3/
  body/list/link/quote as text styles and style them once in a `.richtext`
  block, rather than per component.
- Multiple hero sizes as a variant, not separate components.
- Real focus and error states — these sites get accessibility audits.

## Watch out for
- **Content you did not design for will arrive.** Every component needs to
  survive a headline twice as long and an image with the wrong aspect ratio.
  Test with bad content deliberately.
- Multi-level navigation is the single most expensive component here. Budget
  for it, and build the mobile drawer first.
