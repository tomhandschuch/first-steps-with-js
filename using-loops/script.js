// TODO: Implement the oddNumbers function

function oddNumbers(start, end) {
    if (start < 0 || end < 0) {
      return "Both numbers must be positive.";
    }
  
    let oddNums = [];
  
    for (let i = start; i <= end; i++) {
      if (i % 2 !== 0) {
        oddNums.push(i);
      }
    }
    return oddNums.join(",");
  }
  
  console.log(oddNumbers(0, 4));
  // result should be: 1,3
  
  console.log(oddNumbers(10, 33));
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
