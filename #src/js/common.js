window.addEventListener('DOMContentLoaded', function () {
    headerActive()
    playIframe()
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

let playIframe = () => {
    let runBtn = document.querySelector('.iframe-block__content_wrapper')
    let iframeVideo = document.querySelector('.iframe-block__content_wrapper>iframe')
    runBtn.onclick = () => {
        runBtn.classList.add('active')
        iframeVideo.src += "?autoplay=1";
    }
};
