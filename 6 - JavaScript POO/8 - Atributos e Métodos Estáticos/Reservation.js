class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  static baseFee = 150;

  static showBaseFee() {
    console.log(`Base fee is US$${Reservation.baseFee}`);
  }

  static get premiumFee() {
    return Reservation.baseFee * 1.5;
  }
}

Reservation.showBaseFee();

const g1 = new Reservation(3, "101", 2);
console.log(g1);

Reservation.baseFee = 200;

const g2 = new Reservation(2, "302", 3);
console.log(g2);

console.log(`Premium Fee is US$${Reservation.premiumFee}`);
