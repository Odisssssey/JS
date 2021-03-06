const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [ 11700, 1980, 450, 5500 ]
}, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [ 440, 226, 7650, 2990, 70 ]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [ 720 ]
}];

clients.findByName = function(name){
  return clients.find(function (man) {
    if (man.name == name) {
      return man;
    }
  });
};

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email); // zoidberg-md@list.un

const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo); // undefined

/*--2--*/

function sumOrder(man){
  return man.reduce(function (memo, el) {
    return memo + el;
  }, 0);
}

function compareByTotalSumm(left, right){
  left = sumOrder(left.orders);
  right = sumOrder(right.orders);
  if (left < right){
    return 1;
  }
  if (left > right){
    return -1;
  }
  if (left == right){
    return 0;
  }
}

clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));
