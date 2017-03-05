var countProductInCheck = 9;
var productsInStock = 999;
if(countProductInCheck > productsInStock){
  console.log(`На складе нет такого количества товаров`);
} else {
  if(countProductInCheck == productsInStock){
  console.log(`Вы забираете весь товар c нашего склада!`);
  } else {
    console.log(`Заказ оформлен`);
  }
}

var place = 'Луна';
var repl;
switch(place) {
  case 'Луна':
    repl = '150 Q';
    break;

  case 'Крабовидная туманность':
    repl = '250 Q';
    break;
    
  case 'Галактика Туманность Андромеды':
    repl = '550 Q';
    break;
    
  case 'Туманность Ориона':
    repl = '600 Q';
    break;
    
  case 'Звезда смерти':
    repl = 'договорная цена';
    break;

  default:
    repl = 'требует дополнительного поссчета';
    break;
}
console.log(`Стоимость доставки для области ${place}: ${repl}.`);


var priceStorekeeper = "h";
try{
    if(typeof(priceStorekeeper) == 'string'){
      throw `${priceStorekeeper} не является числом`;
    }
    console.log("Цена товара введена корректно");
    
  } catch(e) {
      console.log('Возникола ошибка:', e);
}
