$('#slider').noUiSlider({
	start: [0,10000],
	connect: true,
	step: 100,
	range: {
		'min': 100,
		'max': 13000
	},
	format: wNumb({
		mark: ',',
		decimals: 0
	}),
});
$('#slider').Link('lower').to($('.price__input_lower'));
$('#slider').Link('upper').to($('.price__input_upper'));

$('.view__link').on('click', function () {
	var $elem = $('.product__list'),
		className = $(this).data('view');
	$elem.removeClass('product__list_list-thumbnail product__list_list-full product__list_view-list');
	$elem.addClass('product__list_'+className);
	return false;
});

$('.filter__reset-link').on('click', function () {
	$(this).closest('.filter__sub-list').find('input').prop('checked', false);
	return false;
});

$('.product__thumb-item').on('click', function () {
	$(this).closest('.product__thumb').find('.product__thumb-item_active').removeClass('product__thumb-item_active');
	$(this).addClass('product__thumb-item_active');
	var src = $(this).find('img').attr('src');
	$(this).closest('.product__slideshow').find('.product__selected-image img').prop('src', src);
});

$('.filter__title-link').on('click', function () {
	$(this).toggleClass('filter__title-link_close').next('.filter__hidden-block').slideToggle();
	return false;
});

$('select').styler();
$('.seo-text__text').columnize({
	columns : 2
});
