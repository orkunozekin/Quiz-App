/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What was John Mayer’s debut album?',
      answers: [
        'Continuum',
        'Room for Squares',
        'Battle Studies',
        'The Search for Everything'
      ],
      correctAnswer: 'Room for Squares'
    },
    {
      question: 'Who is the lead vocalist for Dave Matthews Band?', 
      answers: [
        'Paul McCartney',
        'Billy Joel',
        'Christina Aguilera',
        'Dave Matthews'
      ],
      correctAnswer: 'Dave Matthews'
    },
    {
      question: 'Who wrote “I Will Always Love you?',
      answers: [
        'Whitney Houston',
        'Dolly Parton',
        'Aretha Franklin',
        'Carole King'
      ],
      correctAnswer: 'Dolly Parton'
    },
    {
      question: 'Which male artist has the most amount of Grammys?',
      answers: [
        'Georg Solti',
        'Quincy Jones',
        'Alison Krauss',
        'Pierre Boulez'
      ],
      correctAnswer: 'Georg Solti'
    },
    {
      question: 'What band was Beyonce in before she went solo?',
      answers: [
        'TLC',
        '3LW',
        'Destiny’s Child',
        'Spice Girls'
      ],
      correctAnswer: 'Destiny’s Child'
    
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

function welcomePage() {
  return`
  <section class ="container">
  <h1>Music Knowledge Test</h1>
  <p>Prove your music knowledge skills!</p>
  <button>
    <span>Play now!</span>
  </button>
</section>`
}


function questionPage() {
  let value = store.questions[store.questionNumber].answers
  return `
  <section class="container">
<p>Question ${store.questionNumber + 1} out of ${store.questions.length}</p>
<form class="answer-question" action="#">
    <p>${store.questions[store.questionNumber].question}</p>
    <input type="radio" id="a1" name="album" value="${value[0]}">
    <label for="a1">${value[0]}</label><br>
    <input type="radio" id="a2" name="album" value="${value[1]}">
    <label for="a2">${value[1]}</label><br>
    <input type="radio" id="a3" name="album" value="${value[2]}">
    <label for="a3">${value[2]}</label><br>
    <input type="radio" id="a4" name="album" value="${value[3]}">
    <label for="a4">${value[3]}</label>
    <button class="submit-question">
        <span>Submit</span>
    </button>
</form>
</section> `
}

function 

console.log(store.questions[store.questionNumber].question)


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

function welcomePage() {
  return`
  <section class ="container">
  <h1>Music Knowledge Test</h1>
  <p>Prove your music knowledge skills!</p>
  <button>
    <span>Play now!</span>
  </button>
</section>`
}


function questionPage() {
  let value = store.questions[store.questionNumber].answers
  return `
  <section class="container">
<p>Question ${store.questionNumber + 1} out of ${store.questions.length}</p>
<form class="answer-question" action="#">
    <p>${store.questions[store.questionNumber].question}</p>
    <input type="radio" id="a1" name="album" value="${value[0]}">
    <label for="a1">${value[0]}</label><br>
    <input type="radio" id="a2" name="album" value="${value[1]}">
    <label for="a2">${value[1]}</label><br>
    <input type="radio" id="a3" name="album" value="${value[2]}">
    <label for="a3">${value[2]}</label><br>
    <input type="radio" id="a4" name="album" value="${value[3]}">
    <label for="a4">${value[3]}</label>
    <button class="submit-question">
        <span>Submit</span>
    </button>
</form>
</section> `
}





// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/
function renderWelcomePage() {
  return welcomePage()
}

function renderQuestionPage() {
  return questionPage()
}

function renderCorrectPage
// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)