
function flipCoin() {
  var avatarCoin = document.getElementById("avatar");
  avatarCoin.classList.remove("tipped");
  setTimeout(function(){
    avatarCoin.classList.add(("tipped"));
  }, 100); // have to pause before adding new class for the browser to play an animation for new class
}

document.getElementById("moneyButton").addEventListener("click", flipCoin);

window.addEventListener("load", function(){
  var amountDiv = document.getElementById("amount")
  // Set focus on the amount so th user can immediately type and see the stepper controls from the number input
  amountDiv.focus();
  // Move cursor postion to end of the value
  var value = amountDiv.value; //store the value of the element
  amountDiv.value = ''; //clear the value of the element
  amountDiv.value = value; //set that value back.  
});

// FAKE LISTENING FOR OTHER TRANSACTIONS
// setInterval(flipCoin, 5000)