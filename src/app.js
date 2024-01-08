import './app.css';
import './components/header/header.js';
import './components/joke/joke.js';
import './components/footer/footer.js';
import './components/navigation/navigation.js';

// Add event handlers from navigation.js
document.addEventListener('nextjoke', next);
document.addEventListener('previousjoke', previous);

let jokesData = []; // Array to store the jokes data
let currentJokeIndex = 0; // Index of the current joke

function setJokeAttributes(joke) {
    const jokeElement = document.querySelector('papajoke-joke');
    jokeElement.setAttribute('joke', joke.joke);
    jokeElement.setAttribute('punchline', joke.punchline);
    jokeElement.setAttribute('why', joke.why);
}

function next() {
    currentJokeIndex++;
    if (currentJokeIndex >= jokesData.length) {
        currentJokeIndex = 0; // Wrap around to the first joke if reached the end
    }
    setJokeAttributes(jokesData[currentJokeIndex]);
}

function previous() {
    currentJokeIndex--;
    if (currentJokeIndex < 0) {
        currentJokeIndex = jokesData.length - 1; // Wrap around to the last joke if reached the beginning
    }
    setJokeAttributes(jokesData[currentJokeIndex]);
}

fetch('./data/jokes.json')
    .then(response => response.json())
    .then(data => {
        jokesData = data;
        const firstJoke = jokesData[0];
        setJokeAttributes(firstJoke);
        console.log(firstJoke);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
