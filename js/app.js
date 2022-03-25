
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

const toggleMenu = function() {
    menu.classList.toggle('menu--open');
    btnMenu.classList.toggle('btn-menu--active');
    document.body.classList.toggle('body-overflow');
}

btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains('menu--open');
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});


let accounBtn = document.querySelector('.account__btn');

accounBtn.onclick = function (evt) { 
    evt.preventDefault();   
    document.querySelector('.account-list').classList.toggle('account-list--active');
    document.querySelector('.account__btn').classList.toggle('account__btn--rotate');
}


//aos
AOS.init({
    duration: 1200,
})