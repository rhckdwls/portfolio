'use strict';

// 네브바 스크롤 내릴시 고정 효과 투명
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


// 네브바 메뉴 클릭시 이동
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;

  const link = target.dataset.link;

  if (link == null) {
    return;
  }

  scrollIntoView(link);
});

// 버튼 클릭시 이동 -콘텍트 미
const homebtn = document.querySelector('.home__contact');

homebtn.addEventListener('click', () => {

    scrollIntoView('#contact');

});

// 스크롤 내릴시 화면 투명해지는거
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 화살표 버튼 스크롤 내릴시 보이게
const arrwup = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=> {
  if (window.scrollY > homeHeight /2) {
    arrwup.classList.add('visible');
  } else {
    arrwup.classList.remove('visible');
  }
});

// 화살표 버튼 누르면 홈으로
const arrowup = document.querySelector('.arrow-up');

arrowup.addEventListener('click', () => {

    scrollIntoView('#Home');
});




function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}