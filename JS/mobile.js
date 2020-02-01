let mb= document.getElementById("mobilebtns")
if (window.innerWidth<1000) {
    mb.hidden=false
    shoot1.disabled=false
    mbr.disabled=false
    mbl.disabled=false
}


shoot1.onclick=launchnew;
mbr.onclick=function(){
    therocket.moveright();
}
mbl.onclick=function(){
    therocket.moveleft();
}