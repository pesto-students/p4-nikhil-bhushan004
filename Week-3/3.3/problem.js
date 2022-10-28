function createIncrement() {
  let count = 0;
  
  function increment() { 
    count++;
  }
  
  let message = `Count is ${count}`;
  
  function log() {
    console.log (message);
  }
  
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

//here value is 0 because function log is not able to access values inside increment function but it is able to access global value as 0 which is lexical scope 