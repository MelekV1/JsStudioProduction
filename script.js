window.addEventListener("load",()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#293250",
        "#FFD551",
        "#6DD47E"
      ];
    //console.log(sounds)
    //invoke  Sounds on clicks

    pads.forEach((pad,i)=>{
        pad.addEventListener('click',function(){
            sounds[i].currentTime=0;
            sounds[i].play();
            //let classNamePad = pad.classList[0];
            //visuals.classList=[]
            //visuals.classList.add(classNamePad);
            //visuals.classList.add("");
            //console.log(visuals.classList)
            VisualEffects(i);
        });
    });

    const VisualEffects = index => {
        //Create bubbles
        const effect = document.createElement("div");
        visual.appendChild(effect);
        effect.style.backgroundColor = colors[index];
        effect.style.animation = `jump 1s ease`;
        effect.addEventListener("animationend", function() {
          console.log(effect)
          visual.removeChild(this);
        });
    };
});