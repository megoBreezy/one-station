$(document).ready(function () {
  // .modal-btn
  $('.modal-btn').click(function (e) {
      e.preventDefault();

      var modal = "#" + $(this).attr('href');

      $('.modal').removeClass('is-active');
      $(modal).addClass('is-active');
      $('body').removeClass('body-overflow');
      $('#overlay').addClass('is-active');
  });

  $('.modal__close').click(function (e) {
      e.preventDefault();

      if(!$(this).hasClass('modal-btn')) {
          $('.modal').removeClass('is-active');
          $('body').removeClass('body-overflow');
          $('#overlay').removeClass('is-active');
      }
  });

  $('.select').select2({
    minimumResultsForSearch: Infinity,
    width: 'resolve',
    dropdownAutoWidth: true
  });
});

"use strict";

var btnMenu = document.querySelector(".btn-menu");
var menu = document.querySelector(".menu");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("menu--open");
  btnMenu.classList.toggle("btn-menu--active");
  document.body.classList.toggle("body-overflow");
};

btnMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});
document.addEventListener("click", function (e) {
  var target = e.target;
  var its_menu = target == menu || menu.contains(target);
  var its_btnMenu = target == btnMenu;
  var menu_is_active = menu.classList.contains("menu--open");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
}); //

var accounBtn = document.querySelector(".account__btn");

accounBtn.onclick = function (evt) {
  evt.preventDefault();
  document
    .querySelector(".account-list")
    .classList.toggle("account-list--active");
  document
    .querySelector(".account__btn")
    .classList.toggle("account__btn--rotate");
};


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

//aos
AOS.init({
  duration: 1200,
})