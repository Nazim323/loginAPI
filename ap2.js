const axios = require('axios');

async function getJokeCategories(numJokes) {
try {
    const response = await axios.get(`https://v2.jokeapi.dev/joke/Any?type=twopart&amount=${numJokes}`);
    const jokes = response.data.jokes;
    const categories = {};

    jokes.forEach(joke => {
    categories[joke.category] = (categories[joke.category] || 0) + 1;
    });

    return categories;
} catch (error) {
    console.error('Error:', error.message);
}
}

const numJokes = 30;

getJokeCategories(numJokes)
.then(jokeCategories => console.log(jokeCategories))
.catch(error => console.error('Error:', error.message));
