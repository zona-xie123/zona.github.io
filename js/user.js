
$(document).ready(function() {
    $('a.target-burger').click(function(e){
		$('.main-nav .container, nav.main-nav, a.target-burger').toggleClass('toggled');
		e.preventDefault();
    });
    var rellax = new Rellax('.rellax');
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
       nav:true
    })
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