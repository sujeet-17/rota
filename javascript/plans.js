
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
    const mywhite = document.getElementsByClassName("black");
    mywhite.style.height = "1500px";
  });
});


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




