class Scooter{

  static nextSerial = 0

  constructor(station){
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

    rent() {
        if (this.charge > 20 && !this.isBroken) {
          this.user = user;
          this.station = null;
        } else if (this.charge <= 20) {
          throw new Error("Scooter needs to charge");
        } else {
          throw new Error("Scooter needs repair");
        }
      }


  
    dock(station) {
      this.station = station;
      this.user = null;
    }


  
    // recharge() {
    //   this.charge = 100;
    // }

    recharge() {
      let charge = this.charge;
      setInterval(() => {
        if (charge < 100) {
          charge++;
          console.log(`Scooter ${this.serial} is now ${charge}% charged`);
        } else {
          console.log(`Scooter ${this.serial} is now fully charged`);
          clearInterval();
        }
      }, 1000);
    }
  
    requestRepair() {
      setTimeout(() => {
        this.isBroken = false;
        console.log('Repair completed');
      }, 5000);
    }

  // requestRepair() {
  //   this.isBroken = true;
  //   setTimeout(() => {
  //     this.isBroken = false;
  //     console.log(`Scooter with serial ${this.serial} has been repaired`);
  //   }, 5000);
  // }
 } 
  Scooter.nextSerial = 1;


module.exports = Scooter
