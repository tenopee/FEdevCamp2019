$(window).on('load', function() {
	firstFunction();
	checked();
});

var firstFunction = function () {
	setTimeout( function () {
		$(".jscLoadingBeforeWrap").addClass("dn");
		$(".jscLoadingAfterWrap").removeClass("dn");
	} , 1000);
	setTimeout( function () {
		$(".jscLoadingAfterWrap").addClass("dn");
		$(".jscWrap").removeClass("dn");
	} , 2400);
}

var checked = function () {

  $('input[name=belongings]').on('change', function(){
    var vals = $('input[name=belongings]:checked').map(function(){
      return $(this).val();
    }).get();

    if(vals.length === 7){
    	$('.jscGoodImg').removeClass('dn');
    } else {
		$('.jscGoodImg').addClass('dn');
    }
  });
}

$(function() {
  var pagetop = $('.jscPageTop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.on('click', function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});