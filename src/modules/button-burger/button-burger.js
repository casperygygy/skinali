(() => {
    const burger = document.querySelector('.button-burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
    })
})();