let burger = document.querySelector(".header-burger");
let goTop = document.querySelector(".header__nav");

burger.onclick = function () {
    goTop.classList.toggle("goTop");
    burger.classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
};
