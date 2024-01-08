class Joke extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ['joke', 'punchline'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    // Clear existing content
    this.innerHTML = '';

    const jokeElement = document.createElement('div');
    jokeElement.classList.add('joke');

    const jokeTextElement = document.createElement('h2');
    jokeTextElement.textContent = this.getAttribute('joke');
    jokeTextElement.style.fontSize = '3em';

    const punchlineTextElement = document.createElement('p');
    punchlineTextElement.textContent = this.getAttribute('punchline');
    punchlineTextElement.style.fontSize = '2em';

    jokeElement.appendChild(jokeTextElement);
    jokeElement.appendChild(punchlineTextElement);

    this.appendChild(jokeElement);
  }
}

window.customElements.define('papajoke-joke', Joke);
