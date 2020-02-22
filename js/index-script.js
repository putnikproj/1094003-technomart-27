// Contact us
var modal = document.querySelector(".contact-popup");
var modal_open = document.querySelector(".contacts__link");
var modal_close = document.querySelector(".contact-popup__close");
var modal_nameinput = document.querySelector(".contact-popup__input-name");
var modal_emailinput = document.querySelector(".contact-popup__input-email");
var modal_textinput = document.querySelector(".contact-popup__input-text");
var modal_form = document.querySelector(".contact-popup__form");
var isStorageSupport = true;
var storage = "";

// Map
var map = document.querySelector(".map-popup");
var map_open = document.querySelector(".contacts__open-popup");
var map_close = document.querySelector(".map-popup__close");

// Slides
var slides = document.querySelectorAll(".menu__slider__item");
var slides_amount = slides.length - 1;
var slides_current = 0;
var slides_button = document.querySelectorAll(".menu__slider__nav-item");
var pagination = document.querySelectorAll(".menu__slider__pagination__item");
var pagination_amount = pagination.length - 1;
var pagination_current = 0;

// Service
var service_list = document.querySelector(".service__list");
var service_items = document.querySelectorAll(".service__item");
var service_blocks = document.querySelectorAll(".service__block");


// Contact us

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

modal_open.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal__opened");
    if (storage) {
        modal_nameinput.value = localStorage.getItem("name");
        modal_emailinput.value = localStorage.getItem("email");
        modal_textinput.focus();
    } else {
        modal_nameinput.focus();
    }
});

modal_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal__opened");
    modal.classList.remove("modal__error");
});

modal_form.addEventListener("submit", function (evt) {
    if (!modal_nameinput.value || !modal_emailinput.value || !modal_textinput.value ) {
        evt.preventDefault();
        modal.classList.remove("modal__error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal__error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", modal_nameinput.value);
            localStorage.setItem("email", modal_emailinput.value);
        }
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

// Map

map_open.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("modal__opened");
});

map_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("modal__opened");
});

// Slider

for (var i = 0; i < 2; i++) {
    (function (index) {
        slides_button[index].addEventListener("click", function (evt) {
            evt.preventDefault();
            slides[slides_current].classList.remove("menu__slider__active-item");
            if (index == 0) {
                slides_current = slides_current - 1;
                if (slides_current < 0) {
                    slides_current = slides_amount;
                };
            } else {
                slides_current = slides_current + 1;
                if (slides_current > slides_amount) {
                    slides_current = 0;
                };
            }
            slides[slides_current].classList.add("menu__slider__active-item");

            // Pagination
            pagination[pagination_current].classList.remove("menu__slider__pagination__item-active");
            if (index == 0) {
                pagination_current = pagination_current - 1;
                if (pagination_current < 0) {
                    pagination_current = pagination_amount;
                };
            } else {
                pagination_current = pagination_current + 1;
                if (pagination_current > pagination_amount) {
                    pagination_current = 0;
                };
            }
            pagination[pagination_current].classList.add("menu__slider__pagination__item-active");
        });
    })(i);
}

// Service

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