// Start of File: 02_MobileDetection.js

function isMobileOrTablet() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile =
    /mobile|android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    );
  const isTablet = /tablet|ipad/i.test(userAgent);
  return isMobile || isTablet;
}
const makeOverlay = () => {
  if (!isMobileOrTablet()) {
    return;
  }
  const InnerContent = document.createElement("div");
  const overlayDiv = document.getElementById("overlay");
  InnerContent.innerHTML = `<p>We have detected that you're using a mobile device.</p>
       <p>The game is NOT optimized for mobile devices</p>`;
  overlayDiv.appendChild(InnerContent);
  overlayDiv.style.display = "block";

  setTimeout(() => {
    let p = document.createElement("p");
    p.textContent = "Tap anywhere to continue";
    InnerContent.appendChild(p);
    p.classList.add("blink");
    overlayDiv.onclick = () => {
      overlayDiv.style.display = "none";
    };
  }, 1500);
};
makeOverlay();

//End of File: 02_MobileDetection.js
