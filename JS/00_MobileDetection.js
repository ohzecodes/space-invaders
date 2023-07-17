function isMobileOrTablet() {
  var userAgent = navigator.userAgent.toLowerCase();
  var isMobile = /mobile|android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  var isTablet = /tablet|ipad/i.test(userAgent);
  return (isMobile || isTablet);
}
if (isMobileOrTablet()){
    const InnerContent = document.createElement("div");
    const overlayDiv = document.getElementById("overlay");
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
  