window.addEventListener('DOMContentLoaded', function () {
    // addClassToLink()
    sliderClients()
    callPopUp()
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
            activeTab && activeTab.classList.remove("active-popup");
            let tabAttr = this.getAttribute("data-attr");
            document.getElementById(tabAttr).classList.add("active-popup");
            body.style.overflow = 'hidden';
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