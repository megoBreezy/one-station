"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

var toggleMenu = function toggleMenu() {
  menu.classList.toggle('menu--open');
  btnMenu.classList.toggle('btn-menu--active');
  document.body.classList.toggle('body-overflow');
};

btnMenu.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
});
document.addEventListener('click', function (e) {
  var target = e.target;
  var its_menu = target == menu || menu.contains(target);
  var its_btnMenu = target == btnMenu;
  var menu_is_active = menu.classList.contains('menu--open');

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
}); //

var accounBtn = document.querySelector('.account__btn');

accounBtn.onclick = function (evt) {
  evt.preventDefault();
  document.querySelector('.account-list').classList.toggle('account-list--active');
  document.querySelector('.account__btn').classList.toggle('account__btn--rotate');
}; //select-sm


var selects = document.querySelectorAll('.select');

var _iterator = _createForOfIteratorHelper(selects),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var select = _step.value;
    var config = {
      create: false
    };
    new TomSelect(select, config);
  } //aos

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

AOS.init({
  duration: 1200
}); //accordeon

var accordeon = document.getElementsByClassName("accordeon__link");
var i;

for (i = 0; i < accordeon.length; i++) {
  accordeon[i].addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("is-active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} //modal


var modalBtnItems = document.querySelectorAll('.modal-btn');
var modals = document.querySelectorAll('.modal');
var modalsClose = document.querySelectorAll('.modal__close');
var overlay = document.getElementById('overlay');

var _iterator2 = _createForOfIteratorHelper(modalBtnItems),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var modalBtn = _step2.value;
    modalBtn.addEventListener('click', function (event) {
      event.preventDefault();

      var _iterator4 = _createForOfIteratorHelper(modals),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var modal = _step4.value;
          modal.classList.remove('is-active');
          overlay.classList.remove('is-active');
          document.body.classList.remove('body-overflow');
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var modalActive = document.getElementById(this.getAttribute('href'));
      modalActive.classList.add('is-active');
      overlay.classList.add('is-active');
      document.body.classList.add('body-overflow');
    });
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

var _iterator3 = _createForOfIteratorHelper(modalsClose),
    _step3;

try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var modalClose = _step3.value;
    modalClose.addEventListener('click', function (event) {
      event.preventDefault();

      var _iterator5 = _createForOfIteratorHelper(modals),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var modal = _step5.value;
          modal.classList.remove('is-active');
          overlay.classList.remove('is-active');
          document.body.classList.remove('body-overflow');
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    });
  } //filter btn

} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}

if (document.querySelector('.filter-btn')) {
  var filterBtn = document.querySelector(".filter-btn");
  var filter = document.querySelector(".filter-container");
  filterBtn.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("is-active");

    if (filter.style.maxHeight) {
      filter.style.maxHeight = null;
    } else {
      filter.style.maxHeight = filter.scrollHeight + "px";
    }
  });
}