   let plus = document.getElementById("plus"); 
    let min = document.getElementById("min"); 
    let mult = document.getElementById("x");  
    let divid = document.getElementById("qisma"); 
    let st = document.getElementById("st");
    let sd = document.getElementById("sd");
    let res = document.getElementById("last"); 
   const numbut = document.getElementById("num"); 
   const oprebut = document.getElementById("opre");
   const dlebut = document.getElementById("dle");
   const rezalt = document.getElementById("rezalt");
   const equle = document.getElementById("equle");

    plus.onclick=function(){
        res.value=( Number(st.value)+Number(sd.value)) ;    }
    min.onclick=function(){
        res.value=( Number(st.value)-Number(sd.value)) ;    }
     mult.onclick=function(){
        res.value=( Number(st.value)*Number(sd.value)) ;    }
    divid.onclick=function(){
        res.value=( Number(st.value)/Number(sd.value)) ;    }
 console.log ("a");
        function numclick() {
            console.log ("b")
numbut.onclick = function() {myFunction()};

function myFunction() {
 console.log("c");
   this.rezalt = this.numbut;
   console.log(this.rezalt);
}
}
numclick ();





