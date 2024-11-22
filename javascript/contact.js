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
      mywhite.style.height = "100px";
    });
  });


  $(document).ready(function () {
    $("#heading1").click(function () {
      $("#headingpara1").toggle()
      $("#headingpara2").hide()
      $("#headingpara3").hide()
      $("#headingpara4").hide()
      $("#headingpara5").hide()
      $("#headingpara6").hide()
    });
  
    $("#heading2").click(function () {
      $("#headingpara2").toggle()
      $("#headingpara1").hide()
      $("#headingpara3").hide()
      $("#headingpara4").hide()
      $("#headingpara5").hide()
      $("#headingpara6").hide()
    });
  
    $("#heading3").click(function () {
      $("#headingpara3").toggle()
      $("#headingpara2").hide()
      $("#headingpara1").hide()
      $("#headingpara4").hide()
      $("#headingpara5").hide()
      $("#headingpara6").hide()
    });

    $("#heading4").click(function () {
      $("#headingpara4").toggle()
      $("#headingpara2").hide()
      $("#headingpara1").hide()
      $("#headingpara3").hide()
      $("#headingpara5").hide()
      $("#headingpara6").hide()
    });

    $("#heading5").click(function () {
      $("#headingpara5").toggle()
      $("#headingpara2").hide()
      $("#headingpara1").hide()
      $("#headingpara4").hide()
      $("#headingpara3").hide()
      $("#headingpara6").hide()
    });

    $("#heading6").click(function () {
      $("#headingpara6").toggle()
      $("#headingpara2").hide()
      $("#headingpara1").hide()
      $("#headingpara4").hide()
      $("#headingpara3").hide()
      $("#headingpara5").hide()
    });
  });
  

  function validation() {
    const mymails = document.getElementById("mails");
    regx = /([a-zA-Z0-9]{3,15})+@+([a-zA-Z]{4,10})+\.+([a-zA-Z]{2,8})/;
    console.log(mymails.value)
  
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
  
  function validation1()
  {
    const mypass=document.getElementById("pass");
    reg=/([a-zA-Z0-9]{5,6})/;
    console.log(mypass.value)
  
    if(reg.test(mypass.value)){
      mypass.style.border="2px solid  rgb(106, 106, 255)";
      mypass.style.backgroundColor="rgb(243, 255, 247)";
      mypass.style.boxShadow="0px 0px 5px 1px rgb(106, 106, 255)";
    }
    else
    {
      mypass.style.border="2px solid red";
      mypass.style.backgroundColor="rgb(243, 255, 247)";
      mypass.style.boxShadow="0px 0px 5px 1px red";
    }
  }
  
  function validation2()
  {
    const mycontact=document.getElementById("contactus1");
    alert("login succesfully");
    const mymails = document.getElementById("mails");
    const mypass=document.getElementById("pass");
  
    localStorage.setItem(mymails.value,mypass.value);
  }

  function validation3()
  {
    alert("successfully sended");
    const myname=document.getElementById("Names");
    const myemails = document.getElementById("emails");
    const myphone=document.getElementById("phones");
    const mymessage=document.getElementById("messages");
    localStorage.setItem(myname.value,myemails.value);
    localStorage.setItem(myphone.value,mymessage.value);
  }