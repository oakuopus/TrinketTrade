$(function() {
    $(".dropped").fadeTo(0, 0);
    $("#hamburger").on("click", function(){
        $(".dropped").fadeTo(0, 1);
    });
});