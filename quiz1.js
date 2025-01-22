const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    correctAnswer: "Blue Whale"
  },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const questionObj = questions[currentQuestionIndex];
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");

  questionElement.textContent = questionObj.question;

  // Clear previous options
  optionsContainer.innerHTML = '';

  // Create option buttons
  questionObj.options.forEach(option => {
    const optionBtn = document.createElement("button");
    optionBtn.textContent = option;
    optionBtn.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(optionBtn);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  if (selectedOption === correctAnswer) {
    score++;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
  document.getElementById("submit-btn").style.display = 'none';
}

// Initial call to display the first question
displayQuestion();

document.getElementById("submit-btn").addEventListener("click", showScore);

