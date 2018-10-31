$(document).ready(function () {
    var personName = document.querySelector('.name');
    var btn = document.querySelector('.enter');
    var arrName = [];
    for (var i = 1; i < 13; i++) {
        arrName.push(prompt(i + ". Please Enter Your Name Here : "));
    }
    function clickButton() {
        if (arrName.length !== 0) {
            personName.innerHTML = arrName.shift();
        } else {
            personName.innerHTML = "There is no more guest left.<br/>Great Job!!!";
        }
    }
    btn.addEventListener('click', function (e) {
        clickButton();
    })
});