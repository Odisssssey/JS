let codes = [
  'Madam, I’m Adam',
  'A man, a plan, a canal. Panama',
  '----<-------Eve------->-----',
  '[__777-x-44-x-777__]',
  '1234564321',
  'Olson in Oslo'
];

function checkCoupon(code){
  if(code.replace(/\W/g, '').length > 10){
    if (code.split("").reverse().join("").replace(/\W/g, '').replace(" ", "").toLowerCase() == code.replace(" ", "").replace(/\W/g, '').toLowerCase()){
      return true;
    }
  }
  
  return false;
}

for (let code of codes) {
  let result = checkCoupon(code) ? 'подходит' : 'не подходит';
  console.log(`Код «${code}» ${result}`);
}


/*----2----*/


const texts = [
  '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
  '<EM>Световой мечь</EM> в <strong>каждый</strong> дом!'
];

function stripTags(text){
  return text.replace(/[<//]+[A-Za-z]+>/g, '');
}


for (let text of texts) {
  console.log(stripTags(text));
}


/*---3---*/

const fields = [
  { name: 'name', rule: /^[a-z ]{5,}$/i },
  { name: 'email', rule: /^[a-z_-]{3,}@[a-z]{3,}\.[a-z]{2,3}/i },
  { name: 'phone', rule: /\+7\d{10}/i },
];

const forms = [
  { name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690' },
  { name: 'III', email: 'ivan@test', phone: '11111' }
];

function validate(form, fields){
  let s=0;
  fields.forEach(function(val, index){
    let result = form[val.name].match(val.rule);
    //console.log(result[0], form[val.name]);
    try{
      if(typeof(result[0]) === -1){
      } else {
        if(result[0] != form[val.name]){
          s = 1;
        }
      }
    } catch(e) {s = 1; }
  });
  if(s==1){
    return false;
  }
  return true;
}

for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {
    console.log('Ошибок нет');
  } else {
    console.log('Форма заполнена не верно');
  }
}
