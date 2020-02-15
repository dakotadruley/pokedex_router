import request from 'superagent';

export const getPoke = (pokeId) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${pokeId}`)

// have to pass pokeId at the end of pokemon

// push top save the pokeId in match params (historu.push something)
// 30 Home.js 