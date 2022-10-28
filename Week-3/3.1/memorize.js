function memorizeSum (...args) {

  let total = 0;
  let numbers = args;

  //check if item already exisits in storage
  if(localStorage.getItem(numbers))
    return localStorage.getItem(numbers);

  //add all numbers
  for(var key in args) {
    total += args[key];
  }

  //add to storage
  localStorage.setItem(numbers, total);
  
  return total;
}

console.log(memorizeSum(100, 100));