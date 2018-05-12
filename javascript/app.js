

window.onload = function() {
    $("#stop").on("click", stopwatch.stop);
    $("#reset").on("click", stopwatch.reset);
    $("#start").on("click", stopwatch.start);
  };
  
  var stopwatch = {
  
    time: 0,
    lap: 1,
  
    reset: function() {
  
      stopwatch.time = 0;
      stopwatch.lap = 1;
  
      $("#display").text("00:00");
    
    },
    start: function() {
  
 
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 5000);
        clockRunning = true;
      }
    },
    stop: function() {
  

      clearInterval(intervalId);
      clockRunning = false;
    },

    count: function() {
  

      stopwatch.time++;

      var converted = stopwatch.timeConverter(stopwatch.time);
      console.log(converted);

      $("#display").text(converted);
    },
    timeConverter: function(t) {
  
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
    }
  };

  var questions = [
  {prompt: "What is the birth name of Erik Kilmonger? \n (a) N'Baku \n\ (b)N'Koye \n\ (c)N'Jadaka \n\ (d)Erik",
   answer: "c"
  },
  {prompt: "How old is Princess Shuri? \n (a) 16 \n\ (b) 20 \n\ (c) 23 \n\ (d) 14",
   answer: "a"
  },
  {prompt: "What was Kilmonger's body count? \n (a)20 \n\ (b) 200 \n\ (c) 2,000 \n\ (d) Unsure",
   answer: "c"
  },
  {prompt: "What tribe ditched Wakanda years after it's founding? \n (a) Djibouti \n\ (b) Jabari \n\ (c) Panther \n\ (d) Yoruba",
   answer: "b"
  },
]
  var score = 0;
  
  for(var i=0; i,questions.length; i++){
    var response = window.prompt(questions[i].prompt)
  }
    if(response === questios[i].answer){
      score++;
      alert("Kunene, you are true Wakandan");
    }
    else{
      alert("Hayi, try again");
    }
    alert("Ah, you did good O. You got"+score+"/"+questions.length);

  
 