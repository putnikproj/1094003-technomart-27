var popup = document.querySelector(".added-to-basket-popup");
var popup_open = document.querySelectorAll(".product-card__add-to-cart");
var popup_close = document.querySelector(".added-to-basket-popup__close");

for (var i = 0; i < popup_open.length; i++) {
    popup_open[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.add("modal__opened");
    });
}

popup_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__opened");
});