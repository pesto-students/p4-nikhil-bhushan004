const state = {
  resolve : 'Resolve',
  reject : 'Reject',
  fulfilled : 'Fulfilled'
}



function getNumber() {
  return Math.floor(Math.random() * 10000);
}

let randomNumber = getNumber();

try {
  if(randomNumber % 5 === 0)
    console.log(`${randomNumber} is divisible by 5`)
  else
    throw `${randomNumber} is not divisible by 5`;
}
catch(error) {
  console.log(error);
}