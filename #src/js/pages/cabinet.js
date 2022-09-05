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
}