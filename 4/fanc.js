function warranty(cost){
  switch(cost){
    case 1:
      return 1250;
    
    case 2:
      return 2300;

    default:
      return 'нет';
  }
  
}

var myWarranty = warranty(1);
console.log(`Дополнительное гарантийное обслуживание: ${myWarranty} Q`);


function etching(myString){
  var masInMyStr = myString.split(' ');
  return masInMyStr.length * 11;
}

var myEtching = etching('Моей любимой собаке');
console.log(`Подарочная упаковка и гравировка: ${myEtching} Q`);

function place(myZone){
  switch(myZone) {
    case 'Луна':
      return 150;
  
    case 'Крабовидная туманность':
      return 250;
      
    case 'Галактика Туманность Андромеды':
      return 550;
      
    case 'Туманность Ориона':
      return 600;
      
    case '':
      return null;
      
    default:
      return NaN;
  }
}

var myPlace = place('lkn');
if(myPlace === null){
  console.log(`Доставка не требуется`);
} else {
  if(isNaN(myPlace)){
    console.log("Ошибка при расчете стоимости доставки");
  } else {
    console.log(`Стоимость доставки: ${myPlace} Q`);
  }
}
