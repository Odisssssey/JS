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


function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}

function getSubscribedEmails(clients){
  var mails = [];
  clients.forEach(function (man, i){
    if(man.isSubscribed){
      mails.push(man.email);
    }
  });
  return mails;
}

console.log(getSubscribedEmails(clients).forEach(sendMail));
