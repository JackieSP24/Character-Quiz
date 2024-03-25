$(document).ready(function() {
  let quizCount = 0;

  $('#submitBtn').click(function() {
    const answer1 = $('.answer1').val();
    const answer2 = $('.answer2').val();

    
    if (answer2 === 'yes' && answer1>= 5) {
      showResult("Zayn");
      Zayn1();
    } else if (answer2 === 'no' && answer1 >= 5) {
      showResult("Harry");
      Harry1();
    } else if (answer2 === 'yes' && answer1 < 5) {
      showResult("Niall");
      Niall1();
    } else {
      showResult("Loius");
      Louis1();
    }
      
    quizCount++;
    updateQuizCount();
  });
  function Harry1(){
      $("#Louis").hide();
      $("#Niall").hide();
      $("#Zayn").hide();
      $("#Harry").show();
  }
   function Zayn1(){
      $("#Niall").hide();
      $("#Louis").hide();
      $("#Harry").hide();
      $("#Zayn").show();
      
  }
   function Louis1(){
      $("#Harry").hide();
      $("#Zayn").hide();
      $("#Niall").hide();
      $("#Louis").show();
  }
   function Niall1(){
      $("#Harry").hide();
      $("#Louis ").hide();
      $("#Zayn").hide();
      $("#Niall").show();
  }
    
  function showResult(character) {
    const resultText = `Your character result is: ${character}.`;
    $('#result').empty().append(resultText);
  }

  function updateQuizCount() {
    const quizCountText = `Quiz has been taken ${quizCount} times.`;
    $('#result').append(`<p>${quizCountText}</p>`);
  }
});