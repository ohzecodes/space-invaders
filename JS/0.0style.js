function dark() {
    document.body.style.backgroundColor = 'black'
    document.getElementById("canv").style.backgroundColor = 'black'

}
function light() {
    document.body.style.backgroundColor = 'white';
    document.getElementById("canv").style.backgroundColor = 'white'

}
function ref() {
    document.getElementById('myref').style.display = 'list-item'; 
    document.getElementById('picref').style.display = 'none'
}
function picref() {
    document.getElementById('picref').style.display = 'list-item';
    document.getElementById('myref').style.display = 'none'
}

