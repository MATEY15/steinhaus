//= jquery.min.js
//= jquery.magnific-popup.min.js
//= slick.min.js
//= PageScroll2id.min.js

// window.onload = function(){
//   $("#overlayer").delay(1000).fadeOut("slow");
//   setTimeout(function() {
//   }, 800);
// }

var homeUrl = $('.home-url').attr('data-url');

function heightFooter(){
	var heightFoot = $('.footer').outerHeight();
	$('body').css({ 'padding-bottom': heightFoot});
}
heightFooter();
$( window ).resize(function() {
	heightFooter();
});


var menuOpen = function(){
	$('.burger-menu').click(function(e){ // Клик по элементу
		e.preventDefault();
		$('.top-menu--wrapper').toggleClass('is-active'); // Скрытый элемент
		$(this).toggleClass('is-active');
		$('body').toggleClass('overflow');
	});
	$(document).mouseup(function (e) {
		var container = $(".header"); // Родительский контейнер элемента где клик
		if (container.has(e.target).length === 0){
			$('.top-menu--wrapper').removeClass('is-active');
			$('.burger-menu').removeClass('is-active');
		}
	});
	$('.closed-burger').click(function(e){
		e.preventDefault();
		$('.top-menu--wrapper').removeClass('is-active');
		$('.burger-menu').removeClass('is-active');
		$('body').removeClass('overflow');
	});
};

/* Popup Window */

$(".popup").magnificPopup({
  type: 'inline',
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});

/* Popup Window End */

var bolunFunction = function(){
	$('.line-steinhaus--bulit .icon-bolun').on('click' , function(){
		$('.line-steinhaus--bulit .icon-bolun').removeClass('is-active');
		$(this).addClass('is-active');
	});
};
bolunFunction();

var sliderFullBrick = function(){
	$('.slider-brick--full').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		appendArrows: ".slider-brick--full-navigate",
		prevArrow: '<div class="built-objects--prev"><svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.273 1.00878C10.717 0.564781 11.416 0.564781 11.86 1.00878C12.289 1.43778 12.289 2.15178 11.86 2.57978L3.81302 10.6268H30.367C30.986 10.6268 31.494 11.1188 31.494 11.7378C31.494 12.3568 30.986 12.8648 30.367 12.8648H3.81302L11.86 20.8968C12.289 21.3408 12.289 22.0558 11.86 22.4838C11.416 22.9278 10.717 22.9278 10.273 22.4838L0.321018 12.5318C-0.107982 12.1028 -0.107982 11.3888 0.321018 10.9608L10.273 1.00878Z"/></svg></div>',
		nextArrow: '<div class="built-objects--next"><svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.273 1.00878C10.717 0.564781 11.416 0.564781 11.86 1.00878C12.289 1.43778 12.289 2.15178 11.86 2.57978L3.81302 10.6268H30.367C30.986 10.6268 31.494 11.1188 31.494 11.7378C31.494 12.3568 30.986 12.8648 30.367 12.8648H3.81302L11.86 20.8968C12.289 21.3408 12.289 22.0558 11.86 22.4838C11.416 22.9278 10.717 22.9278 10.273 22.4838L0.321018 12.5318C-0.107982 12.1028 -0.107982 11.3888 0.321018 10.9608L10.273 1.00878Z"/></svg></div>',
	});
};
sliderFullBrick();

var sliderProduct = function(){
	$('.slider-product--big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-product--prewiev',
		swipe: false
	});
	$('.slider-product--prewiev').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-product--big',
		focusOnSelect: true
	});
};
sliderProduct();

