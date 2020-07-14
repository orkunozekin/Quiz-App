
const store = {

  questions: [
    {
      question: 'What is the capital of Turkey?',
      answers: [
        'Istanbul',
        'Ankara',
        'Izmir',
        'Adana'
      ],

      correctAnswer: 'Ankara',
      img: 'https://1.bp.blogspot.com/-jO4jN2yqMjg/XiRnKw9wR5I/AAAAAAAABAk/20dBiObtVhUIBD7xsSF71NJRpn_9YLXRQCLcBGAsYHQ/s1600/Turkey-Facts-Interesting-Facts-About-Turkey-Country-hot-air-ballons-turkey.png',
      alt: 'Turkey'
    },

    {
      question: 'What is the capital of the Dominican Republic?',
      answers: [
        'Santiago',
        'Punta Cana',
        'Santo Domingo',
        'Constanza'
      ],
      correctAnswer: 'Santo Domingo',
      img: 'https://www.godominicanrepublic.com/wp-content/uploads/2015/12/dsc01769.jpg',
      alt: 'the Dominican Republic'

    },
    {
      question: 'What is the capital of Poland?',
      answers: [
        'Warsaw',
        'Lublin',
        'Szczecin',
        'Gdańsk'
      ],
      correctAnswer: 'Warsaw',
      img: 'https://jobs.rbs.com/system/production/assets/176264/original/poland_lg.jpg',
      alt: 'Poland'
    },
    {
      question: 'What is the capital of India?',
      answers: [
        'Mumbai',
        'Bangalore',
        'New Delhi',
        'Hyderabad'
      ],
      correctAnswer: 'New Delhi',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg',
      alt: 'India'
    },
    {
      question: 'What is the capital of Brazil?',
      answers: [
        'São Paulo',
        'Rio de Janeiro',
        'Brasilia',
        'Fortaleza'
      ],
      correctAnswer: 'Brasilia',
      img: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/brazil-1200x720.jpg',
      alt: 'Brazil'
    },
    {
      question: 'What is the capital of Canada?',
      answers: [
        'Toronto',
        'Montreal',
        'Ottawa',
        'Quebec City'
      ],
      correctAnswer: 'Ottawa',
      img: 'https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Canada-Toronto_1388944829-1440x823.jpg',
      alt: 'Canada'
    },
    {
      question: 'What is the capital of the Bahamas?',
      answers: [
        'Freeport',
        'Nassau',
        'West End',
        'Alice Town'
      ],
      correctAnswer: 'Nassau',
      img: 'https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/dd/6c/49/bahamas-islands.jpg',
      alt: 'the Bahamas'
    },
    {
      question: 'What is the capital of Finland?',
      answers: [
        'Helsinki',
        'Jyväskylä',
        'Oulu',
        'Ventaa'
      ],
      correctAnswer: 'Helsinki',
      img: 'https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Finland-Lapland-185122878-sara_winter-copy.jpg',
      alt: 'Finland'
    },
    {
      question: 'What is the capital of Haiti?',
      answers: [
        'Cap-Haïtien',
        'Pétionville',
        'Jacmel',
        'Port-au-Prince'
      ],
      correctAnswer: 'Port-au-Prince',
      img: 'https://miro.medium.com/max/4000/0*i072wVa5v_ZdmrrL.jpg',
      alt: 'Haiti'
    },
    {
      question: 'What is the capital of Algeria?',
      answers: [
        'Oran',
        'Algiers',
        'Annaba',
        'Setif'
      ],
      correctAnswer: 'Algiers',
      img: 'https://www.usip.org/sites/default/files/styles/image_with_caption/public/2019-05/20190529-pexels-abdelfatah_cezayirli-ac.jpg?itok=h4ce2-Jh',
      alt: 'Algeria'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  questionAnsweredCorrectly: null
};



/********** TEMPLATE GENERATION FUNCTIONS **********/

function welcomePage() {
  return `
  <section class ="container welcome-screen">
  <h1>Welcome to World's Capitals</h1>
  <p class="world-emoji">&#127757;</p>
  <p>Demonstrate how familiar you are with the world!</p>
  <button class="play-now">
    <span>Play now!</span>
  </button>
</section>`
}


function questionPage() {
  let value = store.questions[store.questionNumber].answers
  return `
  <section class="container question-form">
<img src="${store.questions[store.questionNumber].img}" alt="${store.questions[store.questionNumber].alt}">
<p>Question ${store.questionNumber + 1} out of ${store.questions.length}</p>
<form class="answer-question" action="#">
    <p>${store.questions[store.questionNumber].question}</p>
    <input type="radio" id="a1" name="city" value="${value[0]}">
    <label for="a1">${value[0]}</label><br>
    <input type="radio" id="a2" name="city" value="${value[1]}">
    <label for="a2">${value[1]}</label><br>
    <input type="radio" id="a3" name="city" value="${value[2]}">
    <label for="a3">${value[2]}</label><br>
    <input type="radio" id="a4" name="city" value="${value[3]}">
    <label for="a4">${value[3]}</label>
    <button class="submit-question">
        <span>Submit</span>
    </button>
</form>
</section> `
}

function correctAnswerPage() {
  return `
  <section class="container correct-page">
    <h2>Great Job!</h2>
    <span style='font-size:70px;'>&#128512;</span>
    <div class="paragraph">
      <p>You have ${store.score} correct answers out of 10</p>
      <p>Question ${store.questionNumber} out of 10</p>
    </div>
    <button class="next">
      <span>Next</span>
    </button>
</section>`
}

function wrongAnswerPage() {
  return `
  <section class="container wrong-page">
    <h2>Oops! Wrong Answer </h2>
    <span style='font-size:70px;'>&#128528;</span>
    <div class="paragraph">
      <p>The correct answer is "${store.questions[store.questionNumber - 1].correctAnswer}"</p>
      <p>You have ${store.score} correct answers out of 10</p>
      <p>Question ${store.questionNumber} out of 10</p>
    </div>
    <button class="next">
      <span>Next</span>
    </button>
</section>`
}

function finishPage() {
  return `
  <section class="container finish-page">
    <h2>You have finished!</h2>
    <span style='font-size:70px;'>&#128079;</span>
    <p>You have ${store.score} correct answers out of 10 questions</p>
    <button class="reset">
      <span>Restart Quiz</span>
    </button>
  </section>`
}




// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/


function render() {


  if (store.questionNumber >= store.questions.length) {
    $('main').html(finishPage())
    return
  }

  if (store.quizStarted === false) {
    $('main').html(welcomePage())
    return
  }

  if (store.questionAnsweredCorrectly === null) {
    $('main').html(questionPage())
    return
  }

  if (store.questionAnsweredCorrectly === true) {
    $('main').html(correctAnswerPage())
  }

  else {
    $('main').html(wrongAnswerPage())
  }


}
// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStart() {
  // we want this function to listen for a click on -play-now button which is a child class of -welcome-screen. 
  $('main').on('click', '.play-now', function () {
    store.quizStarted = true;
    render()
  })
}


function handleNextQuestionPage() {
  // When a user submits an answer, if the answer is correct, take them to the correctAnswerPage, else, take them to the wrongAnswerPage
  // if answer is correct, call(renderCorrectAnswerPage()), +1 score & +1 question count(number)  
  // if answer is wrong, call(renderWrongAnswerPage()), +1 question count(number)
  $('main').on('submit', '.answer-question', event => {
    event.preventDefault();
    let answer = $('input[name="city"]:checked').val()
    //console.log(answer)
    let correct = store.questions[store.questionNumber].correctAnswer;
    if (answer === correct) {
      store.score += 1;
      store.questionNumber += 1;
      store.questionAnsweredCorrectly = true;
    }
    else {
      store.questionNumber += 1;
      store.questionAnsweredCorrectly = false;
    }
    render()
  })

}

function handleNextPage() {
  //when we click next, we want to render the page for next question.
  $('main').on('click', '.next', event => {
    //console.log('next-button clicked')
    store.questionAnsweredCorrectly = null;
    render()
  })
}

function handleRestart() {
  $('main').on('click', '.reset', event => {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    store.questionAnsweredCorrectly = null;

    render()
  })
}

function start() {
  render()
  handleStart()
  handleNextQuestionPage()
  handleNextPage()
  handleRestart()
}

$(start)





