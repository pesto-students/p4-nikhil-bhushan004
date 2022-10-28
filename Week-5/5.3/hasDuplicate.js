let hasDuplicate = (arr) => (new Set(arr).size !== arr.length) ? true : false;

console.log(hasDuplicate([1,2,3,4,5,6]));