$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#page-header").addClass("fixedheader");
    } else {
        $("#page-header").removeClass("fixedheader");
    }
});