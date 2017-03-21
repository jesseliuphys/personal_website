function checkScroll(){
  var startY = $('.navbar').height() * 2; //The point where the navbar changes in px
  var navBreakpoint = 768;

  if(($(window).scrollTop() > startY) || ($(window).width() < navBreakpoint)){
    $('.navbar').addClass("scrolled bg-faded navbar-light");
    $('.navbar').removeClass("navbar-inverse");
  } else if($(window).width() >= navBreakpoint)  {
  	$('.navbar').addClass("navbar-inverse");
    $('.navbar').removeClass("scrolled bg-faded navbar-light");
  }
}

// check if a navbar exists before executing
if($('.navbar').length > 0){
  $(window).on("scroll load resize", function(){
      checkScroll();
  });
}