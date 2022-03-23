export function renderCharCard(char) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('char-card');

    p.textContent = char.name;
    img.src = `./assets/${char.name}.JPG`;
    a.href = `./detail/?id=${char.id}`; 
    
    div.append(p, img);

    a.append(div);

    return a;
}

export function renderCharDetail(char) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const AffiliationEl = document.createElement('ul');
    const AppearancesEl = document.createElement('ul');
    const AffiliationAndAppearancesEl = document.createElement('div');

    div.classList.add('char-detail');

    nameEl.textContent = char.name;
    nameEl.classList.add('name');

    descriptionEl.textContent = char.description;
    descriptionEl.classList.add('description');

    ageEl.textContent = `${char.age} years old`;    
    ageEl.classList.add('age');

    // breedEl.textContent = dog.breed;
    // breedEl.classList.add('breed');

    AffiliationAndAppearancesEl.classList.add('Affiliations-And-Appearances');

    AffiliationAndAppearancesEl.append(AffiliationEl, AppearancesEl);

    img.src = `../assets/${char.name}.JPG`;
    
    div.append(nameEl, img, descriptionEl, AffiliationAndAppearancesEl);

    return div;

}