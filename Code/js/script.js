const toggle = document.getElementById('toggle');
const menuUp = document.getElementById('menuId');
const rmvMn = document.getElementById('removeMn');
toggle.onclick = function () {
    menuUp.classList.toggle('active');
    // menuUp.style.position = 'absolute';
    // menuUp.classList.add('fadeInLeft');
}

rmvMn.onclick = function () {
    menuUp.style.display = 'none';
}