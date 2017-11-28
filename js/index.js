/* Disobedient Electronics: Undecided Voter Test
   ---------------------------------------------
    Designing Digital Play (DDP)
    Author: Vikram Kumar
    Version: 1.0
*/

/* TODO:
   1. Map points totals to actual poltical parties/candidates
   2. UPLOAD TO GITHUB!
*/

// An object (object literal) to represent the induvidual questions
// + an arry to hold all of the questions collectively for the quiz
//----------------------------------------
const myQuestions = [

  {
    question: "The municipality can save money without compromising welfare.",
    answerList: {
      //nested object literal for the party each answer choice leans towards
      a: ["Agree", 1],
      b: ["Disagree", 2],
      c: ["Neutral", 3],
    },
  },

  {
    question: "Copenhagen needs to invest in more bicycle lanes.",
    answerList: {
      //nested object literal for the party each answer choice leans towards
      a: ["Agree", 1],
      b: ["Disagree", 2],
      c: ["Neutral", 3],
    },
  },

  {
    question: "Copenhagen should take on more refugees.",
    answerList: {
      //nested object literal for the party each answer choice leans towards
      a: ["Agree", 1],
      b: ["Disagree", 2],
      c: ["Neutral", 3],
    },
  },

  {
    question: "Government institutions give too many considerations to religious minorities.",
    answerList: {
      //nested object literal for the party each answer choice leans towards
      a: ["Agree", 1],
      b: ["Disagree", 2],
      c: ["Neutral", 3],
    },
  },

  {
    question: "Libraries and cultural centers take up too much money.",
    answerList: {
      //nested object literal for the party each answer choice leans towards
      a: ["Agree", 1],
      b: ["Disagree", 2],
      c: ["Neutral", 3],
    },
  },

  {
    question: "Elderly people should have the option to pay for extra services at thier retirement homes.",
    answerList: {
      //nested object literal for the party each answer choice leans towards
      a: ["Agree", 1],
      b: ["Disagree", 2],
      c: ["Neutral", 3],
    },
  },

  {
    question: "Copenhagen can do more to sort waste and recycle.",
    answerList: {
      //nested object literal for the party each answer choice leans towards
      a: ["Agree", 1],
      b: ["Disagree", 2],
      c: ["Neutral", 3],
    },
  },

  {
    question: "The municipality should increase demands that unemployed citizens find work.",
    answerList: {
      //nested object literal for the party each answer choice leans towards
      a: ["Agree", 1],
      b: ["Disagree", 2],
      c: ["Neutral", 3],
    },
  },

  {
    question: "Only organic food should be served at public food programs.",
    answerList: {
      //nested object literal for the party each answer choice leans towards
      a: ["Agree", 1],
      b: ["Disagree", 2],
      c: ["Neutral", 3],
    },
  },

  {
    question: "The municipal tax should be lowered.",
    answerList: {
      //nested object literal for the party each answer choice leans towards
      a: ["Agree", 1],
      b: ["Disagree", 2],
      c: ["Neutral", 3],
    },
  }

];

// Creates and initializes the quiz
//----------------------------------------
function buildQuiz(){

  // Store the HTML output
  const output = [];

  // Loop to iterate through each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      // Store the list of answer choices
      const answers = [];
      // Iterate through each answer in a question
      for(letter in currentQuestion.answerList){
        // Add HTML radio buttons for each answer choice
        answers.push(
          `<label class="radio">
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${currentQuestion.answerList[letter][0]}
          </label>`
        );
      }

      // Add this question and its answers to the output
      output.push(
        `<div class="slide">
          <div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>
        </div>`
      );
    }
  );
  // Combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

// Show the results of the quiz
//----------------------------------------
function showResults(){

  // Gather the answer containers from the quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // Keep track of user's total points
  var totalPoints = 0;

  // Variables to check if/which questions were left blank 
  var blank = false;
  var track = 0;

  // Iterate through each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {
    // Find the selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // If answer is not valid, mark the question number
    if(userAnswer === undefined){
      blank = true;
      track = questionNumber + 1; 
    } else {
      totalPoints = totalPoints + currentQuestion.answerList[userAnswer][1];
    }
  });

  // demoTest.innerHTML = blank;

  // Throw an alert if a question was left blank
  if(blank === true) {
    createCustomAlert(`Answer Question ${track}`);
  } else {
    // Else show the total number of points
    window.localStorage.setItem("totalPoints", totalPoints);
    // pointsContainer.innerHTML = totalPoints;
    // pointsContainer.style.display = 'block';
    window.open('results.html', '_parent');
  }
}


// Displays each slide to create the pagination
//----------------------------------------
function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide===0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide===slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

// Processes the next button press
//----------------------------------------
function onNext() {
  if(isBlank()) {
    alert(`Answer Question ${currentSlide + 1}`);
  } else {
    // Else show the next slide
    showSlide(currentSlide + 1);
  }
}

// Processes the previous button press
//----------------------------------------
function onPrevious() {
  // Else show the previous slide
  // pointsContainer.style.display = 'none';
  showSlide(currentSlide - 1);
}

// Checks if the current question was left blank
//----------------------------------------
function isBlank() {
  // Gather the answer containers from the quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // Find the selected answer
  const answerContainer = answerContainers[currentSlide];
  const selector = 'input[name=question'+currentSlide+']:checked';
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  if(userAnswer === undefined) {
    return true;
  } else {
    return false;
  }
}

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

// Creates a custom browser alert
//----------------------------------------
function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    msg = alertObj.appendChild(d.createElement("p"));
    msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.onclick = function() { removeCustomAlert();return false; }

    alertObj.style.display = "block";

}
function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}

/*
 The "main" or "run" section of the code
 where we execute commands and receive 
 the HTML elements and store references to them
 ------------------------------------- */

var ALERT_TITLE = "ERROR";
var ALERT_BUTTON_TEXT = "OK";

const quizContainer = document.getElementById('quiz');
// const pointsContainer = document.getElementById('points');
const submitButton = document.getElementById('submit');
// const demoTest = document.getElementById("demo");

// Display the quiz right away
buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the first slide
showSlide(0)

previousButton.addEventListener("click", onPrevious);
nextButton.addEventListener("click", onNext);
submitButton.addEventListener("click", showResults);