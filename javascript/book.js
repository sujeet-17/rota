$(function () {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $("#effectTypes").val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if (selectedEffect === "scale") {
      options = { percent: 50 };
    } else if (selectedEffect === "size") {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $("#effect").toggle(selectedEffect, options, 500);
  };

  // Set effect from select menu value
  $("#butsss").on("click", function () {
    runEffect();
    const mywhite = document.getElementById("white");
    mywhite.style.height = "1500px";
  });
});




function validation() {
    const mymails = document.getElementById("email");
    regx = /([a-zA-Z0-9]{3,15})+@+([a-zA-Z]{4,10})+\.+([a-zA-Z]{2,8})/;
    // console.log(mymails.value)
  
    if (regx.test(mymails.value)) {
      mymails.style.border = "2px solid  rgb(106, 106, 255)";
      mymails.style.backgroundColor = "rgb(243, 255, 247)";
      mymails.style.boxShadow = "0px 0px 5px 1px rgb(106, 106, 255)";
  
    }
    else {
      mymails.style.border = "2px solid red";
      mymails.style.backgroundColor = "rgb(243, 255, 247)";
      mymails.style.boxShadow = "0px 0px 5px 1px red";
    }
  }

  
  function validation1() {
    const myphone = document.getElementById("number");
    regx = /([a-zA-Z0-9]{10})/;
    // console.log(mymails.value)
  
    if (regx.test(myphone.value)) {
      myphone.style.border = "2px solid  rgb(106, 106, 255)";
      myphone.style.backgroundColor = "rgb(243, 255, 247)";
      myphone.style.boxShadow = "0px 0px 5px 1px rgb(106, 106, 255)";
  
    }
    else {
      myphone.style.border = "2px solid red";
      myphone.style.backgroundColor = "rgb(243, 255, 247)";
      myphone.style.boxShadow = "0px 0px 5px 1px red";
    }
  }
 

  function store(){
    const mymails=document.getElementById("email");
    const myname=document.getElementById("name");
    const mydate=document.getElementById("date");
    const mytime=document.getElementById("time");
    localStorage.setItem(mymails.value,myname.value)
    localStorage.setItem(mydate.value,mytime.value)

    alert("your booking is sended");
  }
  