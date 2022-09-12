window.addEventListener('DOMContentLoaded', function () {
  inputChange()
  checkPassword()
  editInputs()
  checkMatching(document.querySelector('input[name = "password-3"]'));
  let cabinetBlock = document.querySelector(".cabinet");
  cabinetBlock ? callPopUp_2(cabinetBlock) : null;
})

let inputChange = () => {
  let btn_pen = document.getElementById('btn-change');
  let btn_memo = document.getElementById('btn-memo');
  let btn_chain = document.getElementById('btn-chain');
  let input = document.querySelector('.payment-story__payment-input>label>input')
  btn_pen ? btn_pen.onclick = () => {
    addActive()
  } : null;
  btn_memo ? btn_memo.onclick = () => {
    removeActive()
  } : null;
  btn_chain ? btn_chain.onclick = () => {
    copyText()
  } : null;
  let removeActive = () => {
    if (input.validity.valid === true) {
      input.setAttribute('value', input.value)
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
    let removeCopied = () => {
      btn_chain.parentNode.parentNode.classList.remove('copied')
    }
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

  input_test ? input_test.addEventListener('keyup', function (evt) {
    let input_test_val = input_test.value;

    let is_s = false;
    let is_b = false;
    let is_d = false;
    let is_sp = false;

    for (let i = 0; i < input_test_val.length; i++) {

      if (!is_s && s_letters.indexOf(input_test_val[i]) != -1) {
        is_s = true
      } else if (!is_b && b_letters.indexOf(input_test_val[i]) != -1) {
        is_b = true
      } else if (!is_d && digits.indexOf(input_test_val[i]) != -1) {
        is_d = true
      } else if (!is_sp && specials.indexOf(input_test_val[i]) != -1) {
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
    } else if (input_test_val.length < 6 && rating >= 3) {
      block_check.style.width = "50%";
      block_check.style.backgroundColor = '#F79A57';
    } else if (input_test_val.length >= 8 && rating < 3) {
      block_check.style.width = "50%";
      block_check.style.backgroundColor = '#F79A57';
    } else if (input_test_val.length >= 8 && rating >= 3) {
      block_check.style.width = "100%";
      block_check.style.backgroundColor = '#6FC05B';
    } else if (input_test_val.length >= 6 && rating === 1) {
      block_check.style.width = "10%";
      block_check.style.backgroundColor = '#F75764';
    } else if (input_test_val.length >= 6 && rating > 1 && rating < 4) {
      block_check.style.width = "50%";
      block_check.style.backgroundColor = '#F79A57';
    } else if (input_test_val.length >= 6 && rating === 4) {
      block_check.style.width = "100%";
      block_check.style.backgroundColor = '#6FC05B';
    }
    ;
  }) : null;
}

let editInputs = () => {
  let editItem = document.querySelector('.edit');
  if (editItem) {
    let editBtn = editItem.querySelector('.edit-btn');
    let saveBtn = editItem.querySelector('.save-btn');
    let inputs = editItem.querySelectorAll('input');
    editBtn.onclick = (e) => {
      e.preventDefault()
      editItem.classList.add('active-edit');
    }
    saveBtn.onclick = (e) => {
      let checkFieldsValues = [];
      inputs.forEach(input => {
        checkFieldsValues.push(input.validity.valid)
      })
      if (checkFieldsValues.some(el => el === false) === false) {
        inputs.forEach(input => {
          input.setAttribute('value', input.value)
          editItem.classList.remove('active-edit');
        })
      }
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







