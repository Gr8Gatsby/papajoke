class Header extends HTMLElement {
    constructor() {
      super();
      const headerElement = document.createElement('header');
      headerElement.innerHTML = `<h1>Papajoke</h1>`;
      this.appendChild(headerElement);
    }
  }
  
  window.customElements.define('papajoke-header', Header);