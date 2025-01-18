const mainSection = document.querySelector('section');

// let newDiv = document.createElement('div');
let i = 1;
let j = 1;

while(i != 16){
    let divContainer = document.createElement('div');
    divContainer.classList.add('divContainer')
    while(j != 16){
        let divElement = document.createElement('div');
        divElement.classList.add('divStyle');
        divContainer.appendChild(divElement);
        j++;
    }
    mainSection.appendChild(divContainer);
    j = 1;
    i++;
}

console.log(i);