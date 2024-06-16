const navs = document.querySelectorAll('nav');
navs.forEach(nav => {
    nav.addEventListener('click', () => {
        toggleNav();
    });
});

const btnMenu = document.querySelector('.icon-menu');
btnMenu.addEventListener('click', () => {
    toggleNav();
});

function toggleNav(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('hidden');
};