// $("#box").show()

$("#target").on("click", function(){
    //the code will be executed when the user click the button
    // $("#statement").hide();
    // $("#box").toggle();
    // $("#box").slideUp(2000);
    // $("#box").slideToggle();
    $("#box").fadeTo(2000, 0.5);
    $("#box").fadeOut(2000);

});