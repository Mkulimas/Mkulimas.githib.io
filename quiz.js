const quizContainer = document .getElementById('quiz');
const resultContainer = document .getElementById('results');
const submitButton = document .getElementById('submit');
const quizQuestions = quizQuestions = [
    {
        questions:"Joseph Macharia is currently moderator of:",
        answers: {
            a:"Introduction to coding for researchers",
            b:"Human-computer interaction",
            c:"interactive programming languages",
            d:"Low and high fidelity prototyping"
        },
        correctAnswer:"a"
    },
    {
        question:"Joseph woks closely with:",
        answers: {
            a:"Undergraduate students",
            b:"Honours students",
            c:"Higher Degree Research Students",
            d:"All of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "Joseph is super passionate about",
        answers: {
            a:"People",
            b:"Innovations",
            c:"Human-centred design",
            d:"All of the above and more"
        },
        correctAnswer: "d"
    }
]
function buildQuiz () {
    // variable to store the HTM output
    const output = [];
    for(i=0; i<quizQuestions.length; i++) {
        //store list of answer choices
        const answers = [];
    // for each available answer to this question add html radio button
    for(letter in quizQuestions[i].answers){
        answers.push(
        '<label'
        +'input type="radio" name="question'+i+'"value"'+letter+'">'
        +letter + ':' 
        +quizQuestions[i].answers[letter]
        +'</label>'
    );
    }
    // add this question and its answers to the output
    output.push(
        'div class="question">' + quizQuestions[i].question+'<div>'
        +'<div class="answers">' +answers.join('')+ '<div>'
    );
    }
    // combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}
        // variable to store the list of possible answers
        const answers = [];
    
}
function showresults () 
//load quiz
buildQuiz();
submitButton.onclick = function() {
    showresults();
}
{
    // gather answer container from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    //keep track of user's answers
    var numCorrect = 0;
    // for each question find the selected answer
    for (i=0; i<quizQuestions .length; i++) {
        useAnswer = (answerContainers [i].querySelector ('input[name=question'+i+']:checked')||{}).value
        // if answer is correct add to the number of correct answers
    if(useAnswer===quizQuestions[i] .correctAnswer) }
    // add to the number of correct answers
    numCorrect++;
    // and color the answers green
    answerContainers [i].style.color='lightgreen';
}
//if answer is wrong or blank
else{
    //color the answers red
    answerContainers[i].stylecolor = 'red';
}
}
// show number of correct answers out of total
if (numCorrect ===0) {
    resultsContainer.innerHTML = "That wasnt your best effort - you didnt get a single answer correct";
}
if (numCorrect ===1) {
    resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
}
if (numCorrect ===2) {
    resultsContainer.innerHTML = "That was okay! You got score of 2 out of 4 for your responses. Have another go to see if you can improve on that."; 
}
if (numCorrect ===3) {
    resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Joseph prety well!";
}
if (numCorrect ===4) {
    resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 of 4 for your response. You know Joseph so well!";
}