const fibonaci = (n) => ({
  [Symbol.iterator]:()=> {
    let i =1;
    let number1, number2 = 0;
    return {
      next: () => {
        if(i++<=n){
          [number1, number2] = [number2, (number1+number2) || 1];
          return { value : number1, done : false }
        }
        else{
          return{ done : true }
        }
      }
    }
  }
})

console.log([...fibonaci(6)]);