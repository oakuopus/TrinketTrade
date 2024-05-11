$(function() {
    $(".dropped").slideUp(0);
    $("#hamburger").on("click", function(){
        $(".dropped").slideToggle("slow");
    });

    $(window).on("scroll", function(){ // function to create dynamic header, which only shows when scrollTop is not 0
        if($(window).scrollTop() == 0){
            $("header, #hamburger").css({
                "background-color": "initial"
            });
        }else{
        $("header, #hamburger").css({
            "background-color": "black",
            "opacity": "90%",
        });
        }   
    });
});