
var questionSection = document.querySelector(".question");

questionSection.addEventListener("click", clickHandler);

function clickHandler(event) {
  if (event.target.classList.contains("answer")) {
    getAnswer();
  } else if (event.target.classList.contains("clear")) {
    clear();
  }
};

function getAnswer() {
  var question = document.querySelector("h2");
  var answer = document.querySelector("p");
  var userInput = document.querySelector("input").value;
  var randomAnswer = answers[getRandomIndex(answers)];
  document.querySelector(".ball").classList.add("hidden");
  document.querySelector("p").classList.remove("hidden");
  document.querySelector("h2").classList.remove("hidden");
  question.innerText = userInput;
  answer.innerText = randomAnswer;
  document.querySelector("input").value = null;
};

function clear() {
  document.querySelector(".ball").classList.remove("hidden");
  document.querySelector("p").classList.add("hidden");
  document.querySelector("h2").classList.add("hidden");
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

var answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];
