$(document).ready(function() {
    var secondsLeft = 30;
    var correctAnswers = [];
    var userAnswers = ["","","","",""];
    var correct = 0;
    var incorrect = 0;
    var answers=0;

    //every 1000 milliseconds, subtract 1 from the variable secondsLeft and update the display
    setInterval(function(){
        secondsLeft = secondsLeft-1;
        //update inner html of timer
        if(secondsLeft=0 && answers<5){
            //kill switch! you gotta be done now bud
        }
    }, 1000)

    //add the variable answer to the array userAnswers at the index of x
    function clickedAnswer(x, answer){
        userAnswers[x] = answer;
        answered++;
        //edit appearance?
        if(answered=5){
            //all done! stop timer! run comparison!
        }
    }

    //
    

}

//timer
//update inner html of timer
//array of correct answers
//empty array of user answers
//variable correct = 0
//variable incorrect = 0
//variable answered = 0
//if timer isn't 0
//on button press
//put the answer into that position in the user answer array
//update all button images to be empty update that button image to be clicked
// answered +1;
//if answered = 5
//stop timer
//for (i=0;i++;i<correctAnswers.length){
//if(correctAnswers[i]===userAnswers[i]){
//correct+1;
//see video, possibly wipe buttons and display correct!
//} else{
//incorrect+1;
//see video, possible wipe buttons and display incorrect!
//}}
//
//see video, possible wipe timer and display Correct: correct Incorrect: incorrect
//
//else
//clear the buttons and display "Time's Up!" check video
//
