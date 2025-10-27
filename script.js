document.addEventListener('DOMContentLoaded', () => {


    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = documnet.getElementById("score");


   const question =  [
      {
        question: "What does JSON stand for?",
        options: {
          A: "JavaScript Object Notation",
          B: "Java Object Notation",
          C: "JavaScript Object Normalization",
          D: "JavaScript Object-Oriented Notation",
        },
        answer: "A",
        explanation: "JSON stands for JavaScript Object Notation.",
      },
      {
        question: "In JSON syntax, an array is enclosed in what?",
        options: {
          A: "Square brackets `[]`",
          B: "Curly braces `{}`",
          C: "Parentheses `()`",
          D: "Angle brackets `<>`",
        },
        answer: "A",
        explanation:
          "An array in JSON is always written within square brackets.",
      },
      {
        question:
          "Which character is used to separate key-value pairs in a JSON object?",
        options: {
          A: "Colon `:`",
          B: "Comma `,`",
          C: "Semicolon `;`",
          D: "Equals sign `=`",
        },
        answer: "B",
        explanation:
          "Key-value pairs within a JSON object are separated by commas.",
      },
      {
        question:
          "What is the correct way to escape a double quote inside a JSON string?",
        options: {
          A: "Use a single quote `'`",
          B: "Use the HTML entity `&quot;`",
          C: 'Precede it with a backslash `\\"`',
          D: "Do not use double quotes inside a JSON string",
        },
        answer: "C",
        explanation:
          "To include a double quote within a JSON string, you must escape it with a backslash.",
      },
      {
        question: "Which of the following is a valid JSON data type?",
        options: {
          A: "Function",
          B: "Object",
          C: "Integer",
          D: "Boolean",
        },
        answer: "B",
        explanation:
          "Valid JSON data types include String, Number, Object, Array, Boolean, and Null.",
      },
    ];


    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener('click', startQuiz)

    function startQuiz(){
        startBtn.classList.add('hidden')
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')

        function showQuestion(){
            nextBtn.classList.add('hidden')
            questionText.textContent = question[currentQuestionIndex].question;
        }
    }
})