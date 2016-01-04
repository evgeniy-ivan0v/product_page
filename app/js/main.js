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
	});