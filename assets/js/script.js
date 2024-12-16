$("document").ready(function($){
    var nav = $('#navbar');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            nav.addClass("active");
        } else {
            nav.removeClass("active");
        }
    });
});

$(".openbtn").click(function () {
    $(this).toggleClass('active');
});

$(function() {
    $(window).scrollTop($('#productservice').offset().top);
});

setTimeout(function(){
    $('#loadingcontent').modal('show'); 
}, 1000);

function linkproduct($link){
    return window.location.href = $link;
}