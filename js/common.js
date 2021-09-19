'use strict'

const onScrollHeader = () => {

 	const header = document.querySelector('.header__top')

 	let currentScroll;

	currentScroll = window.pageYOffset;
	
	if (currentScroll > 110) {
 		header.classList.add('header-fixed')
 	}
 	if (currentScroll < 110) {
 		header.classList.remove('header-fixed')
 	}

 	window.addEventListener('scroll', () => {

 		currentScroll = window.pageYOffset;

 		if (currentScroll > 110) {
 			header.classList.add('header-fixed')
 		}
 		if (currentScroll < 110) {
 			header.classList.remove('header-fixed')
 		}

 	});

}

const headerBurger = () => {
	const burger_button = document.querySelector('.header__top_burger')
	const slide_menu = document.querySelector('.slide_menu')
	const slide_menu_close = document.querySelector('.slide_menu__close')

	burger_button.addEventListener('click', function(event) {
		event.preventDefault()

		slide_menu.classList.add('active')
	})

	slide_menu_close.addEventListener('click', function(event) {
		event.preventDefault()

		slide_menu.classList.remove('active')
	})
}

const tabs_info_section = () => {
	const tab_button = document.querySelectorAll('.info__tab .item')
	const tab_wrap = document.querySelectorAll('.info__wrap_tab')

	tab_button.forEach((e, i) => {
		e.addEventListener('click', function(event) {
			event.preventDefault()

			for (let item of this.parentNode.children) {
				item.classList.remove('active')
			}

			this.classList.add('active')


			for (let item of tab_wrap[i].parentNode.children) {
				item.classList.remove('active')
			}

			tab_wrap[i].classList.add('active')
		})
	})
}

const slider_info_section = () => {
	const slider_info = document.querySelector('.info')

	const investment_left_init = new Swiper(slider_info.querySelector('.swiper'), {
		loop: true,
		observer: true,
		observeParents: true,

		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},

		navigation: {
			nextEl: slider_info.querySelector('.page_control__next'),
			prevEl: slider_info.querySelector('.page_control__prev'),
		},

		on: {
			init: function() {
				slider_info.querySelector('.page_control__count .first').innerHTML = this.realIndex + 1
				slider_info.querySelector('.page_control__count .last').innerHTML = this.$.length + 1
			},

			activeIndexChange: function() {
				slider_info.querySelector('.page_control__count .first').innerHTML = this.realIndex + 1
			}
		}
	})
}

const modal_video_init = (id, element) => {
	element.setContent(`<iframe class="yt_video" width="100%" height="380" src="https://www.youtube.com/embed/${id}?autoplay=1&controls=0&showinfo=0&rel=0&vq=hd720?version=3&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay="1"></iframe>`);
	element.open();
}

const video_play = () => {
	const button_play = document.querySelectorAll('.button_play');
	const modal = new tingle.modal({
		footer: false,
		stickyFooter: false,
		closeMethods: ['overlay', 'button', 'escape'],
		closeLabel: "Close",
		cssClass: ['custom-class-1', 'custom-class-2'],
		onOpen: function() {
			// console.log('modal open');
		},
		onClose: function() {
			const yt_video = document.querySelector('.yt_video');
			yt_video.setAttribute('src', '');
		},
		beforeClose: function() {
			return true;
			return false;
		}
	});

	button_play.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault();
			const id = this.getAttribute('data-video');
			modal_video_init(id, modal);
		});
	});
}

const section_map_info = () => {
	// const slider_mapinfo = document.querySelectorAll('.swiper-mapinfo')

	// slider_mapinfo.forEach(slider => {
	// 	const slider_mapinfo_init = new Swiper(slider.querySelector('.swiper'), {
	// 		loop: true,
	// 		observer: true,
	// 		observeParents: true,

	// 		pagination: {
	// 			el: slider.querySelector('.swiper-nav'),
	// 			// dynamicBullets: true,
	// 		},
	// 		navigation: {
	// 			nextEl: slider.querySelector('.swiper-page__next'),
	// 			prevEl: slider.querySelector('.swiper-page__prev'),
	// 		},
	// 	})
	// })


	const tab_items = document.querySelectorAll('.map_info .tab')
	const map_items = document.querySelectorAll('.map_info__control .item')

	tab_items.forEach((e, i) => {
		e.addEventListener('click', function(event) {
			event.preventDefault()
			
			for (let item of this.parentNode.children) {
				item.classList.remove('active')
			}
			this.classList.add('active')

			for (let item of map_items[i].parentNode.children) {
				item.classList.remove('active')
			}
			map_items[i].classList.add('active')
		})
	})

	map_items.forEach((e, i) => {
		const button = e.querySelector('.item__button')

		button.addEventListener('click', function(event) {
			event.preventDefault()

			const targetMapItem = this.parentNode.classList.contains('active')

			for (let item of e.parentNode.children) {
				if(targetMapItem === false) item.classList.remove('active')
			}

			e.classList.toggle('active')
			
			const targetTabItem = tab_items[i].classList.contains('active')
			for (let item of tab_items[i].parentNode.children) {
				if(targetTabItem === false) item.classList.remove('active')
				// item.classList.remove('active')
			}
			tab_items[i].classList.toggle('active')
		})
	})
}

