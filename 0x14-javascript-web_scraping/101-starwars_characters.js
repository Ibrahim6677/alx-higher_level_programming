#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const movie = JSON.parse(body);
  const characterUrls = movie.characters;

  const fetchCharacter = (url) => {
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (error) {
          reject(error);
          return;
        }
        const character = JSON.parse(body);
        resolve(character.name);
      });
    });
  };

  const fetchAllCharacters = async () => {
    const characterNames = [];
    for (const url of characterUrls) {
      try {
        const name = await fetchCharacter(url);
        characterNames.push(name);
      } catch (err) {
        console.error(err);
      }
    }
    return characterNames;
  };

  fetchAllCharacters()
    .then(names => {
      names.forEach(name => console.log(name));
    })
    .catch(err => console.error(err));
});
