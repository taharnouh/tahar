window.onload = function () {
  console.log('lol') ;
  let bt = document.getElementById("bt");
  var h = document.getElementById("h");
  let a = document.getElementById("am");
  var c = document.getElementById("c");
  var j = document.getElementById("j");
  var img = document.getElementById("im"); 
  document.getElementById("competances").innerHTML = "My competances";
  a.onmouseenter = function () {
    img.src = a.src;
  };
  h.onmouseenter = function () {
    img.src = h.src;
  };
  c.onmouseenter = function () {
    img.src = c.src;
  };
  j.onmouseenter = function () {
    img.src = j.src;
  };
  function j() {
    oro.style.display = "block";
  }
  bt.onclick = function () {
    scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  onscroll = function () {
    if (scrollY >= 200) {
      bt.style.display = "block";
    } else {
      bt.style.display = "none";
    }
  };
};
