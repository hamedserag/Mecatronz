//social Media
//facebook
$(".fbLink").hover(function() {
  $(this).animate({
    opacity: '1'
  })
}, function() {
  $(this).animate({
    opacity: '0'
  }, 'linear');
});

//scroll nav
$(window).scroll(function() {
  $('.navBG').toggleClass('scrolled', $(this).scrollTop() > 250);
})
