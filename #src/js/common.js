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

let  validateForm = () => {
    // https://via-profit.github.io/js-form-validator/
    const forms = document.querySelectorAll('form')
    if(forms.length > 0){
        for(let form of forms){
            const validator = new Validator(form, function (err, res) {
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
                errorClassName: 'validate-error',
                onAir: false,
            })
            validator.validate()

            return validator
        }
    }
}

let callPopUp_2 = (currentBlock) => {
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