var sliderTransparter = function(){
	$('.slider-advantages').slick({
		infinite: false,
		slidesToShow: 1,
		speed: 300,
		autoplay: false,
		appendArrows: ".advantages-navigate",
		prevArrow: '<div class="new-catalog--prev"><svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.273 1.00878C10.717 0.564781 11.416 0.564781 11.86 1.00878C12.289 1.43778 12.289 2.15178 11.86 2.57978L3.81302 10.6268H30.367C30.986 10.6268 31.494 11.1188 31.494 11.7378C31.494 12.3568 30.986 12.8648 30.367 12.8648H3.81302L11.86 20.8968C12.289 21.3408 12.289 22.0558 11.86 22.4838C11.416 22.9278 10.717 22.9278 10.273 22.4838L0.321018 12.5318C-0.107982 12.1028 -0.107982 11.3888 0.321018 10.9608L10.273 1.00878Z"/></svg></div>',
		nextArrow: '<div class="new-catalog--next"><svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.273 1.00878C10.717 0.564781 11.416 0.564781 11.86 1.00878C12.289 1.43778 12.289 2.15178 11.86 2.57978L3.81302 10.6268H30.367C30.986 10.6268 31.494 11.1188 31.494 11.7378C31.494 12.3568 30.986 12.8648 30.367 12.8648H3.81302L11.86 20.8968C12.289 21.3408 12.289 22.0558 11.86 22.4838C11.416 22.9278 10.717 22.9278 10.273 22.4838L0.321018 12.5318C-0.107982 12.1028 -0.107982 11.3888 0.321018 10.9608L10.273 1.00878Z"/></svg></div>',
	});
};
sliderTransparter();

var sliderHomeTop = function(){
	$(".scroll-click").mPageScroll2id();
	$('.slider-top--counter .slider-top--counter-all span').html("0"+$('.slider-home--top .slider-home--items').length);
	$('.slider-home--top').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 6000,
		slidesToShow: 1,
		speed: 300,
		dots: true,
		fade: true,
		cssEase: 'linear',
		appendArrows: ".home-top--navigate-slider",
		prevArrow: '<div class="top-sliser--prev"><svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.273 1.00878C10.717 0.564781 11.416 0.564781 11.86 1.00878C12.289 1.43778 12.289 2.15178 11.86 2.57978L3.81302 10.6268H30.367C30.986 10.6268 31.494 11.1188 31.494 11.7378C31.494 12.3568 30.986 12.8648 30.367 12.8648H3.81302L11.86 20.8968C12.289 21.3408 12.289 22.0558 11.86 22.4838C11.416 22.9278 10.717 22.9278 10.273 22.4838L0.321018 12.5318C-0.107982 12.1028 -0.107982 11.3888 0.321018 10.9608L10.273 1.00878Z"/></svg></div>',
		nextArrow: '<div class="top-sliser--next"><svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.273 1.00878C10.717 0.564781 11.416 0.564781 11.86 1.00878C12.289 1.43778 12.289 2.15178 11.86 2.57978L3.81302 10.6268H30.367C30.986 10.6268 31.494 11.1188 31.494 11.7378C31.494 12.3568 30.986 12.8648 30.367 12.8648H3.81302L11.86 20.8968C12.289 21.3408 12.289 22.0558 11.86 22.4838C11.416 22.9278 10.717 22.9278 10.273 22.4838L0.321018 12.5318C-0.107982 12.1028 -0.107982 11.3888 0.321018 10.9608L10.273 1.00878Z"/></svg></div>'
	});
	$(".slider-home--top").on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {
		var i = (nextSlide ? nextSlide : 0) + 1;
		i = ('0' + i).slice(-2);
		$('.slider-top--counter .slider-top--counter-cout span').html(i);
	});
};
sliderHomeTop();

