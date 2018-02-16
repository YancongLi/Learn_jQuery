
$("button").on("click", function(){
    // Fill In your Code here

    var amount = $("input#quant_1").val() * $("input#rate_1").val();
    //alert(amount);
    
    $("input#amount_1").val(amount);
    //$("input#amount_1").removeAttr("id");//you remove this attribute forever! And you cannot reference it again when you click the button next time.
    $("input#amount_1").removeClass('amount_1'); 

    // var message = “Amount Charged for quantity of " + $("input#quant_1").val() + "is $” + amount;
     $("h2#output").text('Amount Charged for quantity of '+ $("input#quant_1").val() + ' is $' + amount); 

});
