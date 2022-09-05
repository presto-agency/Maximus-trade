
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

