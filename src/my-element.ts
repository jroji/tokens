import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'
import styles from './my-element.scss?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {

  static styles = unsafeCSS(styles);

  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <main>
        <img class="hero" src="https://images.unsplash.com/photo-1626125345510-4603468eedfb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Conference image" />
        <h1>Crommit Conf</h1>
        <p>Madrid, 4-5 de Abril</p>
        <commit-button>Compra tu entrada</commit-button>
      </main>
    `
  }

  private _onClick() {
    this.count++
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
