
$(document).ready(function(){
  $( "#steamText" ).hide();
  $( "#steam" ).mouseover(function(){
    $( "#steamText").show();
    $("#steamImage").hide();
  });
  $( "#steam" ).mouseleave(function(){
      $( "#steamText").hide();
      $("#steamImage").show();
  });
  $( "#platesText" ).hide();
  $( "#plates" ).mouseover(function(){
    $( "#platesText").show();
    $("#platesImage").hide();
  });
  $( "#plates" ).mouseleave(function(){
      $( "#platesText").hide();
      $("#platesImage").show();
  });
  $( "#schoolText" ).hide();
  $( "#school" ).mouseover(function(){
    $( "#schoolText").show();
    $("#schoolImage").hide();
  });
  $( "#school" ).mouseleave(function(){
      $( "#schoolText").hide();
      $("#schoolImage").show();
  });
  $( "#topsecretText" ).hide();
  $( "#topsecret" ).mouseover(function(){
    $( "#topsecretText").show();
    $("#topsecretImage").hide();
  });
  $( "#topsecret" ).mouseleave(function(){
      $( "#topsecretText").hide();
      $("#topsecretImage").show();
  });
  $( "#tictactoeText" ).hide();
  $( "#tictactoe" ).mouseover(function(){
    $( "#tictactoeText").show();
    $("#tictactoeImage").hide();
  });
  $( "#tictactoe" ).mouseleave(function(){
      $( "#tictactoeText").hide();
      $("#tictactoeImage").show();
  });

  $("#homeButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
      });
  $("#experienceButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#experience").offset().top},
        'slow');
      });
  $("#projectButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
      });
  $("#contactButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
      });

  });
