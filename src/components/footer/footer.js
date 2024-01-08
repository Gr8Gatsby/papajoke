import componentTemplate from './footer.html';
import componentStyle from './footer.css';

class Footer extends HTMLElement {
  constructor() {
    super();
    this.adoptedStyleSheets = [componentStyle];
    this.attachShadow({ mode: 'open' }).innerHTML = `<style>${componentStyle}</style>${componentTemplate}`;
  }

  connectedCallback() {
    const footerElement = document.importNode(componentTemplate, true);

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(footerElement);
  }
}

window.customElements.define('papajoke-footer', Footer);