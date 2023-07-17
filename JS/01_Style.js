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
  const h2=document.querySelector("#lights > h2")
  if(lightsOn){
    const LightColors={
      background: "#f0f0f0",
      foreground:  "#333",
      nextLevel: "#fff"
    }
    setStyle(LightColors)
     h2.textContent="Dark Mode: Off"
    return;
  }
 
  const DarkColors={
    background:  "#333",
    foreground: "#f0f0f0",
    nextLevel:"#000"
  }
  setStyle(DarkColors)
   // h2+ on
   h2.textContent="Dark Mode: On"
}

const autoDetectTheme=() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
     lightCheckBox.checked=true;
       } else {
    lightCheckBox.checked=false;
    }
  setLight(!lightCheckBox.checked);
}
autoDetectTheme();
lightCheckBox.addEventListener("change",()=>setLight(!lightCheckBox.checked));





