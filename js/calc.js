   let plus = document.getElementById("plus"); 
    let min = document.getElementById("min"); 
    let mult = document.getElementById("x");  
    let divid = document.getElementById("qisma"); 
    let st = document.getElementById("st");
    let sd = document.getElementById("sd");
    let res = document.getElementById("last"); 
    plus.onclick=function(){
        res.value=( Number(st.value)+Number(sd.value)) ;  
    
    }
    min.onclick=function(){
        res.value=( Number(st.value)-Number(sd.value)) ;    }
     mult.onclick=function(){
        res.value=( Number(st.value)*Number(sd.value)) ;    }
    divid.onclick=function(){
        res.value=( Number(st.value)/Number(sd.value)) ;    }
        
