const modalOne = document.getElementById("modalOne");
const musicOne = document.getElementById("musicOne");
const imgOne = document.getElementById("imgOne");
musicOne.onclick = function() {
    modalOne.style.display = "block";
    imgOne.src = this.src;
}

const modalTwo = document.getElementById("modalTwo");
const musicTwo = document.getElementById('musicTwo');
const imgTwo = document.getElementById('imgTwo');
musicTwo.onclick = function () {
    modalTwo.style.display = "block";
    imgTwo.src = this.src;
}

const spanOne = document.getElementsByClassName("close")[0];
const spanTwo = document.getElementsByClassName("close")[1];
spanOne.onclick = function() {
    modalOne.style.display = "none";
}
spanTwo.onclick = function() {
    modalTwo.style.display = "none";
}