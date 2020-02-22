var modal = document.querySelector(".contact-popup");
var modal_open = document.querySelector(".contacts__link");
var modal_close = document.querySelector(".contact-popup__close");
var modal_nameinput = document.querySelector(".contact-popup__input-name");
var modal_emailinput = document.querySelector(".contact-popup__input-email");
var modal_textinput = document.querySelector(".contact-popup__input-text");
var modal_form = document.querySelector(".contact-popup__form");
var isStorageSupport = true;
var storage = "";

var map = document.querySelector(".map-popup");
var map_open = document.querySelector(".contacts__open-popup");
var map_close = document.querySelector(".map-popup__close");

var slides = document.querySelectorAll(".menu__slider__item");
var slides_amount = slides.length - 1;
var slides_current = 0;
var slides_leftbutton = document.querySelector(".menu__slider__nav-item-left");
var slides_rightbutton = document.querySelector(".menu__slider__nav-item-right");
var pagination = document.querySelectorAll(".menu__slider__pagination__item");
var pagination_amount = pagination.length - 1;
var pagination_current = 0;

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

// Contact us

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

slides_rightbutton.addEventListener("click", function (evt) {
    evt.preventDefault();
    slides[slides_current].classList.remove("menu__slider__active-item");
    if (slides_current + 1 > slides_amount) {
        slides[0].classList.add("menu__slider__active-item");
    } else {
        slides[slides_current + 1].classList.add("menu__slider__active-item");
    }
    slides_current = slides_current + 1;
    if (slides_current > slides_amount) {
        slides_current = 0;
    };
    // Pagination
    pagination[pagination_current].classList.remove("menu__slider__pagination__item-active");
    if (pagination_current + 1 > pagination_amount) {
        pagination[0].classList.add("menu__slider__pagination__item-active");
    } else {
        pagination[pagination_current + 1].classList.add("menu__slider__pagination__item-active");
    }
    pagination_current = pagination_current + 1;
    if (pagination_current > pagination_amount) {
        pagination_current = 0;
    };
});

slides_leftbutton.addEventListener("click", function (evt) {
    evt.preventDefault();
    slides[slides_current].classList.remove("menu__slider__active-item");
    if (slides_current - 1 < 0) {
        slides[slides_amount].classList.add("menu__slider__active-item");
    } else {
        slides[slides_current - 1].classList.add("menu__slider__active-item");
    }
    slides_current = slides_current - 1;
    if (slides_current < 0) {
        slides_current = slides_amount;
    };
    // Pagination
    pagination[pagination_current].classList.remove("menu__slider__pagination__item-active");
    if (pagination_current - 1 < 0) {
        pagination[pagination_amount].classList.add("menu__slider__pagination__item-active");
    } else {
        pagination[pagination_current - 1].classList.add("menu__slider__pagination__item-active");
    }
    pagination_current = pagination_current - 1;
    if (pagination_current < 0) {
        pagination_current = pagination_amount;
    };
});
