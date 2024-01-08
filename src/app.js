import './app.css';
import './components/header/header.js';
import './components/footer/footer.js';
import './components/joke/joke.js';

let currentJokeIndex = 0;
let jokesData = [];

function displayNextJoke() {
    currentJokeIndex++;
    if (currentJokeIndex >= jokesData.length) {
        currentJokeIndex = 0;
    }

    const nextJoke = jokesData[currentJokeIndex];
    const jokeElement = document.querySelector('papajoke-joke');
    jokeElement.setAttribute('joke', nextJoke.joke);
    jokeElement.setAttribute('punchline', nextJoke.punchline);
    jokeElement.setAttribute('why', nextJoke.why);

    const nextJokeEvent = new CustomEvent('nextJoke');
    jokeElement.dispatchEvent(nextJokeEvent);
}

fetch('./data/jokes.json')
    .then(response => response.json())
    .then(data => {
        jokesData = data;
        const firstJoke = jokesData[0];
        const jokeElement = document.querySelector('papajoke-joke');
        jokeElement.setAttribute('joke', firstJoke.joke);
        jokeElement.setAttribute('punchline', firstJoke.punchline);
        jokeElement.setAttribute('why', firstJoke.why);
        console.log(firstJoke);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
