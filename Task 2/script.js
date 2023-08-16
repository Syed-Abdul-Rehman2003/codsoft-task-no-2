// script.js

let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

let themetoggle=document.querySelector('#theme-toggler');
themetoggle.onclick = () => {
    themetoggle.classList.toggle('fa-sun');
    if(themetoggle.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}
