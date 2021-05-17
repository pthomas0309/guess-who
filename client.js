console.log('Here are all the available people:', people);

$(document).ready(readyNow)

function readyNow() {
    for (let person of people){
        console.log(person);
        $('#profileImages').append(`
        <div data-name=${person.name}>
            <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
        </div>
        `)
    }
    promptUser()
    $('#profileImages').on('click', 'div', evaluateCorrectAnswer)
}

function promptUser(){
    let pictureSelector = randomNumber(0, people.length - 1)
    function randomNumber(min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
    for (let person of people){
        if (pictureSelector === people.indexOf(person)){
            $('#userPrompt').append(`<p>${person.name}</p.`)
        } else {
            console.log('No matching value');
        }
    }
}

function evaluateCorrectAnswer(){
    console.log(`picking...${$(this).data('name')}`)
}