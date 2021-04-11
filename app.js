var inputTextElement = document.querySelector('#user-name');
var inputEmailElement = document.querySelector('#user-email');
var textareaElement = document.querySelector('#comment');
var inputSubmitElement = document.querySelector('#send');
var inputResetElement = document.querySelector('#reset');
// console.log(inputSubmitElement)
inputSubmitElement.onclick = function (e) {
    if (inputTextElement.value.trim() === "") {
        e.preventDefault();
        setError(inputTextElement, "Chưa nhập tên người dùng!");
    }

    if (inputEmailElement.value.trim() === "") {
        e.preventDefault();
        setError(inputEmailElement, "Chưa nhập email!");
    } else {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!inputEmailElement.value.trim().match(re)) {
            e.preventDefault();
            setError(inputEmailElement, "Email chưa đúng định dạng!");
        }
    }

    if (textareaElement.value.trim() === "") {
        e.preventDefault();
        setError(textareaElement, "Chưa nhập nội dung comment!");
    }
}

var setError = function (nameElement, message) {

    const formControl = nameElement.parentElement;
    formControl.classList.add('form-control-error');
    formControl.querySelector('small').innerText = message;
}

inputResetElement.onclick = function (e) {
    const formControl = document.querySelectorAll('.form-control');
    for(let i = 0; i < formControl.length; ++i) {
        formControl[i].classList.remove('form-control-error');
        formControl[i].querySelector('small').innerText = "";
    }
}