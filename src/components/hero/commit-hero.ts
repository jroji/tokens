import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './commit-hero.scss?inline';

@customElement('commit-hero')  
export class CommitHero extends LitElement {

    static styles = unsafeCSS(styles)

    @property({ type: String, reflect: true })
    talksValue = '70';

    @property({ type: String, reflect: true })
    attendeesValue = '+1.000';

    @property({ type: String, reflect: true })
    communitiesValue = '33';

    render() {
        return html`
            <section class="hero">
                <img class="hero-image" src="/hero.avif" aria-hidden="true" />
                <div class="hero-content">
                    <img class="hero-logo" src="/commit-logo.svg" alt="Commit" />
                    <p>Madrid, 4-5 de Abril</p>
                    <div class="hero-actions">
                        <commit-button href="https://koliseo.com/commit/commit-conf-2025/agenda" target="_blank">Agenda <small>Descúbrela ahora</small></commit-button>
                        <commit-button variant="secondary" href="https://koliseo.com/commit/commit-conf-2025/tickets" target="_blank">Entradas <small>Ya disponibles</small></commit-button>
                    </div>
                </div>
                
            </section>
            <ul class="stats">
                <li class="stat">
                    <div class="stat-value">${this.talksValue}</div>
                    <div class="stat-label light">charlas</div>
                </li>
                
                <li class="stat">
                    <div class="stat-value">${this.attendeesValue}</div>
                    <div class="stat-label light">asistentes</div>
                </li>
                
                <li class="stat">
                    <div class="stat-value">${this.communitiesValue}</div>
                    <div class="stat-label light">comunidades</div>
                </li>
                
            </ul>
        `;
    }
}