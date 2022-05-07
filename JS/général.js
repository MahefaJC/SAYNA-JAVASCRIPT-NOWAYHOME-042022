// EFFET HOVER SUR LES BOUTTONS
const btns = document.getElementsByClassName('btn');
for(let i = 0; i < btns.length ; i++) {
    btns[i].addEventListener('mouseover', function () {
        btns[i].style.backgroundColor = 'white';
        btns[i].style.color = 'red';
        btns[i].style.fontWeight = 'bold';
    })
    btns[i].addEventListener('mouseout', function () {
        btns[i].style.backgroundColor = 'inherit';
        btns[i].style.color = 'white';
        btns[i].style.fontWeight = 'normal';
        btns[i].style.border = '1px solid white';
    })
}