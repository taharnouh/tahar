// window.onload = (function () {

var h = document.getElementById('h');
let a = document.getElementById("am");
var c = document.getElementById('c');
var j = document.getElementById('j');
var img = document.getElementById('im');
document.getElementById("demo").innerHTML = "Hello World";
a.onmouseenter= function () {
 img.src=a.src;   
}
h.onmouseenter=function () {
    img.src=h.src;   
   }
c.onmouseenter= function () {
    img.src=c.src;   
   }
j.onmouseenter=function () {
    img.src=j.src;   
   }
// })
