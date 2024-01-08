function setJokeAttributes(joke) {
    const jokeElement = document.querySelector('papajoke-joke');
    jokeElement.setAttribute('joke', joke.joke);
    jokeElement.setAttribute('punchline', joke.punchline);
    jokeElement.setAttribute('why', joke.why);
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
