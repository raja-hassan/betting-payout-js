function calculatePayout() {
    console.log(`Bet type: ${this.type}`);
    const payout = this.calculatePayoutLogic.apply(this, arguments);
    console.log(`Potential payout: $${payout}`);
    return payout;
  }
  
  
  const winBet = {
    type: 'Win Bet',
    calculatePayoutLogic: function(stake) {
      return stake * 2;
    }
  };
  
  const placeBet = {
    type: 'Place Bet',
    calculatePayoutLogic: function(stake) {
      return stake * 1.5;
    }
  };
  
  const exoticBet = {
    type: 'Exotic Bet',
    calculatePayoutLogic: function(stake, multiplier) {
      return stake * multiplier;
    }
  };
  
  
  calculatePayout.call(winBet, 50);
  calculatePayout.apply(placeBet, [30]); 
  calculatePayout.call(exoticBet, 20, 3);