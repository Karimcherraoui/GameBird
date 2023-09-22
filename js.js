
const playImag = document.querySelector(".play");
const startContainer = document.querySelector(".playContainer");
const inputName = document.querySelector("#name");
const gameUser = JSON.parse(localStorage.getItem("Users")) || [];


playImag.addEventListener("click", () => {
    const users = inputName.value;
    gameUser.push(users);
   localStorage.setItem("Name", JSON.stringify(gameUser));
    window.location.href = "game.html";
});