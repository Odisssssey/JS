var sam = 0;

function taxCalculation(chek){
  sam += chek / 100 * 173;
  return chek / 100 * 173;
}

taxCalculation(125);
taxCalculation(1255);
taxCalculation(1205);
console.log(`Налог с продаж (73%) к оплате: ${sam} Q`);

var resource = 30;

function packaging(h, l, v){
  expense = h*l*2 + h*v*2 + v*l*2;
  resource -= expense;
  if(resource >= 0){
    return `Заказ (${h}/${l}/${v} метра) упакован, осталось упаковочной бумаги ${resource} м2`;
  } else{
    return 'Заказ не может быть обработан';
  }
}

console.log(packaging(1, 0.3, 2));
console.log(packaging(0.3, 1, 1));

var chargeTeleport = [7, 12, 1];
var counter = [0, 0, 0];

function countPower(namberTeleport){
  counter[namberTeleport-1] +=1;
  var vrem = chargeTeleport[namberTeleport-1]-counter[namberTeleport-1];
  if(vrem < 0){
    return `Телепорт ${namberTeleport} недоступен, требуется перезарядка`;
  }else{
    return `Телепорт ${namberTeleport}: использован заряд, ${chargeTeleport[namberTeleport-1]-counter[namberTeleport-1]} единиц осталось`;
  }
}
console.log(countPower(1));
console.log(countPower(1));
console.log(countPower(1));
console.log(countPower(3));
console.log(countPower(1));
console.log(countPower(2));
console.log(countPower(3));
console.log(countPower(2));
