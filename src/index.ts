/**
 * The design system's front door.
 *
 * Everything the outside world should be able to use is re-exported here, so
 * an app can write one tidy import:
 *   import { Button } from './src';
 *
 * Remember to import the stylesheets once too, at the top level of your app:
 *   import './styles/tokens.css';
 *   import './base.css';
 *
 * TEMPLATE: add a line here for every component you build. Exporting the
 * types as well as the component is deliberate - it is what lets an editor
 * (and Claude) autocomplete the props correctly at the call site.
 */

export { Button } from './components/Button';
export type { ButtonProps, ButtonVariant, ButtonState } from './components/Button';
