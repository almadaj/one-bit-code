class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(qtd) {
    this.inStock += qtd;
  }
  calculateDiscount(prc) {
    return this.price * ((100 - prc) / 100);
  }
}

const watch = new Product("Rolex Submariner", "...", 100);
const priceDiscount = watch.calculateDiscount(15);
console.log(watch);
console.log(priceDiscount);
