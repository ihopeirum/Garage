window.onload = function () {

  var menu_btn = document.querySelectorAll(".head_tab_btn")
  var menu_cont = document.querySelectorAll(".head_tab_cont")
  var btnKr = document.getElementById("korea")
  var btnCn = document.getElementById("china")
  var btnJp = document.getElementById("japan")
  var btnUs = document.getElementById("usa")

  btnKr.addEventListener('click', function () {
    // for (i = 0; i < menu_btn.length; i++) {
    //   menu_btn[i].style.backgroundColor = ("#f0f0f0");
    //   menu_cont.style.display = ("none");
    // }
    var contKr = document.getElementById("korea_cont");
    contKr.style.display = ("block");
    btnKr.style.backgroundColor = ("papayawhip");
  });

  btnCn.addEventListener('click', function () {
    var contCn = document.getElementById("china_cont");
    contCn.style.display = ("block");
    btnCn.style.backgroundColor = ("olivedrab");
  });

  btnJp.addEventListener('click', function () {
    var contJp = document.getElementById("japan_cont");
    contJp.style.display = ("block");
    btnJp.style.backgroundColor = ("lightcoral");
  });

  btnUs.addEventListener('click', function () {
    var contUs = document.getElementById("usa_cont");
    contUs.style.display = ("block");
    btnUs.style.backgroundColor = ("royalblue");
  });






  // function menu_btnHandler() {
  //   if () {
  //     console.log('ok');
  //   }
  //   // this.style.display = "block";
  // };

  // for (i = 0; i < menu_btn.length; i++) {
  //   menu_btn[i].addEventlistener("click", menu_btnHandler);
  // }








}