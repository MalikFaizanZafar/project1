$(document).ready(function(){
	
    $("#faq .nav li").click(function(){
        // window.scrollTo(500, 500);
        $('html, body').animate({
            scrollTop: $(".tab-content").offset().top
        }, 1000);
    });

});