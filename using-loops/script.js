// TODO: Implement the oddNumbers function
function oddNumbers() {
  const ranges = [
    [0, 4],
    [10, 33],
    [9, 11],
  ];

  for (let range of ranges) {
    let start = range[0];
    let end = range[1];

    for (let i = start; i <= end; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
}

//console.log(oddNumbers(0, 4));
// result should be: 1,3

//console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function

function charCount(word, char) {
    let count = 0;
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] === char) {
          count++;
        }
    }

    return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
