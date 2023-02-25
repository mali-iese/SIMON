buttonColors=["red",  "blue", "green", "yellow"];
gamePattern=[];
userClickedPattern=[];
//checks for a keypress in the document and calls nextsequence function for the first time, also changes the h1 text
var started=false;
var level=0;
$(document).keypress(function(){
if(!started){
  $("#level-title").text("Level "+ level);
  nextSequence();


started=true;
}})



function nextSequence(){
  userClickedPattern.splice(0, userClickedPattern.length);   
    randomNumber=Math.round((Math.random())*3);
    randomChosenColor=buttonColors[randomNumber];
    index_Of_Random_Color=buttonColors.indexOf(randomChosenColor);
    gamePattern.push(index_Of_Random_Color);
  


$("#"+randomChosenColor).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });

function play(names)  {
var audio=new Audio("./"+names+".mp3");
  audio.play();
  }
  $("#level-title").text("Level "+ level);
  level++;






}



//user chosen button plays sound and adds the id to the array on top plus provides animation
$(".btn").click(function(){
  userChosenColor=this.id;
  index_Of_User_Color=buttonColors.indexOf(userChosenColor);
  userClickedPattern.push(index_Of_User_Color);
  var audioUser=new Audio("./"+userChosenColor+".mp3");
  audioUser.play();
  $("."+userChosenColor).addClass("pressed");
  setTimeout(function(){
    $("."+userChosenColor).removeClass("pressed");
  }, 100);
})

$(".btn").click(function(){
  if(userClickedPattern.length===gamePattern.length){
  checkAnswer();}
})


function checkAnswer(){

  if(JSON.stringify(userClickedPattern)===JSON.stringify(gamePattern)){
        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
        nextSequence();
        console.log(gamePattern);
        console.log(userClickedPattern);
      }, 1000);

    }
  else{
    var audioWrong =new Audio("./wrong.mp3");
    audioWrong.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over")
    },200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    console.log(gamePattern);
    console.log(userClickedPattern);
    startOver();
  }
}


function startOver(){
  gamePattern.splice(0, gamePattern.length);
  started=false;
  level=0;
}
 console.log(started);





