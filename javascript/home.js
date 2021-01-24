var slider_content = document.getElementById('sliderBox');

// contain images in an array
var image = ['a','b', 'c', 'd','e'];

var i = image.length;


// function for next slide

function nextImage(){
  if (i<image.length) {
    i= i+1;
  }else{
    i = 1;
  }
    slider_content.innerHTML = "<img src=img/"+image[i-1]+".jpg>";
}


// function for prew slide

function prewImage(){

  if (i<image.length+1 && i>1) {
    i= i-1;
  }else{
    i = image.length;
  }
    slider_content.innerHTML = "<img src=img/"+image[i-1]+".jpg>";

}


// script for auto image slider

setInterval(nextImage , 4000);//4000 is the time taken to change to next image
//animations

//logo animation
/*
$(function() {
  $('.logo').animate({
    left: '30%',
    top: '30%',
    opacity: "1",
    rotate: "45deg"
  }, 1000, 'linear');
});

//fire icon animation 1

$(function() {
  $('.fireIcon').delay(1800).animate({
    left: '20%',
    opacity: "1"
  }, 1000, 'linear');
});

//Electricity icon animation

$(function() {
  //1
  $('.elecIcon').delay(2000).animate({
    left: '65%',
    opacity: "1"
  }, 1000, 'linear');
  });
  */
