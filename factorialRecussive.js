function factorial(num) {
  // base case
  if (num === 1) {
    return num;
// Recussive case  Recursion & callback
  } else {
  return  num * factorial(num - 1);
  }

}


console.log(factorial(4));
