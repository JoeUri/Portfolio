$(document).ready(function(){
    $(".main-nav").hover(function(){
        $(this).css("color", "orange");
    },
    function(){
        $(this).css("color", "white")
    });
});