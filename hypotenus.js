const sides = document.querySelectorAll(".side-input");
const hypotenusBtn =document.querySelector("#hypotenus-btn");
const outputEl = document.querySelector("#output");
function calculateSumOfSquare(a,b){
	const sumOfSquare = a*a + b*b;
	return sumOfSquare;
}
function calculateHypotenus(){
const sumOfSquare =  calculateSumOfSquare(Number(sides[0].value),
	Number(sides[1].value));
const lengthOfHypotenus = Math.sqrt(sumOfSquare);
// return lengthOfHypotenus;
outputEl.innerText ="the length of hypoteneuse is " + lengthOfHypotenus;
}
hypotenusBtn.addEventListener("click",calculateHypotenus);