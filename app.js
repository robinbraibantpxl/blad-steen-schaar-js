// Maak een variabele voor het element van de computerkeuze in bij te houden en haal het element voor de computerkeuze op uit de HTML
const computerChoiceElement = document.getElementById('computer-choice');

// Maak een variabele voor het element van de spelerskeuze in bij te houden en haal het element voor de spelerskeuze op uit de HTML
const playerChoiceElement = document.getElementById('player-choice');

// Maak een variabele voor het element van de bladkeuze in bij te houden en haal het element op uit de HTML
const paperElement = document.getElementById('blad');

// Maak een variabele voor het element van de steenkeuze in bij te houden en haal het element op uit de HTML
const rockElement = document.getElementById('steen');

// Maak een variabele voor het element van de bladkeuze in bij te houden en haal het element op uit de HTML
const scissorsElement = document.getElementById('schaar');

// Maak een variabele voor het element van het resultaat in bij te houden en haal het element om het resultaat te tonen op uit de HTML
const resultElement = document.getElementById('result');

// Maak een variabele om de keuze van de gebruiker in bij te houden
let playerChoice;

// Maak een variabele om de keuze van de computer in bij te houden
let computerChoice;

// Maak een variabele om het resultaat in bij te houden
let result;

// Schrijf de logica om ervoor te zorgen dat wanner er op een keuze (knop) wordt geklikt:
// - De keuze van de gebruiker in de juiste variabele wordt gestoken
// - De keuze van de gebruiker op het scherm wordt getoond in het juiste element
// - De keuze van de computer willekeurig wordt gegenereerd
// - Het juiste resultaat wordt getoond op het scherm
paperElement.addEventListener('click', (event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.id);

    playerChoice = event.target.id;
    playerChoiceElement.innerText = playerChoice;

    // console.log(Math.random());
    // console.log(Math.random() * 3);
    // console.log(Math.floor(Math.random() * 3));
    // console.log(Math.floor(Math.random() * 3) + 1);

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'blad';
    }
    if (randomNumber === 2) {
        computerChoice = 'steen';
    }
    if (randomNumber === 3) {
        computerChoice = 'schaar';
    }

    computerChoiceElement.innerText = computerChoice;

    //playerChoice is altijd 'blad'
    if (computerChoice === playerChoice) {
        result = 'Gelijke stand...';
    }

    if (computerChoice === 'steen') {
        result = 'Gewonnen!!';
    }

    if (computerChoice === 'schaar') {
        result = '... verloren';
    }

    resultElement.innerText = result;
});

rockElement.addEventListener('click', (event) => {
    playerChoice = event.target.id;
    playerChoiceElement.innerText = playerChoice;

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'blad';
    }
    if (randomNumber === 2) {
        computerChoice = 'steen';
    }
    if (randomNumber === 3) {
        computerChoice = 'schaar';
    }

    computerChoiceElement.innerText = computerChoice;

    //playerChoice is altijd 'steen'
    if (computerChoice === playerChoice) {
        result = 'Gelijke stand...';
    }

    if (computerChoice === 'schaar') {
        result = 'Gewonnen!!';
    }

    if (computerChoice === 'blad') {
        result = '... verloren';
    }

    resultElement.innerText = result;
});

scissorsElement.addEventListener('click', (event) => {
    playerChoice = event.target.id;
    playerChoiceElement.innerText = playerChoice;

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'blad';
    }
    if (randomNumber === 2) {
        computerChoice = 'steen';
    }
    if (randomNumber === 3) {
        computerChoice = 'schaar';
    }

    computerChoiceElement.innerText = computerChoice;

    //playerChoice is altijd 'schaar'
    if (computerChoice === playerChoice) {
        result = 'Gelijke stand...';
    }

    if (computerChoice === 'blad') {
        result = 'Gewonnen!!'
    }

    if (computerChoice === 'steen') {
        result = '... verloren'
    }

    resultElement.innerText = result;
})



