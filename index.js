const boxboi = document.querySelector('.box');

boxboi.addEventListener('click', boxbois.forEach(boxPress));
boxboi.addEventListener('mouseover', boxHover);
boxboi.addEventListener('mouseout', boxLeave);
let boxbois = document.querySelectorAll('.box');
function boxPress() {
    boxboi.style.boxShadow =
        'inset 6px 6px 6px rgba(217,210,200,0.51), -6px -6px 26px 0 rgba(255,255,255,0.83)';
}

function boxHover() {
    boxboi.style.background = 'linear-gradient(145deg, #d7d6d6, #ffffff';
}

function boxLeave() {
    boxboi.style.background = '';
}

const bbbbbb = 'ffffff';
