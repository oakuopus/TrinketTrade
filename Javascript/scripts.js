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
        $("header").css({
            "background-color": "black",
            "opacity": "90%",
        });
        }   
    });
    function reload() {
        location.reload();
    }   
    function home() {
        window.location.href = "./index.html";
    }
    $("#badge").on("click", function() {
        home();
    });
    var days = 7
    var hours = 23
    var minutes = 59
    var timer = setInterval(countDown, 60000)
    function countDown() {
        minutes--
        if(minutes == 0){
            hours--
            minutes = 59
        }
        if(hours == 0){
            days--
            hours == 23
            minutes = 59
        }
        if(days == 0){
            days = 7, hours = 23, minutes = 59
        }
        $("#days").text(days + ":")
        $("#hours").text(hours + ":")
        $("#minutes").text(minutes)
    }
});
