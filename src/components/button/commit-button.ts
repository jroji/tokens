import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './commit-button.scss?inline';

@customElement('commit-button')
export class CommitButton extends LitElement {

    @property({ type: String, reflect: true })
    variant = 'primary';

    @property({ type: String, reflect: true })
    type = 'button';

    @property({ type: String, reflect: true })
    href = '';

    @property({ type: String, reflect: true })
    target = '_self';

    static styles = unsafeCSS(styles)

    render() {
        return this.href ? html`
            <a href=${this.href} target=${this.target}>
                <slot></slot>
            </a>
        ` : html`
            <button
                @click=${this._handleClick}
            >
                <slot></slot>
            </button>
        `;
    }

    private _handleClick() {
        this.dispatchEvent(new CustomEvent('button-click', {
            bubbles: true,
            composed: true
        }));
    }
}