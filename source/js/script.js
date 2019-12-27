var navToggle = document.querySelector('.nav__toggle');

navToggle.classList.remove('nav__toggle--nojs');
navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('nav__toggle--closed')) {
    navToggle.classList.remove('nav__toggle--closed');
    navToggle.classList.add('nav__toggle--opened');
  } else {
    navToggle.classList.add('nav__toggle--closed');
    navToggle.classList.remove('nav__toggle--opened');
  }
});


var addLink = document.querySelector(".superior__btn");
var addPopup = document.querySelector(".modal--add-cart");
var addOverlay = document.querySelector(".overlay");
var addClose = document.querySelector(".modal__btn");
var addcartsLink = document.querySelectorAll(".catalog-list__cart");

addLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  addPopup.classList.add("modal--show");
  addOverlay.classList.add("overlay--show");
});

for (var i=0; i < addcartsLink.length; i++) {
  addcartsLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    addPopup.classList.add("modal--show");
    addOverlay.classList.add("overlay--show");
  });
};

addClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addPopup.classList.remove("modal--show");
  addOverlay.classList.remove("overlay--show");
});

addOverlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  addPopup.classList.remove("modal--show");
  addOverlay.classList.remove("overlay--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (addPopup.classList.contains("modal--show")) {
      addPopup.classList.remove("modal--show");
      addOverlay.classList.remove("overlay--show");
    }
  }
});


ymaps.ready(function () {
var myMap = new ymaps.Map('map', {
    center: [59.938907, 30.323083],
    zoom: 17
  }, {
      searchControlProvider: 'yandex#search'
  }),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
  }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-23, -83]
  });
  myMap.geoObjects
  .add(myPlacemark)
  });
