const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");
const quizForm = document.querySelector(".quiz-form");

const correctAnswer = [ "90","right angled"];

function calculateScore(){
let score = 0;
let index = 0;
// it display only option which we have selected
// formdata is api used to get form results 
const formResults = new FormData(quizForm);
for ( let value of formResults.values()){
if (value === correctAnswer[index]){
	score  = score + 1;
}
index = index + 1;
}
// return score;
outputEl.innerText = "your score is " + score;
}

submitAnswerBtn.addEventListener("click",calculateScore)