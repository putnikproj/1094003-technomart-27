var modal = document.querySelector(".contact-popup");
var modal_open = document.querySelector(".contacts__link");
var modal_close = document.querySelector(".contact-popup__close");
var modal_nameinput = document.querySelector(".contact-popup__input-name");
var modal_emailinput = document.querySelector(".contact-popup__input-email");
var modal_textinput = document.querySelector(".contact-popup__input-text");
var modal_form = document.querySelector(".contact-popup__form");
var isStorageSupport = true;
var storage = "";

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
    }
});