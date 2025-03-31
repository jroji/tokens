import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './commit-button.scss?inline';

@customElement('commit-button')
export class CommitButton extends LitElement {

    @property({ type: String, reflect: true })
    variant = 'primary';

    static styles = unsafeCSS(styles)

    render() {
        return html`
            <button
                @click=${this._handleClick}
            >
                <slot></slot>
            </button>
        `;
    }

    private _handleClick(e: Event) {
        this.dispatchEvent(new CustomEvent('button-click', {
            bubbles: true,
            composed: true
        }));
    }
}