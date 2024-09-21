// where to add
const placesList = document.getElementById('places-list');

// what to added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// add the child
placesList.appendChild(li)


// where to add
const mainContainer = document.getElementById('main-container')

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

// Create list
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'biriani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Rost';
ul.appendChild(li3);

section.appendChild(ul)
mainContainer.appendChild(section);



// set innerHtml directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress collection</h1>
<ul>
    <li>Shirt</li>
    <li>pant</li>
    <li>T-shirt</li>
</ul>
`
mainContainer.appendChild(sectionDress);