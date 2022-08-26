window.addEventListener('DOMContentLoaded', function () {
    headerActive()
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

;
window.addEventListener('DOMContentLoaded', function () {
    // addClassToLink()
    sliderClients()
    callPopUp()
    callForgottenPassword()
})

// let addClassToLink = () => {
//     let objects = document.querySelectorAll('.how-to__list>li');
//     let topValue = window.innerHeight / 2;
//     objects.forEach(object => {
//         function isFullyVisible(el) {
//             let elementBoundary = el.getBoundingClientRect();
//             let top = elementBoundary.top;
//             return top <= topValue
//         }
//
//         function scrolling() {
//             if (isFullyVisible(object) && !object.classList.contains('active')) {
//                 object.classList.add('active')
//                 console.log(object)
//             }
//         }
//         window.addEventListener("scroll", scrolling);
//     })
//
// };

let sliderClients = () => {
    let slider = document.querySelector('.our-clients__swiper');
    slider?new Swiper('.our-clients__swiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: 'true',
        speed: 500,
        spaceBetween: 32,
        grabCursor: true,
        pagination: {
            el: '.our-clients__pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.our-clients__next',
            prevEl: '.our-clients__prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
            }
        }
    }): null;
}

let callPopUp = () => {
    let triggersOpen = document.querySelectorAll(".trigger");
    let triggersClose = document.querySelectorAll(".sub-close");
    let body = document.querySelector('body');
    triggersOpen?triggersOpen.forEach((btn) =>
        btn.addEventListener("click", function () {
            let activeTab = document.querySelector(".active-popup");
            let subPopUp = document.querySelector('.forgotten.active');
            activeTab && activeTab.classList.remove("active-popup");
            let tabAttr = this.getAttribute("data-attr");
            document.getElementById(tabAttr).classList.add("active-popup");
            body.style.overflow = 'hidden';
            subPopUp?subPopUp.classList.remove('active'):null;
        })
    ):null;
    triggersClose?triggersClose.forEach(btnClose =>
        btnClose.addEventListener("click", function () {
            let closeTabAttr = this.getAttribute("data-close");
            document.getElementById(closeTabAttr).classList.remove("active-popup");
            body.style.overflow = '';
        })
    ):null;
}

let callForgottenPassword = () => {
    let openBtn = document.getElementById('forgotten-go');
    let closeBtn = document.getElementById('forgotten-back');
    let popUp = document.querySelector('.forgotten');
    openBtn.onclick = () => {
        popUp.classList.add('active')
    }
    closeBtn.onclick = () => {
        popUp.classList.remove('active')
    }
};


// const bg = () => {
//     document.querySelectorAll(".ibg").forEach(el => {
//         if (el.querySelector('img')) {
//             el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
//             el.querySelector('img').style.display = 'none';
//         }
//     });
// }






