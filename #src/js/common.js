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
