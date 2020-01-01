$('.leatherbtn').click(function(){
	const portY = $('.about').offset().top;
	$('html,body').animate({scrollTop:(portY)},500);
});

$('.contactbtn').click(function(){
	const contactY = $('.contact').offset().top;
	$('html,body').animate({scrollTop:(contactY)},500);
});

let tl = new TimelineMax();

window.onload = function(){
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	document.body.scrollTop = 0; // For Safari
	tl.fromTo('.titlemsg span:first-child', 0.7, {opacity:0},{opacity:1, y:-20, ease:Power2.easeInOut});
	tl.fromTo('.titlemsg span:last-child', 0.7, {opacity:0},{opacity:1, y:-20, ease:Power2.easeInOut});
};
