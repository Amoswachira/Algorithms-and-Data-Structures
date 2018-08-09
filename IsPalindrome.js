// A pharse that is spelled the same way both backwards and forward
//  for Example race car
//  for Example madam, i'm adam

function isPalindrome(string){
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters ='abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArry = [];

  charactersArr.forEach(char =>{
    if (validCharacters.indexOf(char) > -1) {
      lettersArry.push(char);
    }
  });
      if (lettersArry.join('') === lettersArry.reverse().join('')) {
        return true;
      } else {
        return false;
      }

}
console.log(isPalindrome("madam im adam"));
