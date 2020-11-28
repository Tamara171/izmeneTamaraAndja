function prikaziVreme() {
    var d = new Date().getHours();
    var d1 = new Date().getMinutes();
    var d2 = new Date().getSeconds();
    document.getElementById("datum").innerHTML = d + ":" + d1 + ":" + d2;
    var t = setTimeout(prikaziVreme, 500);
}   
function skini1(){
    document.getElementById("slika1").style.opacity=0.7;
}
function prelaz1(){
    document.getElementById("slika1").style.opacity=1;
}
function skini2(){
    document.getElementById("slika2").style.opacity=0.7;  
}
function prelaz2(){
    document.getElementById("slika2").style.opacity=1;
}