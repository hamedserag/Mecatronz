//loading animations

//logo animation
$(function() {
  $('.logo').animate({
    left: '30%',
    opacity: "1"
  }, 1000, 'linear');
});

//fire icon animation 1

$(function() {
  $('.fireIcon').delay(1800).animate({
    left: '10%',
    opacity: "1"
  }, 1000, 'linear');
});

//smart homes icon animation 2

$(function() {
  $('.smartHomes').delay(2000).animate({
    left: '15%',
    top: "55%",
    opacity: "1"
  }, 1000, 'linear');
});

//sound icon animation 3

$(function() {
  $('.networkSound').delay(2200).animate({
    left: '30%',
    top: "72%",
    opacity: "1"
  }, 1000, 'linear');
});

//steam icon animation 4

$(function() {
  $('.steam').delay(2400).animate({
    left: '60%',
    top: "72%",
    opacity: "1"
  }, 1000, 'linear');
});


//security icon animation 5

$(function() {
  $('.security').delay(2600).animate({
    left: '75%',
    top: "55%",
    opacity: "1"
  }, 1000, 'linear');
});

//Electricity icon animation 6

$(function() {
  $('.elecIcon').delay(2800).animate({
    left: '80%',
    opacity: "1"
  }, 1000, 'linear');
});




//hover effects

//hover fire
$(".fireIcon").hover(function(){
  $(".fireP").animate({
    opacity: '1'
  })
  }, function(){
    $(".fireP").animate({
      opacity: '0'
    }, 1000, 'linear');
});

//hover smart homes
$(".smartHomes").hover(function(){
  $(".smartHomesP").animate({
    opacity: '1'
  })
  }, function(){
    $(".smartHomesP").animate({
      opacity: '0'
    }, 1000, 'linear');
});
//hover sound
$(".networkSound").hover(function(){
  $(".networkSoundP").animate({
    opacity: '1'
  })
  }, function(){
    $(".networkSoundP").animate({
      opacity: '0'
    }, 1000, 'linear');
});
//hover steam
$(".steam").hover(function(){
  $(".steamP").animate({
    opacity: '1'
  })
  }, function(){
    $(".steamP").animate({
      opacity: '0'
    }, 1000, 'linear');
});
//hover security
$(".security").hover(function(){
  $(".securityP").animate({
    opacity: '1'
  })
  }, function(){
    $(".securityP").animate({
      opacity: '0'
    }, 1000, 'linear');
});
//hover Electricity
$(".elecIcon").hover(function(){
  $(".elecP").animate({
    opacity: '1'
  })
  }, function(){
    $(".elecP").animate({
      opacity: '0'
    }, 1000, 'linear');
});
