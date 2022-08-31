window.addEventListener('DOMContentLoaded', function () {
    inputChange()
})

let inputChange = () => {
    let btn_pen = document.getElementById('btn-change');
    let btn_memo = document.getElementById('btn-memo');
    let btn_chain = document.getElementById('btn-chain');
    let input = document.querySelector('.payment-story__payment-input>input')
    btn_pen?btn_pen.onclick = () => {addActive()}: null;
    btn_memo?btn_memo.onclick = () => {removeActive()}: null;
    btn_chain?btn_chain.onclick = () => {copyText()}: null;
    let removeActive = () => {
        input.setAttribute(value, input.value)
        btn_memo.parentNode.parentNode.classList.remove('active')
    }
    let addActive = () => {
        input.select()
        btn_pen.parentNode.parentNode.classList.add('active')
    }
    let copyText = () => {
        let textToCopy = input.value;
        navigator.clipboard.writeText(textToCopy)
    }
}