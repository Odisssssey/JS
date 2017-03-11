function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

function fixAmount(amount) {
  try{
    if(typeof(amount.toString().replace(",", ".").match(/\d+[.,]?\d?/g)) == isNaN){
      throw -1;
    }
    return amount.toString().replace(",", ".").match(/\d+[.,]?\d?/g);
    
  } catch(e) {
      return -1;
  }
    
}

const orders = [
  { price: 21, amount: 4 },
  { price: 50, amount: '17 штук' },
  { price: 7, amount: '1,5 килограмма' },
  { price: 2, amount: ' 2.7 метра ' },
  { price: 1, amount: 'семь единиц' }
];

for (let order of orders) {
  let result = fixAmount(order.amount);
  if(result){
    console.log(`Заказ на сумму: ${result * order.price} Q`);
  }else{
    console.log(`Введено неверное значение`);
  }
}
/*---2---*/
var mas = [];
function handleKey(char){
  mas = mas.concat(char);
  if(mas.join("").slice(-4).toLowerCase() == "r2d2"){
    console.log(`Введен секретный код. Все цены уменьшены вдвое!`);
  }
}

var keys = ['2', '4', 'R', '2', 'd', '2'];
for (let key of keys) {
  handleKey(key);
}

/*---3---*/
var allGoodz = [];

function parseData(nam, goodz){
  goodz.forEach(function(val, index){
    let myGoodz = {};
    let str = val.split(',');
    str.forEach(function(v, i){
      let s = nam[i];
      myGoodz[`${s}`] = v;
      
    });
    allGoodz.push(myGoodz);
  });
  return allGoodz;
}


const data = [
  '12,Телепорт бытовой VZHIH-101 ,17,10000',
  '77, Меч световой FORCE (синий луч), 2,57000'
];

let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);
