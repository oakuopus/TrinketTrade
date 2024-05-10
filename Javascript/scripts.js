$(function() {
    $(".dropped").slideUp(0);
    $("#hamburger").on("click", function(){
        $(".dropped").slideToggle("slow");
    });
});