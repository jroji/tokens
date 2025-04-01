import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'

import styles from './commit-app.scss?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('commit-app')
export class CommitApp extends LitElement {

  static styles = unsafeCSS(styles);

  render() {
    return html`
      <main>
        <commit-header></commit-header>
        <commit-hero></commit-hero>
      </main>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'commit-app': CommitApp
  }
}
