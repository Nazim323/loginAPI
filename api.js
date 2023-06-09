const axios = require('axios');

async function getJokeCategories(numJokes) {
try {
    const categories = {};

    for (let i = 0; i < numJokes; i++) {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=twopart');
    const joke = response.data;
    const category = joke.category;

    categories[category] = (categories[category] || 0) + 1;
}

    return categories;
} catch (error) {
    console.error('Error:', error.message);
}
}
const numJokes = 10;

getJokeCategories(numJokes)
.then(jokeCategories => console.log(jokeCategories))
.catch(error => console.error('Error:', error.message));
