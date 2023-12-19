"use strict";
const apiPiadas = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious';
// Make a GET request
fetch(apiPiadas)
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
    .then(data => {
    console.log(data);
})
    .catch(error => {
    console.error('Error:', error);
});
