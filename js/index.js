// Not working with the toggleClass "active" below
// $(".toggleButton").hover(function (e) {
// 	$(this).css("background-color",e.type === "mouseenter" ? '#595959': "#252526")
// 			.css("color",e.type === "mouseenter" ? '#252526': "#595959");
// });

$(".toggleButton").hover(function (e) {
	$(this).toggleClass("hover");
});

$(".toggleButton").click(function(){
	$(this).toggleClass("active");
});

$("textarea").height($(window).height() - $("#header").height() - 30);
