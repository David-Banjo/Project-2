const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', window.scrollY > 200);
});

let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navList.classList.remove('open');
}

const sr = ScrollReveal({
    distance : '50px',
    duration : 2050,
    delay : 600,
    reset : true
});

sr.reveal('.hero-text', {origin : 'top'});
sr.reveal('.about-text, .service-item', {origin : 'bottom'});
sr.reveal('.about-img', {origin : 'left'});
sr.reveal('.about-text h3, .text-center, .right-profile h3', {origin : 'top'});
sr.reveal('.left-profile', {origin : 'left'});
sr.reveal('.in h4', {origin : 'bottom'});
sr.reveal('.right-profile', {origin : 'right'});
sr.reveal('.end-section', {origin : 'top'});
sr.reveal('.end-section h3', {origin : 'left'});
sr.reveal('.end-section p', {origin : 'right'});
sr.reveal('.end-icons', {origin : 'bottom'});
sr.reveal('.left .content, .box ', {origin : 'top'});
sr.reveal('.center .content, .box ', {origin : 'top'});
sr.reveal('.right .content, .box ', {origin : 'top'});
sr.reveal('.bottom', {origin : 'left'});


const logo = ScrollReveal({
    distance : '50px',
    duration : 2050,
    delay : 600,
    reset : false
});

logo.reveal('.logo', {origin : 'left'});