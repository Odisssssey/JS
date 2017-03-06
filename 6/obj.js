var positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультрозвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

var hitName = positions[2], hitPrice = prices[2];

var hit = {hitName, hitPrice};
console.log(`Хит продаж мартабря: <${hit.hitName}> цена ${hit.hitPrice} Q`);

var items = [];
positions.forEach(function (id, i){
  items.push({'name': id, 'price': prices[i]});
});

console.log(`Купите ${items[4].name} по цене ${items[4].price} Q`);


function showDiscount(size){
  if(size < 10){
      return 5;
  }
  if((10 < size) && (size < 50)){
      return 7;
  }    
  if((50 < size) && (size < 100)){
      return 10;
  }
  if(100 <= size){
      return 15;
  }
}

function callXoz(type, size){
  var sale = showDiscount(size);
  return `${items[type].name} — стоимость партии из ${size} штук ${items[type].price*size/100*(100 - showDiscount(size))} Q (скидка ${sale}%), ваша выгода ${items[type].price*size/100*showDiscount(size)} Q!`;
}

console.log(callXoz(0, 12));
console.log(callXoz(3, 97));

items[3].amount = 4;

function updateAmount(type, updateAmount=1){
  if(items[type].amount){
    if((items[type].amount-updateAmount) >= 0){
      items[type].amount -= updateAmount;
      
      if(items[type].amount === 0){
        console.log(`Это был последний ${items[type].name}, вам повезло!`);
        console.log(`${items[type].name} закончился на складе`);
      }
      
      if(items[type].amount > 0){
        console.log(`${items[type].name} — остаток ${items[type].amount} шт`);
      }
      
    }else{
      console.log(`${items[type].name} закончился на складе`);
    }
    
  }
}

updateAmount(1, 17);
updateAmount(3, 3);
updateAmount(3);

console.log(items);
