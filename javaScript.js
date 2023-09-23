const holeContainer = document.querySelector(".bg");
const time = document.querySelector(".time");
const score = document.querySelector(".score");
const scoreUser = document.querySelector(".userScore");
const gameUser = JSON.parse(localStorage.getItem("Names"));
const userContainer = document.querySelector(".leaderBoard");
const storedGameScore = localStorage.getItem("Scores");
const gameScore = storedGameScore ? JSON.parse(storedGameScore) : [];
const userLength = gameUser.length ;
const winContainer = document.querySelector(".winContainer");



let minute = 0;
let seconds = 0;


for (let i = 0; i < 12; i++) {
  const holeContain = document.createElement("div");
  holeContain.classList.add("hole-container");
  const holeDiv = document.createElement("div");
  holeDiv.classList.add("hole");
  holeContainer.appendChild(holeContain);
  holeContain.appendChild(holeDiv);
}

let birdHole = document.querySelectorAll(".hole");
let lastHole = -1;
let progressWorm = document.getElementById("WormProgress");
let WormProgress = 5;
let holeActive = [];


function getIndexHole() {
  let indexHole = Math.floor(Math.random() * birdHole.length);
  if (holeActive.includes(indexHole)) {
    return getIndexHole();
  }
  holeActive.push(indexHole);
  return indexHole;
}

function spawnbird() {
  const imgBird = document.createElement("img");
  imgBird.classList.add("mole");
  imgBird.src = "./assets/hungry.png";
  const holeIndex = getIndexHole();
  const hole = birdHole[holeIndex];
  let statutBird = "hungry";
  hole.appendChild(imgBird);


  imgBird.addEventListener("click", () => {
    if(statutBird === "hungry"){
    imgBird.src = "./assets/fed.png";
    statutBird = "fed";
    updateScore();
    }
  });

  setTimeout(() => {
    if(statutBird === "hungry"){
    imgBird.src = "./assets/sad.png"
    statutBird = "sad"
    }
  }, 2000);

  setTimeout(() => {
    imgBird.src = "./assets/leaving.png";
  }, 2200);

  setTimeout(() => {
    imgBird.remove();
    holeActive = holeActive.filter((i) => i != holeIndex);
  }, 2500);
  
}

setInterval(()=>{
    function chrono() {
        seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minute++;
                   
                }
                return {
                    seconds: seconds,
                    minute: minute
                };
            
      }
    
      const timeValues = chrono(); 
      const formattedTime = "Time: " + timeValues.minute + "m " + timeValues.seconds + "s";
      time.innerHTML = formattedTime;
},1000);

const gameStart = setInterval(spawnbird, 1500);

function updateScore(){
    WormProgress += 45;
    progressWorm.style.width = WormProgress + "%";

    if(WormProgress >= 100){
        clearInterval(gameStart);
        holeContainer.style.display = "none";
        winContainer.style.display = "grid";
        gameScore.push(minute + "m " + seconds + "s");
        localStorage.setItem("Scores", JSON.stringify(gameScore));
       
        for (let i = 0 ; i < userLength ; i++){
          let name = gameUser[i];
          let scores = gameScore [i];
          const formattedUser = name + " : " + scores;
          console.log(formattedUser);
          // " :" + minute + "m " + seconds + "s"
          userContainer.innerHTML += formattedUser + "<br>";
        }

}
}


