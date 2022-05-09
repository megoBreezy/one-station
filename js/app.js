
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

//
let accounBtn = document.querySelector('.account__btn');

accounBtn.onclick = function (evt) { 
    evt.preventDefault();   
    document.querySelector('.account-list').classList.toggle('account-list--active');
    document.querySelector('.account__btn').classList.toggle('account__btn--rotate');
}

//select-sm
const selects = document.querySelectorAll('.select');

for (const select of selects) {
    var config = {
        create: false,
    };
    new TomSelect(select,config);
}


//aos
AOS.init({
    duration: 1200,
})

//accordeon
var accordeon = document.getElementsByClassName("accordeon__link");
var i;

for (i = 0; i < accordeon.length; i++) {
    accordeon[i].addEventListener("click", function(e) {
        e.preventDefault();

        this.classList.toggle("is-active");

        var panel = this.nextElementSibling;

        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

//modal
const modalBtnItems = document.querySelectorAll('.modal-btn');
const modals = document.querySelectorAll('.modal');
const modalsClose = document.querySelectorAll('.modal__close');
const overlay = document.getElementById('overlay');

for (const modalBtn of modalBtnItems) {
    modalBtn.addEventListener('click', function(event) {
        event.preventDefault();

        for (const modal of modals) {
            modal.classList.remove('is-active');
            overlay.classList.remove('is-active');
            document.body.classList.remove('body-overflow');
        }

        const modalActive = document.getElementById(this.getAttribute('href')); 
        modalActive.classList.add('is-active');
        overlay.classList.add('is-active');
        document.body.classList.add('body-overflow');
    });
}

for (const modalClose of modalsClose) {
    modalClose.addEventListener('click', function(event) {
        event.preventDefault();

        for (const modal of modals) {
            modal.classList.remove('is-active');
            overlay.classList.remove('is-active');
            document.body.classList.remove('body-overflow');
        }
    });
}

//filter btn
if(document.querySelector('.filter-btn')) {
    var filterBtn = document.querySelector(".filter-btn");
    var filter = document.querySelector(".filter-container");

    filterBtn.addEventListener("click", function(e) {
        e.preventDefault();

        this.classList.toggle("is-active");
        filter.classList.toggle("is-active");
    });
}