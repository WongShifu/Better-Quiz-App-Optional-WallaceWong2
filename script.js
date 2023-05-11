const quiz = [
  {
    quiz: "What is the capital of Australia?",
    correctAnswer: "Canberra",
  },
  {
    quiz: "What is the largest mammal?",
    correctAnswer: "Blue Whale",
  },
  {
    quiz: "How many hours per day?",
    correctAnswer: "24 hours",
  },
];

let quizIndex = 0;
let score = 0;

function displayQuiz() {
  const currentQuiz = quiz[quizIndex];
  let quizHTML = `<h2>${currentQuiz.quiz}</h2>`;
  document.getElementById("quizLibrary").innerHTML = quizHTML;
}

function nextQuiz() {
  const selectedAnswer = document.getElementById("inputAnswer").value;

  if (!selectedAnswer) {
    alert("Please enter an answer.");
    return;
  }

  if (
    selectedAnswer.trim().toLowerCase() ===
    quiz[quizIndex].correctAnswer.toLowerCase()
  ) {
    score++;
  }

  quizIndex++;

  if (quizIndex < quiz.length) {
    displayQuiz();
    document.getElementById("inputAnswer").value = "";
  } else {
    document.getElementById("result").innerHTML = `Your score is ${score}/${quiz.length}`;
    document.getElementById("nextButton").style.display = "none";
  }
}

displayQuiz();