const holeContainer = document.querySelector(".bg");
for (let i = 0; i < 12; i++) {
    const holeContain = document.createElement("div");
    holeContain.classList.add("hole-container");
    const holeDiv = document.createElement("div");
    holeDiv.classList.add("hole");
    holeContain.appendChild(holeDiv);
    holeContainer.appendChild(holeContain);

}

const birdHole = document.querySelectorAll(".hole");

function spawnbird() {
    const imgBird = document.createElement("img");
    imgBird.classList.add("mole");
    imgBird.src = "./hungry.png";
    const holeIndex = Math.floor(Math.random() * birdHole.length );
    const hole = birdHole[holeIndex];
    hole.appendChild(imgBird);
    setTimeout(()=>{
        imgBird.remove()
    },2500);

    setTimeout(()=>{
        imgBird.src = "./sad.png";
    },1500);
    
    setTimeout(()=>{
        imgBird.src = "./leaving.png";
    },2000);

}

setInterval(spawnbird,1500);


