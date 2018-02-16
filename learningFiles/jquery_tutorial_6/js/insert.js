$("#btn_main").on("click", function(){
	$(".dope").text("This is new replacement text");
	// var message = $(".dope").text();
	// alert(message);

	$("#btn_main").val("Double Click Me");

	// $("#btn_main").on("dblclick", function(){
	// 	$("#btm_main").val("Replace");
	// });


});

$("#btn_main").on("dblclick", function(){
	$(".dope").text("You'll learn how to replace me");
	$("#btn_main").val("Replace");
});

$("#btn_new").on("click", function(){
	$(".dope").html('<b class="cool">Hey This is HTML</b>');
});