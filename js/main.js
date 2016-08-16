
// the questions and answers 
var questions =[
{	question:"What is 5+2?",
	answer:7
},
{
	question:"What color is the sky?",
	answer:"blue"

},
{
	question:"What is the opposite of cold?",
	answer:"hot"
},
{
	question:"What animal says 'meow'?",
	answer:"cat"
},
{
	question:"What is the capitol of California?",
	answer:"sacramento"
},
{
	question:"What season comes after fall?",
	answer:"winter"
},
{
	question:"Which planet is the largest?",
	answer:"jupiter"
}]
for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}
// the function gets the question from that array and the user needs to enter in the corresponding answer
function reveal() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	// where the correct and incorrect answers are placed
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect

// score 1 = points in correct category
	var score1= correct


// perfect score
var pass=7

// pop up stating if the user got 100% or not 
if(score1==pass){
msg=swal({   title: "Success!",   text: "WOW! You are a genius!",   type: "success",   confirmButtonText: "OK" });
}else{
	msg=swal({   title: "Whoops!",   text: "Looks like you didn't pass.Try Again!",   type: "error",   confirmButtonText: "OK" });
}




}











