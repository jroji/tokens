import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './commit-header.scss?inline';

@customElement('commit-header')
export class CommitHeader extends LitElement {

    @property({ type: String, reflect: true })
    title = 'Commit';

    static styles = unsafeCSS(styles)

    render() {
        return html`
            <header>
                <a href="/">
                    <img class="logo" src="/commit-logo.svg" alt="Commit" />
                </a>

                <nav>
                    <ul>
                        <li>
                            <a href="/">Agenda</a>
                        </li>
                        <li>
                            <a href="/">Entradas</a>
                        </li>
                        <li>
                            <a href="/">Dónde</a>
                        </li>
                        <li>
                            <a href="/">Patrocinadores</a>
                        </li>
                    </ul>
                </nav>
            </header>
        `;
    }
}