const investment_section = () => {
	const investment = document.querySelector('.investment')

	const investment_left_init = new Swiper(investment.querySelector('.swiper_left'), {
		loop: true,
		observer: true,
		observeParents: true,

		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},

		navigation: {
			nextEl: investment.querySelector('.page_control__next'),
			prevEl: investment.querySelector('.page_control__prev'),
		},

		on: {
			init: function() {
				console.log(this)
				investment.querySelector('.page_control__count .first').innerHTML = this.realIndex + 1
				investment.querySelector('.page_control__count .last').innerHTML = this.$.length + 1
			},

			activeIndexChange: function() {
				investment.querySelector('.page_control__count .first').innerHTML = this.realIndex + 1
			}
		}
	})

	const investment_right_init = new Swiper(investment.querySelector('.swiper_right'), {
		loop: true,
		observer: true,
		observeParents: true,

		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},

		navigation: {
			nextEl: investment.querySelector('.page_control__next'),
			prevEl: investment.querySelector('.page_control__prev'),
		}
	})
}

const maskInit = () => {

	const mask_phone = document.querySelectorAll('.mask--phone');

	const im = new Inputmask("+7 (999) 999-99-99");
	if(mask_phone) {
		mask_phone.forEach(e => {
			im.mask(e);
		});
	}
}

// form

const modal_message = document.getElementById('modal_success')
const modal_phone = document.getElementById('modal_phone')
const modal_close = document.querySelectorAll('.modal_close')
const modal_button_active_phone = document.querySelectorAll('.js--modal-phone')
const modal_close_button = document.querySelectorAll('.modal_close_button')

modal_button_active_phone.forEach(e => {
	e.addEventListener('click', function(event) {
		event.preventDefault()

		modal_phone.classList.add('active')
	})
})

modal_close.forEach(e => {
	e.addEventListener('click', function(event) {
		event.preventDefault()

		e.closest('.modal_overlay').classList.remove('active')
	})
})

modal_close_button.forEach(e => {
	e.addEventListener('click', function(event) {
		event.preventDefault()

		e.closest('.modal_overlay').classList.remove('active')
	})
})

const add_class_error = (element) => {
	element.parentNode.classList.add('error');
}

const remove_class_error = (element) => {
	element.parentNode.classList.remove('error');
}

const add_message_error = (element) => {
	let error_element = document.createElement('span');
	error_element.classList.add('error-message');
	error_element.innerHTML = 'Данные введены некорректно';

	if(element.parentNode.querySelector('.error-message') == null) {
		element.insertAdjacentElement('afterEnd', error_element);
	}
}

const add_message_error_phone = (element) => {
	let error_element = document.createElement('span');
	error_element.classList.add('error-message');
	error_element.innerHTML = '*Телефон введен неверно';

	if(element.parentNode.querySelector('.error-message') == null) {
		element.insertAdjacentElement('afterEnd', error_element);
	}
}

const remove_message_error = (element) => {
	if(element.nextSibling != null) {
		element.nextSibling.remove();
	}
}

const validateName = (element) => {
	element.addEventListener('keyup', function(event) {
		if(this.value.length < 3) {
			add_class_error(this);
			add_message_error(this);
		} else {
			remove_class_error(this);
			remove_message_error(this);
		}
	})
}

const validatePhone = (element) => {
	element.addEventListener('keyup', function(event) {
		if(this.value.indexOf('_') > -1) {
			add_class_error(this);
			add_message_error_phone(this);
		} else {
			remove_class_error(this);
			remove_message_error(this);
		}
	});
}

const validateEmail = (element) => {
	element.addEventListener('keyup', function(event) {
		const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		if(reg.test(this.value) == false) {
			add_class_error(this);
			add_message_error(this);
		} else {
			remove_class_error(this);
			remove_message_error(this);
		}
	});
}

