window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
       header.classList.toggle("sticky",window.scrollY > 0);
});

function toggleMenu(){
    var  menu_toggle = document.querySelector(".menu_toggle");
    var  navbar = document.querySelector(".navbar");
    menu_toggle.classList.toggle("active");
    navbar.classList.toggle("active");
};