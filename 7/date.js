var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный комбинат',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];


function lotCalculator(pos, amount){
  let count = Math.ceil(amount/pos.producer.lot);
  return {'lots': count, 'total': count*pos.price*pos.producer.lot};
}

function order(pos, amount){
  let res = lotCalculator(pos, amount);
  return `${pos.title} ${amount} штук: заказать партий ${res.lots}, стоимость ${res.total} Q`;
}

let result1 = order(positions[1], 15);
console.log(result1); // { lots: 2, total: 257600 }

let result2 = order(positions[2], 1);
console.log(result2); // { lots: 1, total: 57000 }

/*--2--*/

const deferedPayments = [];

function deferPay(producerInf, sum, dat){
  dat.setDate(dat.getDate() + producerInf.deferPeriod);
  deferedPayments.push({'paymentDate': dat, 'amount': sum, 'producer': producerInf});
}

function delay(pos, sum, dat){
  return deferPay({'name': pos.producer.name, 'deferPeriod': pos.producer.deferPeriod}, sum, dat);
}

delay(positions[0], 7200, new Date(2030, 4 - 1, 10));
delay(positions[1], 57000, new Date(2030, 4 - 1, 10));

deferedPayments.forEach(function (id, i){
  console.log(`${id.paymentDate.toLocaleDateString('ru-Ru')}: ${id.producer.name}, сумма ${id.amount} Q`);
});

/*--3--*/

function loadCurrencyJSON() {
  return '{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,"BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,"CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,"ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,"CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}';
}

function convertCurrency(amount, from, to){
  var a = JSON.parse(loadCurrencyJSON());
  return parseFloat(amount / a[`${to}`] * a[`${from}`]).toFixed(2);
}


let price1 = convertCurrency(7000, 'ZZZ', 'USD');
console.log(`Сумма ${price1} USD`);// Сумма 9505.01 USD
