document.body.style.fontFamily = 'Arial, sans-serif';
document.getElementById('Nickname').innerHTML = 'Trey Trey';
document.getElementById('Favorites').innerHTML = 'Rap, Wings, Lost';
document.getElementById('Hometown').innerHTML = 'Newark, DE';
document.getElementById('Fact').innerHTML = 'Im right handed';
document.getElementById("Nickname").style.color = "#ff0000";
document.getElementById("Favorites").style.color = "magenta";
document.getElementById("Hometown").style.color = "blue";
document.getElementById("Fact").style.color = "orange";
let myPic = document.createElement('img');
myPic.src = 'Trey.jpg';
document.body.appendChild(myPic).style.width = '200px';