document.addEventListener('DOMContentLoaded', () => {


    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");


   // Use a choices array and numeric answer index — easier to render and maintain.
   const questions =  [
      {
        question: "What does JSON stand for?",
        choices: [
          "JavaScript Object Notation",
          "Java Object Notation",
          "JavaScript Object Normalization",
          "JavaScript Object-Oriented Notation",
        ],
        answer: 0, // index of correct choice
        explanation: "JSON stands for JavaScript Object Notation.",
      },
      {
        question: "In JSON syntax, an array is enclosed in what?",
        choices: [
          "Square brackets []",
          "Curly braces {}",
          "Parentheses ()",
          "Angle brackets <>",
        ],
        answer: 0,
        explanation: "An array in JSON is always written within square brackets.",
      },
      {
        question: "Which character is used to separate key-value pairs in a JSON object?",
        choices: [
          "Colon :",
          "Comma ,",
          "Semicolon ;",
          "Equals sign =",
        ],
        answer: 1,
        explanation: "Key-value pairs within a JSON object are separated by commas.",
      },
      {
        question: "What is the correct way to escape a double quote inside a JSON string?",
        choices: [
          "Use a single quote '\'' ,",
          "Use the HTML entity &quot;",
          'Precede it with a backslash \\\"',
          "Do not use double quotes inside a JSON string",
        ],
        answer: 2,
        explanation: "To include a double quote within a JSON string, you must escape it with a backslash.",
      },
      {
        question: "Which of the following is a valid JSON data type?",
        choices: [
          "Function",
          "Object",
          "Integer",
          "Boolean",
        ],
        answer: 1,
        explanation: "Valid JSON data types include String, Number, Object, Array, Boolean, and Null.",
      },
    ];


    let currentQuestionIndex = 0;
    let score = 0;

  // Wire buttons
  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  });

  restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    startQuiz();
  });

  function startQuiz(){
    // reset and show first
    score = 0;
    currentQuestionIndex = 0;
    startBtn.classList.add('hidden');
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    showQuestion();
  }

  function showQuestion(){
    nextBtn.classList.add('hidden');
    // clear previous choices and any explanation
    choicesList.innerHTML = '';
    const prevExplanation = questionContainer.querySelector('.explanation');
    if (prevExplanation) prevExplanation.remove();

    const q = questions[currentQuestionIndex];
    questionText.textContent = q.question;

    q.choices.forEach((choiceText, idx) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.index = idx;
      btn.textContent = choiceText;
      btn.addEventListener('click', (e) => selectAnswer(e, q));
      li.appendChild(btn);
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(e, q){
    const clicked = e.currentTarget;
    const chosenIndex = Number(clicked.dataset.index);

    const allBtns = choicesList.querySelectorAll('button');
    allBtns.forEach(b => {
      b.disabled = true;
      b.classList.add('disabled');
    });

    if (chosenIndex === q.answer){
      clicked.classList.add('correct');
      score++;
    } else {
      clicked.classList.add('incorrect');
      const correctBtn = Array.from(allBtns).find(b => Number(b.dataset.index) === q.answer);
      if (correctBtn) correctBtn.classList.add('correct');
    }

    // show explanation if available
    if (q.explanation){
      const p = document.createElement('p');
      p.className = 'explanation muted';
      p.textContent = q.explanation;
      choicesList.insertAdjacentElement('afterend', p);
    }

    // show next button
    nextBtn.classList.remove('hidden');
  }

  function showResults(){
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreDisplay.textContent = `${score} / ${questions.length}`;
    nextBtn.classList.add('hidden');
  }
});