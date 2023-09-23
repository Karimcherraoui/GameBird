
const playImag = document.querySelector(".play");
const startContainer = document.querySelector(".playContainer");
const inputName = document.querySelector("#name");
const gameUser = JSON.parse(localStorage.getItem("Names")) || [];






playImag.addEventListener("click", () => {
    const userName = inputName.value.trim(); 
    
    if (userName !== "") {
      gameUser.push(userName);
      localStorage.setItem("Names", JSON.stringify(gameUser));
      inputName.value = ""; 
      window.location.href = "game.html";
    } else {
      alert("Please enter a valid name.");
    }
  });
