$(document).ready(function() {
	/*悬浮显示具体内容*/
	// $('.sidebar-list').on('mouseenter', '.qr-code', function(event) {
	// 	event.preventDefault();
	// 	$('.qr-code').next('.qrcode-con').fadeIn('fast');
	// });
	// $('.sidebar-list').on('mouseleave', '.qr-code', function(event) {
	// 	event.preventDefault();
	// 	$('.qr-code').next('.qrcode-con').fadeOut('fast');
	// });
	// $('.qr-code').mouseenter(function() {
	// 	$(this).next('.qrcode-con').fadeIn('fast');
	// });
	// $('.qr-code').mouseleave(function() {
	// 	$(this).next('.qrcode-con').fadeOut('fast');
	// });
	/*回到顶部*/
	$('#backTop').on('click', function(event) {
		event.preventDefault();
		// $(window).scrollTop(0);
		document.documentElement.scrollTop = 0;
	});
});