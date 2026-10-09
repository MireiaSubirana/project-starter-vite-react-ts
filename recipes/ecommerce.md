# Recipe: ecommerce

The most component-heavy type, and the one where states matter most — almost
everything has loading, empty, error and disabled versions.

## Components you'll probably need
Navigation + search · ProductCard · ProductGallery · PriceDisplay ·
QuantityStepper · VariantPicker (size/colour swatches) · AddToCart ·
CartLineItem · CartSummary · Badge (sale / sold out) · Rating · Filters ·
Pagination · Breadcrumb · Form inputs · Footer

## Pull from DemoDesignSystem
`ProjectCard` (the closest thing to a ProductCard), `Navigation`, `Menu`,
`Button`, `Footer`.

## Set up in Figma first
- **Status colours as semantic tokens**: `color/status/success`,
  `color/status/warning`, `color/status/error`, `color/status/info`. Sale
  badges, stock warnings and validation errors all need them and they are the
  tokens most often forgotten at the start.
- **A form input component with every state designed**: default, focus, filled,
  error, disabled, with helper text. Do this once, properly, before building
  checkout.
- A tighter space scale. Product grids need smaller steps than marketing pages.

## Watch out for
- **The card is used at four sizes** (grid, carousel, cart line, recommendation
  strip). Build it with a container query from the start, not a media query.
- Price is not a string. Decide early how currency, decimals and discounts are
  formatted, in one place.
- Empty states — empty cart, no search results, out of stock — are real screens
  and clients always forget to design them. Put them in `gaps.md` on day one.
