// Fizzbuzz Algorithm
//
function fizzBuzz(num){
  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log('fizzBuzz')
    }else if (i % 3 === 0) {
      console.log('fizz')
    }else if (i % 5 === 0) {
      console.log('Buzz')
    }else {
      console.log(i)
    }
  }
}
fizzBuzz(30);
