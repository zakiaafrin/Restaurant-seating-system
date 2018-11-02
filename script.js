var guest_Name = document.querySelector('.name');
var btn = document.querySelector('.enter');

var guestName = [];
for (var i = 0; i < 12; i++) {
    guestName.push(prompt((i + 1) + ". Please Enter Your Name Here : "));
}
var arrayImage = ['img/alia.png', 'img/heeman.png', 'img/ben.png', 'img/girl.png', 'img/bilu.png', 'img/miki.png', 'img/zia.png', 'img/hitman.png', 'img/piku.png', 'img/pitu.png', 'img/rabi.png', 'img/rini.png'];

function clickButton() {
    if (guestName.length !== 0) {
        var guest = "";
        var currentPic = arrayImage.shift();
        var currentName = guestName.shift();
        guest += `<img src="${currentPic}" style="width: 18vw; height: 40vh;"/>  
                    <p>${currentName} </p>
                    `;
        console.log(guest);
        guest_Name.innerHTML = guest + '';
    } else {
        guest_Name.innerHTML = "<br/>*** There is no more guest left. ***<br/>Great Job!!!";
    }
}

btn.addEventListener('click', () => {
    clickButton();
});