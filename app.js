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

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)