
window.addEventListener('DOMContentLoaded', function () {
    headerActive()
    // validateForm()
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

let validateForm = () => {
    // https://via-profit.github.io/js-form-validator/
    let formsHandle = document.querySelectorAll('form');

    formsHandle.forEach( formHandle => {
        const validator = new Validator(formHandle, function (err, res) {
            return res;
        },{
            rules: {
                compare: function (value) {
                    return (value === document.getElementById('input_test').value);
                }
            },
            messages: {
                en: {
                    compare: {
                        incorrect: 'Passwords are not the same'
                    }
                }
            },
            errorClassName: 'validate-error'
        })
    })
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
    if(popUp){
        openBtn.onclick = () => {
            popUp.classList.add('active')
        }
        closeBtn.onclick = () => {
            popUp.classList.remove('active')
        }
    }
};
window.addEventListener('DOMContentLoaded', function () {
    inputChange()
    checkPassword()
    investmentPopup()
    customScroll()
    grabCursor()
})

let inputChange = () => {
    let btn_pen = document.getElementById('btn-change');
    let btn_memo = document.getElementById('btn-memo');
    let btn_chain = document.getElementById('btn-chain');
    let input = document.querySelector('.payment-story__payment-input>label>input')
    btn_pen?btn_pen.onclick = () => {addActive()}: null;
    btn_memo?btn_memo.onclick = () => {removeActive()}: null;
    btn_chain?btn_chain.onclick = () => {copyText()}: null;
    let removeActive = () => {
        if(input.value.length > 0){
            input.setAttribute(value, input.value)
            btn_memo.parentNode.parentNode.classList.remove('active')
        }
    }
    let addActive = () => {
        input.select()
        btn_pen.parentNode.parentNode.classList.add('active')
    }
    let copyText = () => {
        let textToCopy = input.value;
        btn_chain.parentNode.parentNode.classList.add('copied')
        navigator.clipboard.writeText(textToCopy)
        let removeCopied = () => {btn_chain.parentNode.parentNode.classList.remove('copied')}
        setTimeout(removeCopied, 1500)
    }
}

let checkPassword = () => {
    let s_letters = "qwertyuiopasdfghjklzxcvbnm";
    let b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    let digits = "0123456789";
    let specials = "!@#$%^&*()_-+=\|/.,:;[]{}";

    let input_test = document.getElementById('input_test');
    let block_check = document.getElementById('block_check');

    input_test?input_test.addEventListener('keyup', function(evt){
        let input_test_val = input_test.value;

        let is_s = false;
        let is_b = false;
        let is_d = false;
        let is_sp = false;

        for (let i = 0; i < input_test_val.length; i++) {

            if (!is_s && s_letters.indexOf(input_test_val[i]) != -1) {
                is_s = true
            }
            else if (!is_b && b_letters.indexOf(input_test_val[i]) != -1) {
                is_b = true
            }
            else if (!is_d && digits.indexOf(input_test_val[i]) != -1) {
                is_d = true
            }
            else if (!is_sp && specials.indexOf(input_test_val[i]) != -1) {
                is_sp = true
            }
        }

        let rating = 0;
        if (is_s) rating++;
        if (is_b) rating++;
        if (is_d) rating++;
        if (is_sp) rating++;

        if (input_test_val.length < 6 && rating < 3) {
            block_check.style.width = "10%";
            block_check.style.backgroundColor = '#F75764';
        }
        else if (input_test_val.length < 6 && rating >= 3) {
            block_check.style.width = "50%";
            block_check.style.backgroundColor = '#F79A57';
        }
        else if (input_test_val.length >= 8 && rating < 3) {
            block_check.style.width = "50%";
            block_check.style.backgroundColor = '#F79A57';
        }
        else if (input_test_val.length >= 8 && rating >= 3) {
            block_check.style.width = "100%";
            block_check.style.backgroundColor = '#6FC05B';
        }
        else if (input_test_val.length >= 6 && rating === 1) {
            block_check.style.width = "10%";
            block_check.style.backgroundColor = '#F75764';
        }
        else if (input_test_val.length >= 6 && rating > 1 && rating < 4) {
            block_check.style.width = "50%";
            block_check.style.backgroundColor = '#F79A57';
        }
        else if (input_test_val.length >= 6 && rating === 4) {
            block_check.style.width = "100%";
            block_check.style.backgroundColor = '#6FC05B';
        };
    }):null;
}

let investmentPopup = () => {
    let currentBlock  = document.querySelector(".investment");
    let triggersOpen = document.querySelectorAll(".trigger-inv");
    triggersOpen?triggersOpen.forEach((btn) =>
        btn.addEventListener("click", function () {
            let activeTab = currentBlock.querySelector(".active");
            let activeLink = currentBlock.querySelector(".active-link");
            let tabAttr = this.getAttribute("data-attr");
            activeTab?activeTab.classList.remove("active"):null;
            activeLink?activeLink.classList.remove("active-link"):null;
            document.getElementById(tabAttr).classList.add("active");
            btn.parentNode.classList.add("active-link");
        })
    ):null;
}

let customScroll = () => {
    let items = Array.from(document.querySelectorAll('.line-items__item>p'));
    let scrollThumb = document.querySelector('.investment__progress-bar>span');
    let portion = `${(100 / items.length)}`;
    scrollThumb.style.left = portion + '%';
    items.forEach(item => {
        item.onclick = () => {
            if(items.indexOf(item) === 0) {
                scrollThumb.style.left = portion + '%';
            }
            else {
                scrollThumb.style.left = `${portion * (items.indexOf(item) + 1)}%`;
            }
        }
    })
}

let grabCursor = () => {
    let containers = document.querySelectorAll('.line-items');
    if (window.screen.width > 1024) {
        let startY;
        let scrollTop;
        let startX;
        let scrollLeft;
        let isDown;

        containers.forEach(container => {
            container.addEventListener('mousedown', e => mouseIsDown(e));
            container.addEventListener('mouseup', e => mouseUp(e))
            container.addEventListener('mouseleave', e => mouseLeave(e));
            container.addEventListener('mousemove', e => mouseMove(e));
            function mouseIsDown(e) {
                isDown = true;
                startY = e.pageY - container.offsetTop;
                startX = e.pageX - container.offsetLeft;
                scrollLeft = container.scrollLeft;
                scrollTop = container.scrollTop;
            }
            function mouseUp(e) {
                isDown = false;
            }
            function mouseLeave(e) {
                isDown = false;
            }
            function mouseMove(e) {
                if (isDown) {
                    e.preventDefault();
                    const y = e.pageY - container.offsetTop;
                    const x = e.pageX - container.offsetLeft;
                    const walkY = y - startY;
                    const walkX = x - startX;
                    container.scrollTop = scrollTop - walkY;
                    container.scrollLeft = scrollLeft - walkX;
                }
            }
        });
    }
};






