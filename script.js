const mainSection = document.querySelector('section');

let i = 1;
let j = 1;

while(i != 16){
    let divContainer = document.createElement('div');
    divContainer.classList.add('divContainer')
    while(j != 16){
        let divElement = document.createElement('div');
        divElement.classList.add('divElement');
        divContainer.appendChild(divElement);
        j++;
    }
    mainSection.appendChild(divContainer);
    j = 1;
    i++;
}


const divElements = document.querySelectorAll('.divElement');

divElements.forEach((divElement) => {
    divElement.addEventListener('mousemove', (event) => {
        let target = event.target;

        target.style.backgroundColor = 'black';
        
    })
})
