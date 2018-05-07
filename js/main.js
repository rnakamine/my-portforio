$(function() {
	$('#pagepiling').pagepiling({
		sectionsColor: ['#ffffff', '#4BBFC3', '#7BAABE', '#2C3E50'],
		anchors: ['main', 'profile', 'works', 'contact'],
		menu: '#myMenu'
	});

	$('.contact-form form').submit(function() {
    var errorFlag = false;
    $(this).children('input, textarea').each(function() {
      if ($(this).val() !== '') {
        $(this).prev().text('');
      } else {
        errorFlag = true;
        $(this).prev().text('入力してください');
      }
    });

    console.log(errorFlag);
    return false;
  });

});
