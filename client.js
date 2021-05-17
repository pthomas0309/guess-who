console.log('Here are all the available people:', people);

$(document).ready(readyNow)

function readyNow() {
    for (let person of people){
        console.log(person);
        $('body').append(`
        <div>
            <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
        </div>
        `)
    }
}