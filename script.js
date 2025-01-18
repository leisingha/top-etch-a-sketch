const mainSection = document.querySelector('section');

function addDefaultColour(event){
    event.target.style.backgroundColor = 'grey';
}

function addRainbowColour(event){
    event.target.style.backgroundColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
}

function addDarkerColour(alpha){
    return function (event){
                    alpha += 0.1;
                    event.target.style.backgroundColor = `rgba(128, 128, 128, ${alpha})`;
                    }
}



function generateBoard(num){
    let i = 1;
    let j = 1;
    while(i != num){
        let divContainer = document.createElement('div');
        divContainer.classList.add('divContainer')
        while(j != num){
            let divElement = document.createElement('div');
            divElement.classList.add('divElement');
            divContainer.appendChild(divElement);
            j++;
        }
        mainSection.appendChild(divContainer);
        j = 1;
        i++;
    }
    let divElements = document.querySelectorAll('.divElement');
    
    divElements.forEach((divElement) => {
        divElement.addEventListener('mouseover', addDefaultColour);
    })
}

generateBoard(16);

function resetBoard(num){
    let divElements = document.querySelectorAll('.divElement');

    let divContainers = document.querySelectorAll('.divContainer')

    divElements.forEach((divElement) =>{
        divElement.remove();
    })

    divContainers.forEach((divContainer) => {
        divContainer.remove();
    })

    generateBoard(num);
}



function isValidResponse(response){
    let intResponse = parseInt(response);
    return (Number.isInteger(intResponse) && intResponse > 0 && intResponse <= 100);
}

const bttnSize = document.querySelector('#bttnSize');
bttnSize.addEventListener('click', () =>{
    let response;

    do{
        response = prompt('What size do you want the grid to be? (1-100)');
    }while(!isValidResponse(response));

    let intResponse = parseInt(response);

    resetBoard(intResponse);

} )


const bttnRainbow = document.querySelector('#bttnRainbow');
bttnRainbow.addEventListener('click', enableRainbow);

const bttnShader = document.querySelector('#bttnShader');
bttnShader.addEventListener('click', enableDarkShader);

function getRandomInt(num){
    return Math.round(Math.random() * num);
}

function enableRainbow(){
    let divElements = document.querySelectorAll('.divElement');
    
    divElements.forEach((divElement) => {
        divElement.removeEventListener('hover',addDefaultColour);
        divElement.removeEventListener('mouseenter', addRainbowColour);
    })

    divElements.forEach((divElement) => {
        divElement.addEventListener('mouseenter', addRainbowColour);
    })
}

function enableDarkShader(){
    let divElements = document.querySelectorAll('.divElement');

    
    divElements.forEach((divElement) => {
        divElement.removeEventListener('mouseenter', addRainbowColour);
        divElement.removeEventListener('hover', addDefaultColour);
    })

    divElements.forEach((divElement) => {
        divElement.style.backgroundColor = 'rgba(128,128,128,0)';
        divElement.addEventListener('mouseenter', addDarkerColour(0.1));
    })
}

