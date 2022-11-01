// Write a function called vowelCount which accepts a string and returns a map where the
// keys are letters and the values are the count of the vowels in the string.

function vowelCountMap(string) {

  let vowels = 'aeiou';
  var countMap = new Map();

  for(let s of string.toLowerCase()) {
    if(vowels.includes(s)) {
      if(countMap.has(s))
        countMap.set(s, countMap.get(s) + 1 )
      else
        countMap.set(s, 1)
    }   
  }
  console.log(countMap)
}

vowelCountMap('hay hi how are doing today?');