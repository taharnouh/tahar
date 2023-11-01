

    let menutxt = document.getElementById("menutxt");
    let clbtn = document.getElementById("cl");
    let op = document.getElementById("op");
    function d() {
        clbtn.classList.add("hide")
        menutxt.classList.add("hide")
      }
      d();
      clbtn.onclick = function () {
        this.classList.add("hide");
        menutxt.classList.add("hide");
        op.classList.remove("hide");
      };
      op.onclick = function () {
        this.classList.add("hide");
        menutxt.classList.remove("hide");
        clbtn.classList.remove("hide");
      };
  
