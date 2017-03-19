function rand(min, max) {
  return Math.ceil((max - min + 1) * Math.random()) + min - 1;
}

function generateId(sum) {
  return Array(sum).fill(1).map(value => rand(0, 9)).join("");
}

function BarcodeGenerator(size) {
  var generator = Object.create(BarcodeGenerator.prototype);
  generator.size = size;
  //generator.prefix;
  return generator;
}

BarcodeGenerator.prototype = {
  create(){
    return `${this.prefix}-${generateId(this.size)}`;
  },
};


var generator = new BarcodeGenerator(4);
//BarcodeGenerator.prefix = 'AA';
generator[BarcodeGenerator.prefix] = 'AA';
console.log(generator.prefix);
console.log(generator.create());

// generator[BarcodeGenerator.prefix] = 'XX';
// console.log(generator.create());
// console.log(generator.create());
// console.log(generator.create());

// delete generator[BarcodeGenerator.prefix];
// console.log(generator.create());
