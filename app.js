// import functions and grab DOM elements
import { getAllCharacters } from './fetch-utils.js';
import { renderCharCard } from './render-utils.js';

const charContainer = document.getElementById('character-list-container');

window.addEventListener('load', async () => {
    const chars = await getAllCharacters();

    for (let char of chars) {
        const charEl = renderCharCard(char);
        charContainer.append(charEl);
    }

});