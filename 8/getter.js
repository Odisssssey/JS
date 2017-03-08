var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    price: 10000,
    discount: 7,
    available: 3
  },
  {
    title: 'Ховерборд Mattel 2016',
    price: 9200,
    discount: 4,
    available: 14
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    price: 57000,
    discount: 0,
    available: 1
  }
];

const itemPrototype = {
  hold(amount = 1) {
    if (this.available < amount) {
      return false;
    }
    this.available -= amount;
    this.holded += amount;
    return true;
  },
  toString() {
    return `${this.title} (остаток ${this.available}, в резерве ${this.holded})`;
  }
};

function createItem(title, amount) {
  const item = Object.create(itemPrototype);
  item.title = title;
  item.available = amount;
  item.holded = 0;
  return item;
}

const items = [];
for (let item of positions) {
  items.push(createItem(item.title, item.available));
}

items[0].hold(2);
items[1].hold(8);
items[1].hold(10);
items[2].hold(1);

for (let item of items) {
  console.log(`Товар ${item}`);
}

function unhold(pos, free){
  if(pos.holded >= free){
    pos.available += free;
    pos.holded -= free;
    return true;
  }
  if(typeof(free) == "undefined"){
    pos.available += pos.holded;
    pos.holded = 0;
    return true;
  }
  return false;
  
}

unhold(items[1], 4);
unhold(items[2]);

items.forEach(function (id, i){
  console.log(`Товар ${id.title} (остаток ${id.available}, в резерве ${id.holded})`);
});

positions.forEach(function (id, i){
  console.log(id);
  const config = {
    get () {
      return this.price/100*(100-this.discount);
    },
    set (price) {
      this.discount = price / this.price * 100;
    }
  };
  Object.defineProperty(id, 'finalPrice', config);
});

console.log(positions[0].finalPrice); // 9300
positions[2].finalPrice = 28500;
console.log(positions[2].finalPrice);
console.log(positions[2].discount); // 50


const requiredFields = [ 'title', 'price', 'discount' ];
let form1 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  price: 7800,
  discount: 0
};
let form2 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  discount: 10
};


function isValidPosition(pos, needpart){
  var z=0;
  needpart.forEach(function (id, i){
    try{
      if(typeof(pos[`${id}`]) == "undefined"){
        z += 1;
      }
    } catch(e) {}
  });
  if(z === 0){
    return true;
  }else{
    return false;
  }
  
}

function ValidPosition(pos, needpart){
  if (isValidPosition(pos, needpart)){
    console.log('Форма заполнена верно');
  } else {
    console.log('В форме не заполнены необходимые поля');
  }
}

ValidPosition(form2, requiredFields);
