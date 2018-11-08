
$(document).ready(function() {
    $('a.target-burger').click(function(e){
		$('.main-nav .container, nav.main-nav, a.target-burger').toggleClass('toggled');
		e.preventDefault();
    });

    // nav
$('.main-nav ul li a').click(function (){
  $('.main-nav .container, nav.main-nav, a.target-burger').removeClass('toggled');
})
    var rellax = new Rellax('.rellax');
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
        loop:true,
        autoplay:true,
       nav:true
    })
        //gotop        
        var gotop = $('.top-btn');
        gotop.click(function() {
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                gotop.fadeIn();
            } else {
                gotop.stop().fadeOut();
            }
        });
        //faq_down
        $('.faq ul li').each(function(i) {
            var _number = i;
            $(this).click(function() {
                //$(this).parent().children().removeClass('active').eq(_number).addClass('active');
                $('.toggle-clause').eq(_number).slideToggle(200);
                $('.faq ul li').eq(_number).children().children('.math').toggle();
                $('.faq ul li').eq(_number).toggleClass('toggle-color')
            });
        });
})