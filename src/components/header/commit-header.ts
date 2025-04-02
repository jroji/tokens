import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './commit-header.scss?inline';

@customElement('commit-header')
export class CommitHeader extends LitElement {

    static styles = unsafeCSS(styles)

    render() {
        return html`
            <header>
                <a href="/">
                    <img class="logo" src="commit-logo.svg" alt="Commit" />
                </a>

                <nav>
                    <ul>
                        <li>
                            <a href="https://koliseo.com/commit/commit-conf-2025/agenda" target="_blank">Agenda</a>
                        </li>
                        <li>
                            <a href="https://2025.commit-conf.com/es/tickets" target="_blank">Entradas</a>
                        </li>
                        <li>
                            <a href="https://2025.commit-conf.com/es/location" target="_blank">Dónde</a>
                        </li>
                        <li>
                            <a href="https://2025.commit-conf.com/es/sponsors" target="_blank">Patrocinadores</a>
                        </li>
                    </ul>
                </nav>
            </header>
        `;
    }
}