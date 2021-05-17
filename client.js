console.log('Here are all the available people:', people);

$(readyNow);

function readyNow() {
    displayImages();
    $('#profileImages').on('click', 'div', evaluateCorrectAnswer);
}

function displayImages(){
    console.log('shuffling...', shuffle(people));
    $('#profileImages').empty();
    for (let person of people){
        console.log(person);
        $('#profileImages').append(`
        <div data-name=${person.name}>
            <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
        </div>
        `)
    }
    promptUser();
}

// Fisher-Yates algorithm
function shuffle(array) {
    for (let i = 0; i < array.length; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let itemAtIndex = array[randomIndex];
        array[randomIndex] = array[i];
        array[i] = itemAtIndex;
    }
    return array;
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function promptUser(){
    let pictureSelector = randomNumber(0, people.length - 1);
    for (let person of people){
        if (pictureSelector === people.indexOf(person)){
            $('#userPrompt').append(`<p>${person.name}</p.`);
        } else {
            console.log('No matching value');
        }
    }
}

function evaluateCorrectAnswer(){
    let nameOfSelection = $(this).data('name');
    let correctAnswer = $('#userPrompt').children().text()
    if (nameOfSelection === correctAnswer){
        alert("You got it! Go again?")
        displayImages();
        $('#userPrompt').empty();
        promptUser();
    }
    else {
        alert("Not quite right, give it another shot.");
    }
}