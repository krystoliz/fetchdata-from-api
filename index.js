fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .then(data => console.log(data.name))
    .then(data => console.log(data.weight))
    .then(data => console.log(data.id))
    .catch((error) => console.error('Error:', error));