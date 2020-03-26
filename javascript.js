// JavaScript Document
//ovo tu je live vrijeme
 function startTime() {
 var today = new Date();
 var h = today.getHours();
 var m = today.getMinutes();
 var s = today.getSeconds();
 m = checkTime(m);
 s = checkTime(s);
 document.getElementById('time').innerHTML =
 h + ":" + m + ":" + s;
 var t = setTimeout(startTime, 500);
 }
 function checkTime(i) {
   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
   return i;
 }


//ovo tu su display ekrana i power buttona
document.getElementById('screen').style.visibility='hidden';

document.getElementById('wrapper5').addEventListener('click', function(){
var hidden =  document.getElementById('screen').style.visibility=='hidden';
var hid=document.getElementById('wrapper5').style.backgroundColor=="white";
if (hidden&&hid) {document.getElementById('screen').style.visibility='visible';
document.getElementById('wrapper5').style.backgroundColor="red";
}
else{
            document.getElementById('screen').style.visibility='hidden';
document.getElementById('wrapper5').style.backgroundColor="white";
}

//ovo ce bit za mjenjane ikone snow jeli

document.getElementById("sun1").style.visibility="hidden";

document.getElementById("snow").addEventListener("click",function(){
document.getElementById("temperature").innerHTML=Number(18);
if(hidden){
document.getElementById("sun1").src="buttons/Snowflake.png";
visible1=document.getElementById("sun1").style.visibility="visible";
}
else document.getElementById("sun1").style.visibility="hidden";

//plusic
document.getElementById("plus").addEventListener("click",function(){
if(visible1){
temp=document.getElementById("temperature").innerHTML;
if(temp<20)
document.getElementById("temperature").innerHTML=Number(temp)+0.5;
}
});
//minusic
document.getElementById("minus").addEventListener("click",function(){
if(visible1){
temp=document.getElementById("temperature").innerHTML;
if(temp>15)
document.getElementById("temperature").innerHTML=Number(temp)-0.5;
}
});
});

//ovo za sun

document.getElementById("sun").addEventListener("click",function(){
document.getElementById("temperature").innerHTML=Number(23);
if(hidden){
document.getElementById("sun1").src="buttons/sun icon.png";
document.getElementById("sun1").style.visibility="visible";

}
else document.getElementById("sun1").style.visibility="hidden";

//minusic
document.getElementById("minus").addEventListener("click",function(){
if(visible1){
temp=document.getElementById("temperature").innerHTML;
if(temp>20)
document.getElementById("temperature").innerHTML=Number(temp)-0.5;
}
});
//plusic
document.getElementById("plus").addEventListener("click",function(){
if(visible1){
temp=document.getElementById("temperature").innerHTML;
if(temp<30)
document.getElementById("temperature").innerHTML=Number(temp)+0.5;
}
});

});
});
