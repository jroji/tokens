import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './commit-hero.scss?inline';

@customElement('commit-hero')  
export class CommitHero extends LitElement {

    static styles = unsafeCSS(styles)

    render() {
        return html`
            <section class="hero">
                <img class="hero-image" src="/hero.avif" aria-hidden="true" />
                <div class="hero-content">
                    <img class="hero-logo" src="/commit-logo.svg" alt="Commit" />
                    <p>Madrid, 4-5 de Abril</p>
                    <div class="hero-actions">
                        <commit-button>Agenda <small>Descúbrela ahora</small></commit-button>
                        <commit-button variant="secondary">Entradas <small>Ya disponibles</small></commit-button>
                    </div>
                </div>
                
            </section>
            <div class="stats">
                <div class="stat">
                    <div class="stat-value">70</div>
                    <div class="stat-label light">charlas</div>
                </div>
                
                <div class="stat">
                    <div class="stat-value">+1.000</div>
                    <div class="stat-label light">asistentes</div>
                </div>
                
                <div class="stat">
                    <div class="stat-value">33</div>
                    <div class="stat-label light">comunidades</div>
                </div>
                
            </div>
        `;
    }
}