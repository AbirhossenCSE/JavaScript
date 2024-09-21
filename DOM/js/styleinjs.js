const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    // console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.marginLeft = '7px';
    section.style.backgroundColor = 'lightgray';
    
}

const placeContainer = document.getElementById('places-container');
placeContainer.style.backgroundColor = 'yellow';
placeContainer.classList.remove('text-size')
placeContainer.classList.add('text-center')

