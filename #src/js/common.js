window.addEventListener('DOMContentLoaded', function () {
    headerActive()
    // validateForm(document.querySelector('#ident-1'))
    // document.querySelector('#ident-1').addEventListener('submit', function(e){
    //     if(validateForm(document.querySelector('#ident-1'))===false){
    //         e.preventDefault()
    //     }
    // })
    // validateForm(document.querySelector('#ident-2'))
    // validateForm(document.querySelector('#ident-3'))
    // validateForm(document.querySelector('#ident-4'))
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

let  validateForm = (form) => {

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


