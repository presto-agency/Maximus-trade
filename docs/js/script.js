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

let callPopUp_2 = (currentBlock) => {
    let triggersOpen = document.querySelectorAll(".trigger-inv");
    triggersOpen?triggersOpen.forEach((btn) =>
        btn.addEventListener("click", function () {
            let activeLink = currentBlock.querySelector(".active-link");
            let tabAttr = this.getAttribute("data-attr");
            let activeTab = currentBlock.querySelector(".active");
            activeTab?activeTab.classList.remove("active"):null;
            activeLink?activeLink.classList.remove("active-link"):null;
            document.getElementById(tabAttr).classList.add("active");
            btn.parentNode.classList.add("active-link");
        })
    ):null;
}


;
window.addEventListener('DOMContentLoaded', function () {
    sliderClients()
    callPopUp()
    callForgottenPassword()
    scrollToForm()
    dropMenu()
})

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
}

let scrollToForm = () => {
    let anchor = document.querySelector('.hero-block__content>button');
    if(anchor){
        let element= document.querySelector('.need-help')
        let topElement = element.offsetTop;
        anchor.addEventListener('click', function (e) {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: topElement - 150
            });
        })
    }
}

let dropMenu = () => {
    let blockSort = document.getElementById("sort");
    if (!!blockSort) {
        let blockList = document.getElementById("sort-list");
        let elemItemSelect = document.querySelectorAll(".sort-select__item");
        let elemCurrent = document.getElementById("current-value");
        let active = document.querySelector("#sort-list li.active");

        elemCurrent.textContent = active.textContent;

        const hideSelectMenu = () => {
            blockList.classList.remove('container-active');
            blockSort.classList.remove('turn-arrow');
            blockList.style.maxHeight = '0';
        };

        const showSelectMenu = () => {
            blockList.classList.add('container-active');
            blockList.style.maxHeight = blockList.scrollHeight + 'px';
            blockSort.classList.add('turn-arrow');
        };

        const onMouseScroll = () => {
            if (!blockList.classList.contains('container-active')) {
                return
            }
            if (window.scrollY > 0) {
                hideSelectMenu();
            }
        };

        const onOutsideClick = (e) => {
            if (!blockList.classList.contains('container-active')) {
                return
            }
            if (!e.target.classList.contains('sort-select__item') && !e.target.classList.contains('sort-select__current')) {
                hideSelectMenu();
            };
        };

        const onSelectClick = () => {
            blockList.classList.contains('container-active')
              ? hideSelectMenu()
              : showSelectMenu();
        };

        blockSort.addEventListener('click', onSelectClick);
        window.addEventListener('click', onOutsideClick);
        window.addEventListener('scroll', onMouseScroll);

        elemItemSelect.forEach(item => item.addEventListener('click', function () {
            let elemItemSelectActive = document.querySelectorAll('.sort-select__item.active');
            elemItemSelectActive.forEach(itemActive => itemActive.classList.remove('active'));
            item.classList.add('active');
            elemCurrent.textContent = item.textContent;
            elemCurrent.setAttribute('data-value', item.getAttribute('data-value'));
        }))
    }
};
;
window.addEventListener('DOMContentLoaded', function () {
    inputChange()
    checkPassword()
    editInputs()
    // checkMatching(document.querySelector('input[name = "password-3"]'));
    let cabinetBlock  = document.querySelector(".cabinet");
    cabinetBlock?callPopUp_2(cabinetBlock):null;
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
        input.setAttribute('value', input.value)
        btn_memo.parentNode.parentNode.classList.remove('active')
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

let editInputs = () => {
    let editItem = document.querySelector('.edit');
    if(editItem){
        let editBtn = editItem.querySelector('.edit-btn');
        let saveBtn = editItem.querySelector('.save-btn');
        let inputs = editItem.querySelectorAll('input');
          editBtn.onclick = (e) => {
          e.preventDefault()
            editItem.classList.add('active-edit');
        }
        saveBtn.onclick = () => {
            editItem.classList.add('active-edit');
            inputs.forEach(input => {
                input.setAttribute('value', input.value)
                editItem.classList.remove('active-edit');
            })
        }
    }
}

let checkMatching = (input) => {
    input.addEventListener("input", function () {
        let pass_3 = document.querySelector('input[name = "password-2"]');
        if (input.value != pass_3.value) {
            input.setCustomValidity('Password Must be Matching.');
        } else {
            input.setCustomValidity('');
        }
    })
}






;
window.addEventListener('DOMContentLoaded', function () {
    let investmentBlock  = document.querySelector(".investment");
    investmentBlock?callPopUp_2(investmentBlock):null;
    customScroll()
    grabCursor()
    // validateForm(document.querySelector('#ident-8'))
})

let customScroll = () => {
    thumbMoving()
    window.addEventListener("resize", thumbMoving )
    function thumbMoving (){
        let items = Array.from(document.querySelectorAll('.line-items__item>p'));
        if(items.length>0) {
            let scrollThumb = document.querySelector('.investment__progress-bar>span');
            let portion = `${(100 / items.length)}`;
            scrollThumb.style.left = portion + '%';
            items.forEach(item => {
                item.onclick = () => {
                    if (items.indexOf(item) === 0) {
                        scrollThumb.style.left = portion + '%';
                    } else {
                        scrollThumb.style.left = `${portion * (items.indexOf(item) + 1)}%`;
                    }
                }
            })
        }
    }
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






