import { getCharacter } from '../fetch-utils.js';
import { renderCharDetail } from './render-utils.js';

const charDetailEl = document.querySelector('.character-detail-container');

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');

    const char = await getCharacter(id);
    const charEl = renderCharDetail(char);

    charDetailEl.append(charEl);
});