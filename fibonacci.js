// Exponential runtime  Big O Notation =>O(n^2) Avoid this one too slow as input grows
function fibonacci(position) {
  // runtime O(n^2)
  if (position < 3) {
    return 1;
  }
  else {
    return fibonacci(position - 1) + fibonacci(position - 2);
  }
}

console.log(fibonacci(6));
