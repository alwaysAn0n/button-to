parasails.registerPage('user-button-page', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    amount: 0,
    useAmount: 100,
    username: '',
    mbid: '',
    avatarString: ''
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach raw data exposed by the server.
    _.extend(this, SAILS_LOCALS);

    this.useAmount = this.amount ? Number( (this.amount/100).toFixed(2) ) : this.useAmount;
    console.log('using:',this.useAmount, this.amount, typeof this.amount);
  },
  mounted: async function() {

    window.addEventListener('load', function(){
      var amountDiv = document.getElementById('amount')
      // Set focus on the amount so th user can immediately type and see the stepper controls from the number input
      amountDiv.focus();
      // Move cursor postion to end of the value
      var value = amountDiv.value; //store the value of the element
      amountDiv.value = ''; //clear the value of the element
      amountDiv.value = value; //set that value back.  
    });

  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    runAnimation: function() {
      console.log('flipping the coin!');
      var avatarCoin = document.getElementById('avatar');
      avatarCoin.classList.remove('tipped');
      setTimeout(function(){
        avatarCoin.classList.add(('tipped'));
      }, 100); // have to pause before adding new class for the browser to play an animation for new class
      
    }

  }
});
