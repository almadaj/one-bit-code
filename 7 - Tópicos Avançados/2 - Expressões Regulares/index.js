function PhoneNumber(phoneNumberString) {
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "");
  this.countryCode = fixedString.match(/[?<=\+]\d{1,3}/);
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/);
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "");
}

console.log(new PhoneNumber("+55 (85) 9 9854-9193"));
console.log(new PhoneNumber("+55 (51) 3262-7015aasd"));
