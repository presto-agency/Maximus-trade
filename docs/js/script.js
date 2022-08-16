window.addEventListener('DOMContentLoaded', function () {
    headerActive()
})

let headerActive = () => {
    let headerMob = document.querySelector('.header');
    let burgerBtn = document.querySelector('.header__cross');
    let addClass = () => {
        headerMob.classList.add('active');
        document.querySelector('body').style.overflow = 'hidden';
    }
    let removeClass = () => {
        headerMob.classList.remove('active');
        document.querySelector('body').style.overflow = '';
    }
    headerMob?burgerBtn.onclick = () => {
        headerMob.classList.contains('active')?removeClass():addClass();
    }:null;
};


// const bg = () => {
//     document.querySelectorAll(".ibg").forEach(el => {
//         if (el.querySelector('img')) {
//             el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
//             el.querySelector('img').style.display = 'none';
//         }
//     });
// }