const checkedName = (element) => {
	if(element.value.length < 3) {
		add_class_error(element);
		add_message_error(element);
	} else {
		remove_class_error(element);
		remove_message_error(element);
	}
}

const checkedPhone = (element) => {
	if(element.value.indexOf('_') > -1 || element.value == '') {
		add_class_error(element);
		add_message_error_phone(element);
	} else {
		remove_class_error(element);
		remove_message_error(element);
	}
}

const checkedEmail = (element) => {
	const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if(reg.test(element.value) == false) {
		add_class_error(element);
		add_message_error(element);
	} else {
		remove_class_error(element);
		remove_message_error(element);
	}
}



const js_form = document.querySelectorAll('.js_form');


if(js_form) {
	js_form.forEach(e => {
		const input_name = e.querySelector('.js_name');
		const input_phone = e.querySelector('.js_phone');
		const input_email = e.querySelector('.js_email');

		const button = e.querySelector('.button-accent');

		if(input_name) validateName(input_name);
		if(input_phone) validatePhone(input_phone);
		if(input_email) validateEmail(input_email);

		e.addEventListener('submit', function(event) {
			event.preventDefault();

			if(input_name) checkedName(input_name);
			if(input_phone) checkedPhone(input_phone);
			if(input_email) checkedEmail(input_email);
			

			if(e.querySelector('.error-message') == null) {

				e.querySelectorAll('input').forEach(input => input.value = "");
				modal_message.classList.remove('active')
				
				modal_phone.classList.remove('active')
				modal_success.classList.add('active')
			}

		});
	});
}

const layouts_section = () => {
	const slider_layout = document.querySelector('.layouts')

	const slider_layout_init = new Swiper(slider_layout.querySelector('.swiper'), {
		loop: true,
		slidesPerView: 'auto',
  		spaceBetween: 28,
		observer: true,
		observeParents: true,
		centeredSlides: true,
		centeredSlidesBounds: true,

		navigation: {
			nextEl: slider_layout.querySelector('.slider_nav__next'),
			prevEl: slider_layout.querySelector('.slider_nav__prev'),
		},

		on: {
			init: function() {
				slider_layout.querySelector('.slider_nav__count .first').innerHTML = this.realIndex + 1
				slider_layout.querySelector('.slider_nav__count .last').innerHTML = this.snapIndex
			},

			activeIndexChange: function() {
				slider_layout.querySelector('.slider_nav__count .first').innerHTML = this.realIndex + 1
			}
		}
	})
}

const gallery_section = () => {
	const slider_gallery = document.querySelector('.gallery')

	const slider_gallery_init = new Swiper(slider_gallery.querySelector('.swiper'), {
		loop: true,
		slidesPerView: 'auto',
  		spaceBetween: 0,
		observer: true,
		observeParents: true,
		centeredSlides: true,
		centeredSlidesBounds: true,
		// lazy: true,
		// preloadImages: true,
		// loadPrevNext: true,

		navigation: {
			nextEl: slider_gallery.querySelector('.page_control__next'),
			prevEl: slider_gallery.querySelector('.page_control__prev'),
		},

		on: {
			init: function() {
				slider_gallery.querySelector('.page_control__count .first').innerHTML = this.realIndex + 1
				slider_gallery.querySelector('.page_control__count .last').innerHTML = this.snapIndex
			},

			activeIndexChange: function() {
				slider_gallery.querySelector('.page_control__count .first').innerHTML = this.realIndex + 1
			}
		}
	})
}

scrollSpy('.slide_menu__nav', {
    sectionSelector: '[data-scroll-block]',
    targetSelector: 'a',
    offset: 400,
    activeClass: 'active',
});

const anim_sect = document.querySelectorAll('.animate-sect');

ScrollReveal().reveal(anim_sect, {
	easing: 'ease-in',
	duration: 500,
	reset: true,
	mobile: false
});

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault()

        let href = this.getAttribute('href').substring(1)

        const scrollTarget = document.getElementById(href)
		const header_top_height = document.querySelector('.header__top').clientHeight
        let topOffset = 0
        const elementPosition = scrollTarget.getBoundingClientRect().top

		topOffset = header_top_height
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})

onScrollHeader()

headerBurger()

tabs_info_section()

slider_info_section()

video_play()

section_map_info()

maskInit()

layouts_section()

gallery_section()

investment_section()