class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.splits = [];
  }

  startClick () {
      var fixThis = this;
      this.intervalId = setInterval(function() {
        fixThis.currentTime++;
        let seconds = fixThis.twoDigitsNumber(fixThis.getSeconds());
        printTime(seconds[0], seconds[1]);
        console.log(fixThis.currentTime)
      },1000);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  twoDigitsNumber(number) {
      let formattedNumber = ("0"+ number).slice(-2);
      return formattedNumber;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }
    // splitClick() {}
  
}

