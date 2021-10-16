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
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {

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

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}