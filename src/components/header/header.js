import componentTemplate from './header.html';
import componentStyle from './header.css';
class Header extends HTMLElement {
  constructor() {
    super();
    this.adoptedStyleSheets = [componentStyle];
    this.attachShadow({ mode: 'open' }).innerHTML = `<style>${componentStyle}</style>${componentTemplate}`;
  }
}

window.customElements.define('papajoke-header', Header);