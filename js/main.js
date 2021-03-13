addEventListener('DOMContentLoaded', () => {
    const hero__btn = document.querySelector('.hero__btn');
    if (hero__btn) {
        hero__btn.addEventListener('click', () => {
            const hero__menu = document.querySelector('.hero__menu');
            hero__menu.classList.toggle('show');
        })
    }
})