var sliderCatalog = function(){
	$('.new-catalog--slider').slick({
		centerMode: false,
		infinite: true,
		slidesToShow: 4,
		speed: 300,
		autoplay: false,
		variableWidth: true,
		appendArrows: ".new-catalog--navigate",
		prevArrow: '<div class="new-catalog--prev"><svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.273 1.00878C10.717 0.564781 11.416 0.564781 11.86 1.00878C12.289 1.43778 12.289 2.15178 11.86 2.57978L3.81302 10.6268H30.367C30.986 10.6268 31.494 11.1188 31.494 11.7378C31.494 12.3568 30.986 12.8648 30.367 12.8648H3.81302L11.86 20.8968C12.289 21.3408 12.289 22.0558 11.86 22.4838C11.416 22.9278 10.717 22.9278 10.273 22.4838L0.321018 12.5318C-0.107982 12.1028 -0.107982 11.3888 0.321018 10.9608L10.273 1.00878Z"/></svg></div>',
		nextArrow: '<div class="new-catalog--next"><svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.273 1.00878C10.717 0.564781 11.416 0.564781 11.86 1.00878C12.289 1.43778 12.289 2.15178 11.86 2.57978L3.81302 10.6268H30.367C30.986 10.6268 31.494 11.1188 31.494 11.7378C31.494 12.3568 30.986 12.8648 30.367 12.8648H3.81302L11.86 20.8968C12.289 21.3408 12.289 22.0558 11.86 22.4838C11.416 22.9278 10.717 22.9278 10.273 22.4838L0.321018 12.5318C-0.107982 12.1028 -0.107982 11.3888 0.321018 10.9608L10.273 1.00878Z"/></svg></div>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				centerMode: true,
				slidesToShow: 3,
				autoplay: false,
			}
		},
		{
			breakpoint: 540,
			settings: {
				autoplay: true,
				centerMode: true,
			}
		}]
	});
};
sliderCatalog();

var sliderBuild = function(){
	$('.built-slider--big').slick({
		slidesToShow: 1,
		arrows: false,
		asNavFor: '.built-slider--small'
	});
	$('.built-slider--small').slick({
		slidesToShow: 1,
		arrows: true,
		asNavFor: '.built-slider--big',
		appendArrows: ".built-objects--navigate",
		prevArrow: '<div class="built-objects--prev"><svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.273 1.00878C10.717 0.564781 11.416 0.564781 11.86 1.00878C12.289 1.43778 12.289 2.15178 11.86 2.57978L3.81302 10.6268H30.367C30.986 10.6268 31.494 11.1188 31.494 11.7378C31.494 12.3568 30.986 12.8648 30.367 12.8648H3.81302L11.86 20.8968C12.289 21.3408 12.289 22.0558 11.86 22.4838C11.416 22.9278 10.717 22.9278 10.273 22.4838L0.321018 12.5318C-0.107982 12.1028 -0.107982 11.3888 0.321018 10.9608L10.273 1.00878Z"/></svg></div>',
		nextArrow: '<div class="built-objects--next"><svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.273 1.00878C10.717 0.564781 11.416 0.564781 11.86 1.00878C12.289 1.43778 12.289 2.15178 11.86 2.57978L3.81302 10.6268H30.367C30.986 10.6268 31.494 11.1188 31.494 11.7378C31.494 12.3568 30.986 12.8648 30.367 12.8648H3.81302L11.86 20.8968C12.289 21.3408 12.289 22.0558 11.86 22.4838C11.416 22.9278 10.717 22.9278 10.273 22.4838L0.321018 12.5318C-0.107982 12.1028 -0.107982 11.3888 0.321018 10.9608L10.273 1.00878Z"/></svg></div>',
	});
};
sliderBuild();

menuOpen();


