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
        window.location.href = "index.html";
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
    /* Check the location of each element */
    $('.content').each( function(i){
        var bottom_of_object= $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).height();
        
        if( bottom_of_object > bottom_of_window){
        $(this).addClass('hidden');
        }
    });
  
  
    $(window).scroll( function(){
      /* Check the location of each element hidden */
        $('.hidden').each( function(i){
        
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
        
          /* If the object is completely visible in the window, fadeIn it */
          if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},700);
          }
      });
    });
    $("#bidL").on("click", function() {
        var biddedValue = parseInt($("#biddedL").text(), 10);
        var priceLeftValue = parseInt($("#price-left").text(), 10);
        console.log(biddedValue)
        if (biddedValue > priceLeftValue) {
          $("#price-left").text(biddedValue);
        }
    });
});