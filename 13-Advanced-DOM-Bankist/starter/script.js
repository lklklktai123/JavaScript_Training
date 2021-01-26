'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
btnsOpenModal.forEach(value => value.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//
console.log(document.documentElement);
console.log(document.body);
const header = document.querySelector('.header');
console.log(document.querySelectorAll('.nav__item'));
console.log(document.getElementById('section--1'));
console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByClassName('btn'));
// insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'P N T T';
message.innerHTML =
  '<p>P N T T</p><button class="btn--close-cookie">Click</button>';
console.log(message);
//header.prepend(message);
//header.append(message.cloneNode(true));
//header.before(message);
//header.after(message);

console.log(header);
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     // message.parentElement.removeChild(message);
//   });
message.style.backgroundColor = '#37383d';
console.log(message.style.backgroundColor);
message.style.height = '50px';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 23 + 'px';
console.log(getComputedStyle(message).height);
document.documentElement.style.setProperty('--color-primary', '#ffcb03');

//Atribute
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.getAttribute('src'));
console.log(logo.className);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));
console.log(logo.dataset.aNumber);
//classes
logo.classList.add('a', 'b');
logo.classList.remove('a');
logo.classList.toggle('a');
logo.classList.contains('a');

const btnScrollto = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollto.addEventListener('click', function (e) {
  const slcoords = section1.getBoundingClientRect();
  console.log(slcoords.right);
  // window.scrollTo(
  //   slcoords.left + window.pageXOffset,
  //   slcoords.top + window.pageYOffset
  // );
  window.scrollTo({
    left: slcoords.left + window.pageXOffset,
    top: slcoords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  // modern
  // section1.scrollIntoView({ behavior: 'smooth' });
});
// navigation
// document.querySelectorAll('.nav__link').forEach(function (value) {
//   value.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  }
});
// oeprations
tabsContainer.addEventListener('click', function (e) {
  const linked = e.target.closest('.operations__tab');
  console.log(linked);
  if (!linked) return;
  tabs.forEach(value => value.classList.remove('operations__tab--active'));
  tabsContent.forEach(value =>
    value.classList.remove('operations__content--active')
  );
  linked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${linked.dataset.tab}`)
    .classList.add('operations__content--active');
});
// nav
const handleOver = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblinks = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblinks.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleOver.bind(0.5));
nav.addEventListener('mouseout', handleOver.bind(1));
// sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = { root: null, threshold: 0 };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const observerHeader = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
observerHeader.observe(header);
// lazy loading image
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
});
imgTargets.forEach(img => imgObserver.observe(img));
//slider

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  let curSlide = 0;
  let cleanAuto;
  const maxSlide = slides.length;
  const dotsContainer = document.querySelector('.dots');
  let autoSlide;
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  const activeDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide='${slide}']`)
      .classList.add('dots__dot--active');
  };
  const gotoSlider = function (slide) {
    slides.forEach((value, i) => {
      value.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
  };
  autoSlide = function (curSlide) {
    const setAutoSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
      console.log(curSlide);
      gotoSlider(curSlide);
      activeDots(curSlide);
    };
    cleanAuto = setInterval(setAutoSlide, 5000);
    return cleanAuto;
  };
  const init = function () {
    gotoSlider(0);
    createDots();
    activeDots(0);

    cleanAuto = autoSlide(curSlide);
  };
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    gotoSlider(curSlide);
    activeDots(curSlide);
    if (cleanAuto) clearInterval(cleanAuto);
    cleanAuto = autoSlide(curSlide);
    // clearInterval(autoSlide);
    // curSlideAuto = curSlide;
    // autoSlide();
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    gotoSlider(curSlide);
    activeDots(curSlide);
    if (cleanAuto) clearInterval(cleanAuto);
    cleanAuto = autoSlide(curSlide);

    // autoSlide();
  };

  //event click
  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      gotoSlider(slide);
      activeDots(slide);

      if (cleanAuto) clearInterval(cleanAuto);
      cleanAuto = autoSlide(slide);
    }
  });
  init();
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });
};
slider();

console.log('aaaaaaaaaaaaaa');
console.log(imgTargets);
const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   alert('aaaaa');
// });
const alert1 = function (e) {
  alert('aaaa');
  // h1.removeEventListener('mouseenter', alert1);
};
// h1.onmouseenter = function (e) {
//   alert('aa');
// };
// h1.addEventListener('mouseenter', alert1);
// setTimeout(() => h1.removeEventListener('mouseenter', alert1), 300000);
const randomInt = (number1, number2) =>
  Math.floor(Math.random() * (number1 - number2 + 1) + number2);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(randomInt(0, 255));
//   console.log(e.currentTarget, e.target);
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget, e.target);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget, e.target);
// });
console.log(h1);
console.log(h1.childNodes);
console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';
console.log(h1.parentNode);
console.log(h1.parentElement);
console.log(h1.closest('.header'));
// going sideways:siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (value) {
  console.log(value);
  // if (value !== h1) value.style.tranform = 0.8;
});
// window.addEventListener('click', function () {
//   prompt('aaaaa');
// });