var formCalculate = function(){
	var perimetr,
			sizeWindow = 0,
			heightHome = 0,
			tipeBrick,
			bottonGo = $('#result-go'),
			bottonReset = $('#result-reset'),
			resultTextBrick = $('#result-brick');

	function perimetrFunc(){
		perimetr = parseFloat($('#perimetr-all').val() * parseFloat($('#height-home').val()));
		sizeWindow = parseFloat($('#width-window').val() * parseFloat($('#height-window').val()));
	}

	bottonGo.on('click', function(){
		$('.calculate-brick--item-block .calculate-brick--item').each(function(){
			if(!$(this).find('input').val()) {
				$(this).find('.error').addClass('show-error');
			}
		});
		perimetrFunc();

		$('.radio-brick--block .radio-brick--item').find('input:checked').each(function(){
			tipeBrick = parseFloat($(this).attr('data-size'))
		});

		summAll = 64 * tipeBrick * (perimetr - sizeWindow);

		if(isNaN(summAll)){
			resultTextBrick.text('Введите параметры в поля');
		} else {
			resultTextBrick.text(prettify(summAll) + " шт");
		}
		function prettify(num) {
			var n = num.toString();
			return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
		}
	});

	$('.calculate-brick--item-block .calculate-brick--item').each(function(){
		var slice = $(this);
		$(this).find('input').on('input', function(){
			$(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
			slice.find('.error').removeClass('show-error');
		});
	});

	bottonReset.on('click', function(){
		resultTextBrick.text('Введите параметры в поля');
		$('#perimetr-all, #height-home, #width-window, #height-window').val('');
		$('.radio-brick--block .radio-brick--item').first().find('input[type="radio"]').prop('checked', true);
	});
};
formCalculate();


var submitCalculate = function(){
	$.each($('.qty-input'), function(){
		var slice = $(this);
		slice.find('i').click(function(){
			val = parseInt(slice.find('input').val());
			if ($(this).hasClass('less')){
				val = val - 1;
			} else if ($(this).hasClass('more')){
				val = val + 1;
			}
			if (val < 1 || isNaN(val)){
				val = 1;
			}
			slice.find('input').val(val);
		});
	});

	var summPrice = $('#summ-price'),
			summResult = $('#result-summ--number'),
			resultFildNum = 0,
			fildNum = $('.qty-input');

	function prettify(num) {
		var n = num.toString();
		return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
	}
	summResult.text(summPrice.text() + " руб");
	fildNum.find('input').on('input', function(){
		resultFildNum = $(this).val() * parseFloat(summPrice.text());
		summResult.text(prettify(Math.floor(resultFildNum * 100) / 100) + " руб");
	});
	$('.qty-input i').on('click', function(){
		resultFildNum = fildNum.find('input').val() * parseFloat(summPrice.text());
		summResult.text(prettify(Math.floor(resultFildNum * 100) / 100) + " руб");
	});
};

if($('.qty-input').length) {
	submitCalculate();
}


if($('#map-contact').length) {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map-contact', {
			center: [56.889434, 37.330327],
			zoom: 12,
			controls: ['zoomControl'],
			// behaviors: []
		}, {
			searchControlProvider: 'yandex#search'
		}),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        	'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        	),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        	hintContent: 'Собственный значок метки',
        	balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icon/location.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
          });

        myMap.geoObjects
        .add(myPlacemark)
      });
}

function init2() {
	// Создаем массив с данными.
      var myPoints = [
            { coords: [55.77, 37.46], idItems: 'id1' },
            { coords: [55.66, 37.48], text: 'Кафе' },
            { coords: [55.65, 37.42], text: 'Ресторан' },
            { coords: [55.64, 37.54], text: 'Музей' },
            { coords: [55.54, 37.52], text: 'Библиотека' },
            { coords: [55.53, 37.56], text: 'Школа' },
        ];
    var myMap = new ymaps.Map('dealer-map', {
    	center: [55.7, 37.5],
    	zoom: 10,
    	controls: ['zoomControl'],
    	// behaviors: ['drag'],
        }),
    // Создаем коллекцию.
        myCollection = new ymaps.GeoObjectCollection();
    

    // Заполняем коллекцию данными.
    // for (var i = 0, l = myPoints.length; i < l; i++) {
    //     var point = myPoints[i];
    //     myCollection.add(new ymaps.Placemark(
    //         point.coords,

    //     ));
    // }



    // myCollection.events
    //     .add('mouseenter', function (e) {
    //         e.get('target').options.set('preset', 'islands#greenIcon');
    //     })
    //     .add('mouseleave', function (e) {
    //         e.get('target').options.unset('preset');
    //     });

    // Добавляем коллекцию меток на карту.
    myMap.geoObjects.add(myCollection);

};


if($('#dealer-map').length) {
	ymaps.ready(init);
}

