
$('#my-menu').mmenu({
	extensions: [ 'widescreen', 'effect-menu-slide'],
	  onClick : {
   close          : true,
   preventDefault : false,
  }
});


var api = $('#my-menu').data('mmenu');
api.bind('open:finish', function () {
	$('.hamburger').addClass('is-active');
}).bind('close:finish', function () {
	$('.hamburger').removeClass('is-active');
});

// Маска ввода номера телефона (плагин maskedinput)
jQuery(function($){
	$('[name="phone"]').mask("+7(999) 999-9999");
});

// Отправка заявки 
// Отправка заявки 
jQuery(document).ready(function() {

	$("#form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "js/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(th).find(".thank").addClass("active").css("display", "flex").fadeIn();
			setTimeout(function(){
				$(th).find(".thank").removeClass('active').fadeOut();
				th.trigger("reset");
			},3000);
		});
		return false;
	});
	
});



