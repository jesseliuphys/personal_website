function checkScroll(){
  var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

  if($(window).scrollTop() > startY){
    $('.navbar').addClass("scrolled bg-faded navbar-light");
    $('.navbar').removeClass("navbar-inverse");
  } else {
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