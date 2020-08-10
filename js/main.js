// I need to create a board layout 5 X 6
// each money box needs to have an event clicker
// the board needs to have category specific API jeopardy questions attached to each indiviual category and its cards
// the game needs to be able to keep score
// the game needs to generate multiple choice questions per card
// the game needs to be able to subtract points from the player if theier answers are false
// if the player wins or loses the board needs to stop being clickable
// the reset button nets to initialize a game reset
// the game needs to be able to 
// I would like to randomize the board with new questions and categories but it seems to complicated becasue i would ahve to come up with all the multiple choice answers



// Write Objectives
// Write User Stories

// Questions:
// Who killed Martha and Thomas Wayne? T: Joe Chill F;

/*------Constants------*/

/*------Variables (state)------*/
let currentQuestionsIndex, sortQuestions;
let wrongAnswer = 0; 


/*------Cached Element References------*/
const contentElement = document.getElementById('questionContent')
const questionElement = document.getElementById('questions')
const gameStatus = document.getElementById('mainMessage')
const answersElement = document.getElementById('answerButtons')
const startContent = document.getElementById('startMessage')
const startBtn = document.getElementById('startButton')
const nxtBtn = document.getElementById('nextButton')
const resetBtn = document.getElementById('resetButton')
const thirdlife = document.getElementById('threeLives')
const secondLife = document.getElementById('twoLives')
const lastLife = document.getElementById('oneLife')
const fatality = document.getElementById('noLives')
const endGame = document.getElementById('loser')




/*------Event Listeners------*/

// document.querySelector('section.div').addEventListener('click', onClick);
startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', init)
nxtBtn.addEventListener('click', ()=> {
    currentQuestionsIndex++;
    setNextQuestion();
});
/*------Functions------*/
init();

function init(){
resetStatus(document.body);
nxtBtn.classList.add('hide')

while (answersElement.firstChild){
    answersElement.removeChild(answersElement.firstChild)
    }
    startGame();
}

function startGame(){
startBtn.classList.add('hide');
startContent.classList.add('hide');
sortQuestions = questions.sort(()=> questions.length)
currentQuestionsIndex = 0;
wrongAnswer = 0;
contentElement.classList.remove('hide');
setNextQuestion();
getWinner.classList.add('hide');
endGame.classList.add('hide');
thirdlife.classList.remove('hide');
secondLife.classList.add('hide')
lastLife.classList.add('hide')
fatality.classList.remove('hide')
}

function setNextQuestion(){
    init();
    displayQuestion(sortQuestions[currentQuestionsIndex])
}

function displayQuestion(question){
questionElement.innerText = question.question;
question.answers.forEach((answer)=> {
    const button = documnet.createElement('button')
    button.innerText =answer.text;
    button.classList.add('button');
    if (answer.correct){
        button.dataset.correct = answer.correct;   
        }
        button.addEventListener('click', getWinner);
        answersElement.appendChild(button);
    });
}

