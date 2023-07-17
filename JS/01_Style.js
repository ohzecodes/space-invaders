const lightCheckBox =document.getElementById("LightsCheckBox");

const setLight =(lightsOn) => {

  const setStyle=(Colors) => {
    document.querySelectorAll("header").forEach(e => {
      // e.style.backgroundColor = Colors.nextLevel;
      // e.style.color =Colors.foreground;
      e.style.backgroundColor = Colors.foreground;
      e.style.color =Colors.background;
    });
    
    document.querySelectorAll("body").forEach(e => {
      e.style.backgroundColor = Colors.background;
      e.style.color = Colors.foreground;
    });
    document.querySelectorAll("a").forEach(e=>{
      e.style.color = Colors.foreground;
    })
   
    document.querySelectorAll("details").forEach(e=>{
      e.style.backgroundColor = Colors.nextLevel;
      e.style.color = Colors.foreground;
    })
    document.querySelectorAll("#sign a").forEach(e=>{
      e.style.backgroundColor = Colors.nextLevel;
      e.style.color = Colors.foreground;
    })
  }
  if(lightsOn){
    const LightColors={
      background: "#f0f0f0",
      foreground:  "#333",
      nextLevel: "#fff"
      
    }
    setStyle(LightColors)
    return;
  }
  const DarkColors={
    background:  "#333",
    foreground: "#f0f0f0",
    nextLevel:"#000"
  }
  setStyle(DarkColors)
  
}

const autoDetectTheme=() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setLight(false);
    lightCheckBox.checked=false ;
    
    } else {
    setLight(true);
    lightCheckBox.checked=true;
    }
}


autoDetectTheme();
lightCheckBox.addEventListener("change",()=>setLight(lightCheckBox.checked));


function isMobileOrTablet() {
  var userAgent = navigator.userAgent.toLowerCase();
  var isMobile = /mobile|android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  var isTablet = /tablet|ipad/i.test(userAgent);
  return (isMobile || isTablet);
}


  if (isMobileOrTablet()){
    const InnerContent =document.createElement("div");

    const overlayDiv= document.getElementById("overlay");
    InnerContent.innerHTML=`<p>We have detected that you're using a mobile device.</p>
     <p>The game is NOT optimized for mobile devices</p>`

    overlayDiv.appendChild(InnerContent);
    overlayDiv.style.display = "block";
   
    setTimeout(() => {
     let p= document.createElement("p");
      p.textContent= "Tap anywhere to continue"
      InnerContent.appendChild(p);
      p.classList.add("blink");
      overlayDiv.onclick=() => {
        overlayDiv.style.display = "none";
      }
    },2000);
  }
  

