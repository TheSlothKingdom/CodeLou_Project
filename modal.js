const modal = document.getElementById("modalOne");

const musicOne = document.getElementById("musicOne");
const imgOne = document.getElementById("imgOne");
musicOne.onclick = function() {
    modal.style.display = "block";
    imgOne.src = this.src;
}

const musicTwo = document.getElementById('musicTwo');
const imgTwo = document.getElementById('imgTwo');
musicTwo.onclick = function () {
    modal.style.display = "block";
    imgTwo.src = this.src;
}

const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}