var second = document.getElementById("second");    
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");
function clock(){
    var time = new Date();
    var hh = time.getHours();
    var mm = time.getMinutes();
    var ss = time.getSeconds();
    if(hh>12) { hh=hh-12; }
    hh=hh*360/12+(mm*360/12/60);
    mm=mm*360/60;
    ss=ss*360/60;
    second.style.transform = "rotate("+ss+"deg)";
    minute.style.transform = "rotate("+mm+"deg)";
    hour.style.transform = "rotate("+hh+"deg)";
}
clock();
setInterval(function(){ clock(); }, 1000); 
var cw = document.getElementById("clock_weight");
var sw=1;
setInterval(function(){
    if(sw==1){
        cw.style.transform = "rotate(45deg)";
        sw=sw*-1;
    } else {    
        cw.style.transform = "rotate(-45deg)"; 
        sw=sw*-1;
    }    
}, 1000);   