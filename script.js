const mainSection = document.querySelector('section');


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
        divElement.addEventListener('mousemove', (event) => {
            let target = event.target;
    
            target.style.backgroundColor = 'grey';
            
        })
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