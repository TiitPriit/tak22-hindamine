const heading = document.getElementsByTagName('h1')[0];
const catsContainer = document.getElementById('container');

heading.innerText = 'Oskar ja kassid';

fetch('https://catfact.ninja/breeds?limit=100')
.then(res => res.json())
.then(cats => {

    cats.data.forEach( cat => {

        const catDiv = document.createElement('div');

        catDiv.classList.add('cat');

        catDiv.innerHTML = `
            <div>${cat.country}</div>
            <div>${cat.breed}</div>
        `;

        catsContainer.append(catDiv);
       
    });
});