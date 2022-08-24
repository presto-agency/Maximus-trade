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
    addClassToLink()
    sliderClients()
})

let addClassToLink = () => {
    let objects = document.querySelectorAll('.how-to__list>li');
    let topValue = window.innerHeight / 2;

    objects.forEach(object => {
        function isFullyVisible(el) {
            let elementBoundary = el.getBoundingClientRect();
            let top = elementBoundary.top;
            return top <= topValue
        }

        function scrolling() {
            if (isFullyVisible(object) && !object.classList.contains('active')) {
                let activeBtn = document.querySelector('.how-to__list>li.active');
                object.classList.add('active')
                if(activeBtn){
                    activeBtn.classList.remove('active')
                }
            }
        }
        window.addEventListener("scroll", scrolling);
    })

};

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
};


// const bg = () => {
//     document.querySelectorAll(".ibg").forEach(el => {
//         if (el.querySelector('img')) {
//             el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
//             el.querySelector('img').style.display = 'none';
//         }
//     });
// }






