window.addEventListener('DOMContentLoaded', function () {
    headerActive()
    addClassToLink()
})

let headerActive = () => {
    let headerMob = document.querySelector('.header');
    let burgerBtn = document.querySelector('.header__cross');
    let body = document.querySelector('body');
    let addClass = () => {
        headerMob.classList.add('active');
        body.style.overflow = 'hidden';
    }
    let removeClass = () => {
        headerMob.classList.remove('active');
        body.style.overflow = '';
    }
    headerMob?burgerBtn.onclick = () => {headerMob.classList.contains('active')?removeClass():addClass()}:null;
}

let addClassToLink = () => {
    let objects = document.querySelectorAll('.how-to__list>li');
    let topValue = window.innerHeight / 2;
    objects.forEach(object => {
        let bottomValue = (window.innerHeight / 2) - object.offsetHeight;
        function isFullyVisible(el) {
            let elementBoundary = el.getBoundingClientRect();
            let top = elementBoundary.top;
            let bottom = elementBoundary.bottom;
            return ((top <= topValue) && (bottom >= bottomValue));
        }

        function scrolling() {
            if (isFullyVisible(object) && !object.classList.contains('active')) {
                object.classList.add('active')
            }
            else if (!isFullyVisible(object) && object.classList.contains('active')){
                object.classList.remove('active');
            }
        }
        window.addEventListener("scroll", scrolling);
    })

};
;


// const bg = () => {
//     document.querySelectorAll(".ibg").forEach(el => {
//         if (el.querySelector('img')) {
//             el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
//             el.querySelector('img').style.display = 'none';
//         }
//     });
// }






