$(document).ready(function() {
    var secondsLeft = 300;
    var correctAnswers = [];
    var userAnswers = ["","","","",""];
    var correct = 0;
    var incorrect = 0;
    var unanswered =5;
    var start = false;
    var done = false;

    //when start button is clicked, update the time id to Time Remaining: 300 and update start variable to true and set
    $("#start").click(function(){
        start = true;
        $("#time").html("Time Remaining: 300")
    })

    //when done button is clicked, run done function
    $("#donebutton").click(function(){
        doneFunction();
    })


    //done function compares answers and shows correct, incorrect and unanswered questions
    function doneFunction(){
        done=true;
        for(i=0;i++;i<correctAnswers.length){
            if(correctAnswers[i]===userAnswers[i]){
                correct++;
            }else{
                incorrect++;
            }
        }
        $(".away").html("");
        $("#final1").html("Correctly Answered: "+correct);
        $("#final2").html("Incorrectly Answered: "+incorrect);
        $("#final3").html("Unanswered: "+unanswered);
    }

    //every 1000 milliseconds, subtract 1 from the variable secondsLeft and update the display (if start has been clicked).
    setInterval(function(){
        if(start){
        secondsLeft--;
        timeCheck();
        if(done){
            doneFunction();
        } else{
            $("#time").html("Time Remaining: "+secondsLeft);
        }}
    }, 1000)

    //if time runs out, done = true
    function timeCheck(){
        if(done===false){
            if(secondsLeft>0){
                done = false;
            } else{
                done = true;
            }
    }}

    //add the variable answer to the array userAnswers at the index of x
    function clickedAnswer(x, answer){
        userAnswers[x] = answer;
        unanswered--;
    }

    //
    

})

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