function getWinner(e){
const buttonChose = e.target;
const correct = buttonChose.dataset.correct;
if (correct) {
    // render sarcastic Riddler quote
    }   else {
        wrongAnswer++;
        // render arrogant Riddler quote
        displayLives();
    }
    setStatusClass(document.body, correct);
    Array.from(answersElement.children).forEach((button)=> {
        setStatusClass(button, button.dataset.correct);
    });
    if (sortQuestions.length > currentQuestionsIndex + 1){
        if(wrongAnswer != 3) nxtBtn.classList.remove('hide');
    } else {
        resetBtn.classList.remove('hide');
        // add if statement to declare winner
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if (correct){
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
        // i can add an effect
    }
}

function clearStatusClass(element){
element.classList.remove('corect');
element.classList.remove('wrong');
//element.classList.remove('effect')
}

function displayLives(){
    if (wrongAnswer === 0) {
        lastLife.classList.add('hide');
        secondLife.classList.add('hide');
    }
    if (wrongAnswer === 1) {
        lastLife.classList.add('hide');
        secondLife.classList.remove('hide');
        thirdlife.classList.add('hide');
        // add set timeout
    }
    if (wrongAnswer === 2) {
        lastLife.classList.remove('hide');
        secondLife.classList.add('hide');
        thirdlife.classList.add('hide');
        // add set timerout
    }
    if (wrongAnswer === 3) {
        nxtBtn.classList.add('hide');
        lastLife.classList.add('hide');
        fatality.classList.remove('hide')
        resetBtn.classList.remove('hide')
        // add music
        fatality.classList.remove('hide')
        // add pause to music
    }
}

 const questions = [
     {
         question: "My civilian name is Barry Allen. I'm a police scientist. My alter ego only has one power, but what DC writers and artists did with that one power was something to behold. Despite my power, I was usually late for appointments in my civilian identity. Who am I?",
         // add 'quip' key and insert quotes,
         // quip: "I start you off with a softball"
         answers: [
             {
                 text: "The Atom",
                 correct: false,
             },
             {
                 text: "The Flash",
                 correct: true,
             },
             {
                 text: "Hawkman",
                 correct: false,
             },
             {
                 text: "Zoom",
                 correct: false,
             },
         ],
     },
     {
         question: `What did Superman use to open the door of his "Fortress of Solitude"?`,
         // add quip,
        answers: [
            {
                text: `His super whistle`,
                correct: false,
            },
            {
                text: `Voice Activation`,
                correct: false,
            },
            {
                text: `Kryptonite`,
                correct: false,
            },
            {
                text: `A huge, yellow, arrow shaped key`,
                correct: true,
            },
        ],
     },
     {
         question: `What's missing here? "In brightest day, in blackest night, no evil can escape my sight! Let those who worship evil's might, beware my power, ______!"`,
         // add quip,
         answers: [
             {
                 text: `The Power of Night!`,
                 correct: false,
             },
             {
                 text: `My Grandma's Rice!`,
                 corect: false,
             },
             {
                 text: `Black Lantern's Blight`,
                 correct: false,
             },
             {
                 text: `Green Lantern's Light`,
                 correct: true,
             },
         ],
     },
     {
         question: `What was the name of Green Arrow's sidekick during his "Batman"-like days?`,
         // add quip,
         answers: [
             {
                 text: `Speedy`,
                 correct: true,
             },
             {
                 text: `Arrow Lad`,
                 correct: false,
             },
             {
                 text: `Lance`,
                 correct: false,
             },
             {
                 text: `Lil'Arrow`,
                 correct: false,
             },
         ],
     },
     {
         question: `How did the Flash travel through time?`,
         // add quip,
         answers: [
             {
                 text: `His "Cosmic Treadmill"`,
                 correct: true,
             },
             {
                 text: `He ran counter to the rotation of the Earth really really fast`,
                 correct: false,
             },
             {
                 text: `He used his time machine`,
                 correct: false,
             },
             {
                 text: `He clicked his heels together three times and wished himself there`,
                 correct: false,
             },
         ],
     },
     {
         question: `Who paralyzed Barbara Gordon(aka BatGirl)`,
         // add quip,
         answers: [
             {
                 text: `ManBat`,
                 correct: false,
             },
             {
                 text: `Two-Face`,
                 correct: false,
             },
             {
                 text: `Harley-Quinn`,
                 correct: false,
             },
             {
                 text: `The Joker`,
                 correct: true,
             },
         ],
     },
     {
         question: `Who killed Superman?`,
         // add quip,
         answers: [
             {
                 text: `Doomsday`,
                 correct: true,
             },
             {
                 text: `Lex Luther`,
                 correct: false,
             },
             {
                 text: `Darkseid`,
                 correct: false,
             },
             {
                 text: `Louis Lane`,
                 correct: false,
             },
         ],
     },
     {
         question: `Which Hero lost their father in a plane crash at an early age?`,
         // add quip,
         answers: [
             {
                 text: `Superman`,
                 correct: false,
             },
             {
                 text: `Synestro`,
                 correct: false,
             },
             {
                 text: `Green Lantern`,
                 correct: true,
             },
             {
                 text: `Wonder Woman`,
                 correct: false,
             },
         ],
     },
     {
         question: `What is Wonder Womans's Best interrogation tool?`,
         //add quip,
         answers: [
             {
                 text: `Her fists`,
                 correct: false,
             },
             {
                 text: `Her charm`,
                 correct: false,
             },
             {
                 text: `Her Lasso of truth`,
                 correct: true,
             },
             {
                 text: `She doesn't have any`,
                 correct: false,
             },
         ],
     },
     {
         question: `Other than Kryptonite, What is Superman weak too?`,
         // add quip,
         answers: [
             {
                 text: `Magic`,
                 correct: true,
             },
             {
                 text: `The Sun`,
                 correct: false,
             },
             {
                 text: `Louis Lane`,
                 correct: `false`,
             },
             {
                 text: `None of the above`,
                 corect: false,
             },
         ],
     },
     {
         question: ``,
     },
 ]
