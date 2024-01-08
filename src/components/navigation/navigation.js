import componentTemplate from './navigation.html';
import componentStyle from './navigation.css';

class JokeNavButton extends HTMLElement {
    constructor() {
        super();
        this.adoptedStyleSheets = ['./navigation.css'];
        this.attachShadow({ mode: 'open' }).innerHTML = `<style>${componentStyle}</style>${componentTemplate}`;
    }

    connectedCallback() {
        const nextButton = this.shadowRoot.querySelector('.joke-nav-button--next');
        nextButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.dispatchEvent(new CustomEvent('nextjoke', { bubbles: true, composed: true }));
        });

        const previousButton = this.shadowRoot.querySelector('.joke-nav-button--previous');
        previousButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.dispatchEvent(new CustomEvent('previousjoke', { bubbles: true, composed: true }));
        });
    }
}

window.customElements.define('papajoke-nav', JokeNavButton);
