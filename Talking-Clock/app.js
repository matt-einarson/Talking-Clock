const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const ones = ['twelve ', 'one ','two ','three ','four ','five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen ']
const tens = ['oh ',' ','twenty ','thirty ','forty ','fifty ']

const ampm = (hour) => {
  if(hour < 12){
    return "am";
  }
  else{
    return "pm";
  }
}

rl.question('Enter the time in digital format: ', (answer) => {

  let time = {
    hour: answer.split(':')[0],
    minute: answer.split(':')[1],
    period: ampm(answer.split(':')[0])
  };

  console.log(time);
  if(time.minute == '00'){
  console.log('It is ' + ones[time.hour%12] + time.period);
  }
  else if(time.minute%10 == 0){
    console.log('It is ' + ones[time.hour%12] + tens[time.minute/10] + time.period);
  }
  else if(time.minute > 10 &&  time.minute < 20){
    console.log('It is ' + ones[time.hour%12] + ones[time.minute] + time.period);
  }
  else{
    console.log('It is ' + ones[time.hour%12] + tens[(time.minute-(time.minute%10))/10] + ones[time.minute%10] + time.period);
  }
  rl.close();
});
