// Contact us
var modal = document.querySelector(".contact-popup");
var modal_open = document.querySelector(".contacts__link");
var modal_close = document.querySelector(".contact-popup__close");
var modal_name_input = document.querySelector(".contact-popup__input-name");
var modal_email_input = document.querySelector(".contact-popup__input-email");
var modal_text_input = document.querySelector(".contact-popup__input-text");
var modal_form = document.querySelector(".contact-popup__form");

// Map
var map = document.querySelector(".map-popup");
var map_open = document.querySelector(".contacts__open-popup");
var map_close = document.querySelector(".map-popup__close");

// Slides
var slides = document.querySelectorAll(".menu__slider__item");
var slides_amount = slides.length - 1;
var slides_current = 0;
var slides_button_left = document.querySelector(".menu__slider__nav-left");
var slides_button_right = document.querySelector(".menu__slider__nav-right");
var pagination = document.querySelectorAll(".menu__slider__pagination__item");

// Service
var service_list = document.querySelector(".service__list");
var service_items = document.querySelectorAll(".service__item");
var service_blocks = document.querySelectorAll(".service__block");


// Contact us

if (typeof(modal) != "undefined" && modal != null) {
    modal_open.addEventListener("click", function (evt) {
        evt.preventDefault();
        modal.classList.add("modal__opened");
        modal_name_input.focus();
    });
    
    modal_close.addEventListener("click", function (evt) {
        evt.preventDefault();
        modal.classList.remove("modal__opened");
        modal.classList.remove("modal__error");
    });
    
    modal_form.addEventListener("submit", function (evt) {
        if (!modal_name_input.value || !modal_email_input.value || !modal_text_input.value ) {
            evt.preventDefault();
            modal.classList.remove("modal__error");
            modal.offsetWidth = modal.offsetWidth;
            modal.classList.add("modal__error");
        }
    });
    
    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (modal.classList.contains("modal__opened")) {
                modal.classList.remove("modal__opened");
                modal.classList.remove("modal__error");
            }
            if (map.classList.contains("modal__opened")) {
                map.classList.remove("modal__opened");
            }
        }
    });
}

// Map

if (typeof(map) != "undefined" && map != null) {
    map_open.addEventListener("click", function (evt) {
        evt.preventDefault();
        map.classList.add("modal__opened");
    });
    
    map_close.addEventListener("click", function (evt) {
        evt.preventDefault();
        map.classList.remove("modal__opened");
    });
}

// Slider

if (typeof(slides[0]) != "undefined" && slides[0] != null) {
    function change_slide(evt, direction) {
        evt.preventDefault();
    
        slides[slides_current].classList.remove("menu__slider__active-item");
        pagination[slides_current].classList.remove("menu__slider__pagination__item-active");
    
        slides_current = slides_current + direction;
        if ((direction < 0) && (slides_current < 0)) { slides_current = slides_amount; };
        if ((direction > 0) && (slides_current > slides_amount)) { slides_current = 0; };
    
        slides[slides_current].classList.add("menu__slider__active-item");
        pagination[slides_current].classList.add("menu__slider__pagination__item-active");
    }
    
    slides_button_left.addEventListener("click", function (evt) { change_slide(evt, -1) }); 
    slides_button_right.addEventListener("click", function (evt) { change_slide(evt, +1) }); 
}

// Service

if (typeof(service_list) != "undefined" && service_list != null) {
    service_list.addEventListener("click", function (evt) {
        var activeId = evt.target.parentNode.dataset.id; 
        for (var i = 0; i < service_items.length; i++) {        
            if (service_items[i].dataset.id === activeId) {
                service_items[i].classList.add("service__active-item");
                service_blocks[i].classList.add("service__active-block");    
            } else {
                service_items[i].classList.remove("service__active-item");
                service_blocks[i].classList.remove("service__active-block");
            }
        }
    });
}