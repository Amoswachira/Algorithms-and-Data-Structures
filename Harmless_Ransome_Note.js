// Big O Notation used to classify how scalable an algorithm or function  is
// used to determine the worst case  runtime of an algorithm
// or how long it takes for an algorithm to complete based on the input size

// Time complexity
// constant runtime Big O Notation => O(1)
// linear runtime   Big o Notation => O(n) or O(n + m) Or O(n) + O(m)
// Exponential runtime  Big O Notation =>O(n^2) Avoid this one too slow as input grows
// logarithmic runtime  Big O Notation => O(log n) Example Binary Search very perfomant

function harmlessRansomNote(noteText, MagazineText) {
  var noteArr = noteText.split(' ');
  var magazinearr = MagazineText.split(' ');
  var magazineobj = {};
// O(n) linear Runtime
  magazinearr.forEach(word => {
    if (!magazineobj[word]) magazineobj[word] = 0;
    magazineobj[word]++;
  });
  // O(n) linear Runtime
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineobj[word]) {
        magazineobj[word]--;
        if (magazineobj[word] < 0 ) noteIsPossible = false;
      }
         else noteIsPossible = false;
  });
    return noteIsPossible;
}
console.log(harmlessRansomNote('flex is programmer', 'This is about a young programmer called flex this is also impoartant'));