// var placemarks = [
//     {
//         latitude: 59.97,
//         longitude: 30.31,
//         hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
//         balloonContent: [
//             '<div class="map__balloon">',
//             '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
//             'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19',
//             '</div>'
//         ]
//     },
//     {
//         latitude: 59.94,
//         longitude: 30.25,
//         hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
//         balloonContent: [
//             '<div class="map__balloon">',
//             '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
//             'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
//             '</div>'
//         ]
//     },
//     {
//         latitude: 59.93,
//         longitude: 30.34,
//         hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
//         balloonContent: [
//             '<div class="map__balloon">',
//             '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
//             'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
//             '</div>'
//         ]
//     }
// ],
// geoObjects= [];

var groups = [
	{
	name: "Famous monuments",
	style: "islands#redIcon",
	items: [
	{
		center: [50.426472, 30.563022],
		name: "Monument &quot;Motherland&quot;"
	},
	{
		center: [50.45351, 30.516489],
		name: "Monument &quot;Bogdan Khmelnitsky&quot;"
	},
	{
		center: [50.454433, 30.529874],
		name: "Druzhby Narodov Arch"
	}
	]},
	{
		name: "Pokushaiki",
		style: "islands#greenIcon",
		items: [
		{
			center: [50.50955, 30.60791],
			name: "Restaurant &quot;Kalinka-Malinka&quot;"
		},
		{
			center: [50.429083, 30.521708],
			name: "Bar &quot;Salo-bar&quot;"
		},
		{
			center: [50.450843, 30.498271],
			name: "Absinthe bar  &quot;Palata No. 6&quot;"
		},
		{
			center: [50.454834, 30.516498],
			name: "Restaraunt &quot;Spotykach&quot;"
		}
		]},
		{
			name: "Original museums",
			style: "islands#orangeIcon",
			items: [
			{
				center: [50.443334, 30.520163],
				name: "The Museum of gramophones and vintage musical instruments"
			},
			{
				center: [50.446977, 30.505269],
				name: "Museum of the history of medicine or Anatomical theater"
			},
			{
				center: [50.452512, 30.530889],
				name: "The Museum of water. Water information center"
			}
			]},
			{
				name: "Goodies",
				style: "islands#blueIcon",
				items: [
				{
					center: [50.45987, 30.516174],
					name: "The castle of Richard the Lion-heart"
				},
				{
					center: [50.445049, 30.528598],
					name: "&quot;House with chimeras&quot;"
				},
				{
					center: [50.449156, 30.511809],
					name: "The House Of Knight"
				}
				]}
				];

// var centerMap = [55.753215, 37.622504];
// var lists = [
// 	{
// 		id: 1,
// 		center: [55.789422, 37.700351],
// 		name: "Леруа Мерлен",
// 		address: "ул. 3 мая, ТРК “Горки”, 2 этаж",
// 		clock: "c 10:00 до 21:00",
// 		stops: "<b>Остановка:</b> ТРК “Горки”, автобусы №44, №153, №88, №81",
// 		pey: "<b>Оплата:</b> Наличные, банковские карты, карты рассрочки",
// 		gallery: ['img/map-image1.png', 'img/map-image2.png']
// 	},
// 	{
// 		id: 2,
// 		center: [55.789422, 37.580351],
// 		name: "Леруа Мерлен 2",
// 		address: "ул. 3 мая, ТРК “Горки”, 2 этаж",
// 		clock: "c 10:00 до 21:00",
// 		stops: "<b>Остановка:</b> ТРК “Горки”, автобусы №44, №153, №88, №81",
// 		pey: "<b>Оплата:</b> Наличные, банковские карты, карты рассрочки",
// 		gallery: ['img/map-image1.png', 'img/map-image2.png']
// 	},
// 	{
// 		id: 3,
// 		center: [55.785687, 37.564192],
// 		name: "Леруа Мерлен Ростовское",
// 		address: "ул. Героя Антипова 33, вход с угла здания.",
// 		clock: "c 10:00 до 21:00",
// 		stops: "<b>Остановка:</b> ТРК “Горки”, автобусы №44, №153, №88, №81",
// 		pey: "<b>Оплата:</b> Наличные, банковские карты, карты рассрочки"
// 	},
// 	{
// 		id: 4,
// 		center: [55.753181, 37.583185],
// 		name: "ИП Михалкович",
// 		address: "ул. Ленина, ТЦ “Ленинский”, 1 этаж",
// 		clock: "c 10:00 до 21:00",
// 		stops: "<b>Остановка:</b> ТРК “Горки”, автобусы №44, №153, №88, №81",
// 		pey: "<b>Оплата:</b> Наличные, банковские карты, карты рассрочки",
// 		gallery: ['img/brick-small2.png', 'img/brick-small3.png', 'img/brick-small4.png']
// 	},
// 	{
// 		id: 5,
// 		center: [55.747442, 37.624733],
// 		name: "Еще адресс 1",
// 		address: "ул. Ленина, ТЦ “Ленинский”, 1 этаж",
// 		clock: "c 10:00 до 21:00",
// 		stops: "<b>Остановка:</b> ТРК “Горки”, автобусы №44, №153, №88, №81",
// 		pey: "<b>Оплата:</b> Наличные, банковские карты, карты рассрочки"
// 	}
// ];

