// button-burger
(() => {
    // burger-animation
    const burger = document.querySelector('.button-burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
    })
    // menu displayed
    burger.addEventListener('click', () => {
        const menu = document.querySelector('.header__menu')
        menu.classList.toggle('header__menu-display')
    })
})();