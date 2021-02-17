const array = [1,2,3,4,1,23,1];
const total = array.reduce((acc,val)=> acc += val);
console.log(total);