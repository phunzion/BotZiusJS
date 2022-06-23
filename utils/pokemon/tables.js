

const pokemon = {
    types: ['steel', 'water', 'bug', 'dragon', 'electric', 'ghost', 'fire', 'fairy', 'ice',
        'fighting', 'normal', 'grass', 'psychic', 'rock', 'dark', 'ground', 'poison', 'flying'],

    values: [[0.5, 0.5, 1.0, 1.0, 0.5, 1.0, 0.5, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0],
    [1.0, 0.5, 1.0, 0.5, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0],
    [0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 0.5, 0.5],
    [0.5, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    [1.0, 2.0, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.0, 1.0, 2.0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0],
    [2.0, 0.5, 2.0, 0.5, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0],
    [0.5, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 0.5, 1.0],
    [0.5, 0.5, 1.0, 2.0, 1.0, 1.0, 0.5, 1.0, 0.5, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 2.0, 1.0, 2.0],
    [2.0, 1.0, 0.5, 1.0, 1.0, 0.0, 1.0, 0.5, 2.0, 1.0, 2.0, 1.0, 0.5, 2.0, 2.0, 1.0, 0.5, 0.5],
    [0.5, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0],
    [0.5, 2.0, 0.5, 0.5, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 2.0, 0.5, 0.5],
    [0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 1.0, 0.0, 1.0, 2.0, 1.0],
    [0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 2.0, 1.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 2.0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 0.5, 1.0, 0.5, 1.0, 1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0],
    [2.0, 1.0, 0.5, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 2.0, 0.0],
    [0.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 2.0, 1.0, 0.5, 1.0, 0.5, 0.5, 1.0],
    [0.5, 1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0]]
}
const temtem = {
    types: ['neutral', 'fuego', 'agua', 'naturaleza', 'electrico', 'tierra',
        'mental', 'viento', 'digital', 'melee', 'cristal', 'toxico'],

    values: [[1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0],
    [1.0, 0.5, 0.5, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0],
    [1.0, 2.0, 0.5, 0.5, 1.0, 2.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5],
    [1.0, 0.5, 2.0, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5],
    [1.0, 1.0, 2.0, 0.5, 0.5, 0.5, 2.0, 2.0, 2.0, 1.0, 0.5, 1.0],
    [1.0, 2.0, 0.5, 0.5, 2.0, 1.0, 1.0, 0.5, 1.0, 1.0, 2.0, 1.0],
    [2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 1.0],
    [1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 2.0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 2.0, 2.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0, 0.5, 2.0, 1.0],
    [1.0, 0.5, 1.0, 1.0, 2.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 2.0, 2.0, 1.0, 0.5, 1.0, 1.0, 0.5, 1.0, 0.5, 0.5]]
}

module.exports = { pokemon, temtem };