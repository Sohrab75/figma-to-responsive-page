const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose =document.querySelector('.close-menu');
const mobileNavigation = document.querySelector('.mobile-navigation');

mobileMenu.addEventListener('click', ()=>{
    mobileNavigation.classList.add('active');
    mobileClose.classList.add('active');
});


mobileClose.addEventListener('click', ()=>{
    mobileNavigation.classList.remove('active');
    mobileClose.classList.remove('active');
});