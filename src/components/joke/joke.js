import componentTemplate from './joke.html';
import componentStyle from './joke.css';

class Joke extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }).innerHTML = `<style>${componentStyle}</style>${componentTemplate}`;
        this.render();
    }

    static get observedAttributes() {
        return ['joke', 'punchline'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const jokeTextElement = this.shadowRoot.querySelector('.joke-text');
        const punchlineTextElement = this.shadowRoot.querySelector('.punchline-text');

        jokeTextElement.textContent = this.getAttribute('joke');
        punchlineTextElement.textContent = this.getAttribute('punchline');
    }
}

window.customElements.define('papajoke-joke', Joke);