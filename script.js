window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
       header.classList.toggle("sticky",window.scrollY > 0);
});

function toggleMenu(){
    const  menu_toggle = document.querySelector(".menu_toggle");
    const  navbar = document.querySelector(".navbar");
    menu_toggle.classList.toggle("active");
    navbar.classList.toggle("active");
};