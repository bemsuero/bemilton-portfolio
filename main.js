
$(document).ready(function(){
  $( "#steamText" ).hide();
  $( "#steam" ).mouseenter(function(){
    $( "#steamText").show();
    $(this).hide();
  });
  $( "#platesText" ).hide();
  $( "#plates" ).mouseenter(function(){
    $( "#platesText").show();
    $(this).hide();
  });
  $( "#schoolText" ).hide();
  $( "#school" ).mouseenter(function(){
    $( "#schoolText").show();
    $(this).hide();
  });
  $( "#topsecretText" ).hide();
  $( "#topsecret" ).mouseenter(function(){
    $( "#topsecretText").show();
    $(this).hide();
  });
  $( "#tictactoeText" ).hide();
  $( "#tictactoe" ).mouseenter(function(){
    $( "#tictactoeText").show();
    $(this).hide();
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
