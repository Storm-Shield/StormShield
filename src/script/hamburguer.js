const body = document.body;

function menuView() {

    body.style.overflowY = 'hidden';
    console.log('evento chamado')
    let menu = document.querySelector('.menu-mobile');
    let icon = document.getElementById('menu-hamburger')

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        body.style.overflowY = 'auto';
        icon.className = "charm--menu-hamburger";
    } else {
        menu.classList.add('open');
        body.style.overflowY = 'hidden';
        icon.className = 'line-md--menu-to-close-transition';
    }

}

document.addEventListener('click', function (event) {

    let menu = document.querySelector('.menu-mobile');
    let icon = document.getElementById('menu-hamburger');
    let menuMobile = document.querySelector('.button-menu-mobile')
    if (!menu.contains(event.target) && !menuMobile.contains(event.target)) {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            icon.className = "charm--menu-hamburger";
            body.style.overflowY = 'auto';
        }
    }
})