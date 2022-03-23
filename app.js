// import functions and grab DOM elements
import { getAllCharacters } from './fetch-utils.js';
// let state

const charsEl = document.querySelector('.characters');

window.addEventListener('load', async () => {
    const chars = await getAllCharacters();

    for (let char of chars) {
        const charEl = document.createElement('a');
        const nameEl = document.createElement('p');
        const AgeEl = document.createElement('p');
        const DescriptionEl = document.createElement('p');
        const AffiliationEl = document.createElement('ul');
        const AppearancesEl = document.createElement('ul');

        charEl.classList.add('char');
        charEl.href = `./MetalGearSolid/?id=${char.id}`; 
        nameEl.textContent = char.name;
        DescriptionEl.textContent = char.description;

        // for (let tag of tags) {
        //     const li = document.createElement('li');

        //     li.textContent = tag;
        //     AffiliationEl.appendChild(li);
        // }

        charEl.append(nameEl, AgeEl, DescriptionEl, AffiliationEl, AppearancesEl);
        charsEl.append(charEl);
    }
});