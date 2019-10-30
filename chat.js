var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h1>Hola, soy bot timmy, tu como te llamas?</h1>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>Un gusto ' + input + '</h1>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = '<h1>Que edad tienes?</h1>';			    	// load next question		
    setTimeout(timedQuestion, 3000);									// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>Oh, asi que naciste en ' + (2019 - input) + '</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>De donde eres?</h1>';					      	
    setTimeout(timedQuestion, 3000);
    }   
    if (questionNum == 2) {
      output.innerHTML = '<h1>Muy bien a mi me encanta ' + input + '</h1>';
      document.getElementById("input").value = "";
      question = '<h1>Que tal tu dia? </h1>';
      setTimeout(timedQuestion, 3000);
    } 
    else if (questionNum == 3) {
      output.innerHTML = '<h1> Por que ' + input + '?</h1>';
      document.getElementById("input").value = "";
      question = '<h1>Que te gusta hacer?</h1>'
      setTimeout(timedQuestion, 3000);
    } 
    if (questionNum == 4) {
      output.innerHTML = '<h1> a mi tambien me gusta ' + input + '...Si pudiera :O</h1>';
      document.getElementById("input").value = "";
      question = '<h1> '
    }
      
    
}

function timedQuestion() {
    output.innerHTML = question;
    document.getElementById("input").value = "";
    question = '<h1>You'
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});
