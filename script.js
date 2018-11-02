var guest_Name = document.querySelector('.name');
var btn = document.querySelector('.enter');
var msg = document.querySelector('.message');

var guestName = [];
for (var i = 0; i < 12; i++) {
    guestName.push(prompt((i + 1) + ". Please Enter Your Name Here : "));
}
var arrayImage = ['img/alia.png', 'img/heeman.png', 'img/ben.png', 'img/girl.png', 'img/bilu.png', 'img/miki.png', 'img/zia.png', 'img/hitman.png', 'img/piku.png', 'img/pitu.png', 'img/rabi.png', 'img/rini.png'];

function clickButton() {
    if (guestName.length !== 0) {
        var guest = '';
        var currentPic = arrayImage.shift();
        var currentName = guestName.shift();
        guest += `<img src="${currentPic}" style="width: 18vw; height: 40vh;"/>  
                    <p>${currentName} </p>
                    `;
        guest_Name.innerHTML = guest;
        if ((guestName.length % 3) === 0) {
            msg.innerHTML += '*** Congratulations!!! You are the lukiest winner to get 25% off tonight. ***';
        }
        else {
            msg.innerHTML = '';
        }
    } else {
        msg.innerHTML = '';
        guest_Name.innerHTML = "<br/>*** There is no more guest left. All guests are seated. ***<br/>Great Job!!!";
    }
}
btn.addEventListener('click', () => {
    clickButton();
});