function init() {

	var createContClick = function(slice){
		var listAppend = $('.dealer-sidebar'),
		cloneLists;
		console.log(listAppend)
		setTimeout(showPrewievBlock, 500);
		function showPrewievBlock(){
			cloneLists = slice.parent().clone()
			console.log(cloneLists.appendTo(listAppend.find('#dealer-list-wiev--main')))
			listAppend.find('.dealer-list-wiev').addClass('is-show');
		}
	};

    // Creating an instance of the map.
    var myMap = new ymaps.Map('dealer-map', {
            center: centerMap,
            zoom: 12,
            controls: [],
        }, {
            searchControlProvider: 'yandex#search'
        }),
    		myPlacemark,
        // The container for the menu.
        menuList = $('<ul class="dealer-list"/>');
//      var objectManager = new ymaps.ObjectManager( {} );
// myMap.objectManager.events.add(['click'], function (e) {
//   var objectId = e.get('objectId'); //Твоя цепочка?
//   console.log(objectId); //Мой..)
// });
        
    // for (var i = 0, l = groups.length; i < l; i++) {
    //     createMenuGroup(groups[i]);
    // }

    for (var i = 0, l = lists.length; i < l; i++) {
        createDealerList(lists[i]);
        // console.log(lists[i].id)
        // console.log(lists[i].center)
    }

    // // Слушаем клик на карте.
    myMap.geoObjects.events.add('click', function (e) {
    	// var coordsClick = e.get('coords');
    	var marker = e.get('target'),
	    	id = marker.properties.get('itemId');
	    	// console.log(id);
	    	$('[data-id]').each(function(index, value){
	    		var count = $(this).attr("data-id");
	    		console.log($(this))
	    		$(this).find('.links-map').removeClass('is-active');
	    		if(+count === id) {
	    			$(this).find('.links-map').addClass('is-active');
	    			createContClick($(this));
	    		}
	    	});
	    	// document.querySelectorAll('[data-id]').forEach(function(n, i) {
	    	// 	console.log(+n.dataset.id === id)
	    	// 	if(+n.dataset.id === id) {

	    	// 	}
	    	// 	console.log(n)
	    	// 	// console.log($(this))
	    	// 	n.classList.toggle('is-active', +n.dataset.id === id);
	    	// });
    });

    // https://leroymerlin.ru/etc.clientlibs/elbrus/clientlibs/map.min.d14c21039a22a1e696a09eb63cc41d73.js

    function createDealerList (group) {
    	
    	var gallery,
    			stops = '<span class="stops hide-in">'+ group.stops +'</span>',
    			pays = '<span class="pays hide-in">'+ group.pey +'</span>',
    			clock = '<span class="clock-map"><img src="img/icon/clock-icon.png" />' + group.clock + '</span>';
    			// clock = '<span class="clock-map"><img src="'+homeUrl+'/img/icon/clock-icon.png" />' + group.clock + '</span>';

    	function onCheckData(data){
    		var images = [];
    		if(data == undefined){
    			return "";
    		} else {
    			for(var i = 0; i<data.length; i++) {
    				images += '<img src="'+data[i]+'"/>';
    			}
    			gallery = '<span class="gallery-wrapper hide-in">'+images+'</span>';
    			return gallery;
    		}
    	}

    	var options = {
    		hideIcon: false
    	};
    	
    	var menuListItem = $('<li data-id="'+group.id+'"><a href="#" class="links-map"><i class="icon-red"></i>' + group.name + '<span class="address-map">' + group.address + '</span>'+clock+'</a><div class="wrapper-map">'+ stops + pays + onCheckData(group.gallery) + '</div></li>'),

    		collection = new ymaps.GeoObjectCollection(null, { preset: group.style }),

	    	// placemark = new ymaps.Placemark(group.center, { balloonContent: group.name });

	    	placemark = new ymaps.Placemark(group.center,
	    	{
	    		itemId: group.id,
	    		// balloonContentBody: group.name,
	    		hideIcon: false
	    	},
	    	{
	    		iconLayout: 'default#image',
	    		// iconImageHref: homeUrl+'/img/icon/icon-location.svg',
	    		iconImageHref: 'img/icon/icon-location.svg',
	    		iconImageSize: [30, 30],
	    		iconImageOffset: [-15, -15],

	    	});


    	menuListItem.appendTo(menuList)
    	.find('a') 
    	.bind('click', function () {
    		var slice = $(this);
    		
    		// console.log($(this).parent().css({'height':'520px'}))
    		if($(this).hasClass('is-active')){
    			$(this).removeClass('is-active');
    			// $(this).next('.wrapper-map').removeClass('is-active');
    			// $(this).parent().css({'height':'auto'});
    		}else {
    			// scrollFun();
    			// createNewList();
    			createContClick(slice);
    			menuList.find('li a').removeClass('is-active');
    			// menuList.find('li a').next('.wrapper-map').removeClass('is-active');
    			// menuList.find('li').css({'height':'auto'})
    			$(this).addClass('is-active');
    			// $(this).next('.wrapper-map').addClass('is-active');
    			// $(this).parent().css({'height':'520px'});
    		}

    		function createNewList(){
    			var listAppend = $('.dealer-sidebar'),
    					cloneLists;
    			setTimeout(showPrewievBlock, 500);
    			function showPrewievBlock(){
    				cloneLists = slice.parent().clone()
    				console.log(cloneLists.appendTo(listAppend.find('#dealer-list-wiev--main')))
    				listAppend.find('.dealer-list-wiev').addClass('is-show');
    			}
    			// console.log(listAppend)
    		};

    		function scrollFun() {
    			// var ofsd = menuList.position().top
    			console.log(slice.offset().top - menuList.offset().top)
    			setTimeout(function(){
    				$(".dealer-list").scrollTop(slice.offset().top - menuList.offset().top);
    			}, 1000)
    		}

  			// myMap.setCenter(e.get('coords'), 14, {
  			// 	checkZoomRange: true
  			// });
    		
    		// if (!placemark.balloon.isOpen()) {
    		// 	placemark.balloon.open();
    		// } else {
    		// 	placemark.balloon.close();
    		// }
    		return false;
    	});
    	myMap.geoObjects.add(collection);
    	collection.add(placemark);
    }


    $('.close-prewiev').click(function(e){
    	e.preventDefault();
    	$('.dealer-list-wiev').removeClass('is-show');
    	$('#dealer-list-wiev--main li').remove();
    });

    // Adding the menu to the BODY tag.
    // menu.appendTo($('.dealer-sidebar'));
    menuList.appendTo($('.dealer-sidebar'));
    // Setting the map zoom so all groups are visible.
    // myMap.setBounds(myMap.geoObjects.getBounds());
}



$( document ).ready(function() {
	$('#dealer-list-wiev--main li .links-map').on('click', function(e){
		e.preventDefault();
	});
});













