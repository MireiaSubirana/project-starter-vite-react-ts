# Recipe: webapp / dashboard

Behind a login. Density, state and data display matter far more than marketing
polish. This is the type least served by the demo repo.

## Components you'll probably need
AppShell (sidebar + topbar) · Nav items · Avatar · Dropdown menu · Modal ·
Drawer · Toast · Tabs · Table (sortable, selectable) · Pagination · Form
inputs (all of them) · Select · Checkbox · Radio · Toggle · DatePicker ·
Badge · Tooltip · EmptyState · Skeleton loader

## Pull from DemoDesignSystem
`Button` only, realistically. The rest is a different kind of interface.

## Set up in Figma first
- **A denser space scale.** Marketing spacing (24/32/48) is far too loose for a
  data table. You probably want 2/4/6/8/12/16 at the small end.
- **Status colours**, same as ecommerce.
- **A smaller base font size.** Dashboards usually sit at 14px body, not 16px.
- Elevation/shadow tokens — modals, dropdowns and popovers need a layering
  scale, and this system has none by default.

## Watch out for
- **Dark mode is not optional here.** People stare at these all day. The token
  structure already supports it; actually design both.
- Every data component needs loading, empty and error states. That is three
  extra stories per component, and they are the ones that ship broken.
- Keyboard navigation is a requirement, not a nicety — modals trap focus,
  dropdowns respond to arrows, escape closes things.
