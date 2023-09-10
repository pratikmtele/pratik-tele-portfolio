var openMenu = document.getElementById('open-menu');
var closeMenu = document.getElementById('close-menu');
var menus = document.getElementById('menu');

openMenu.addEventListener('click', ()=>{
    console.log("Clicked..")
    menus.classList.toggle('open-Menu');
    closeMenu.classList.toggle('close-menu-btn');
    openMenu.classList.toggle('open-menu-btn');
});

closeMenu.addEventListener('click', ()=>{
    menus.classList.toggle('open-Menu');
    closeMenu.classList.toggle('close-menu-btn');
    openMenu.classList.toggle('open-menu-btn');
});