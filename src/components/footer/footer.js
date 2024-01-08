class Footer extends HTMLElement {
    constructor() {
      super();
      const footerElement = document.createElement('footer');
      const footerText = document.createElement('span');
      footerText.textContent = 'Served with ❤️ from a Dadabase';
      footerElement.appendChild(footerText);
      document.body.appendChild(footerElement);
    }
  }
  
  window.customElements.define('papajoke-footer', Footer);