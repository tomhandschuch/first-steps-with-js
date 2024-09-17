// TODO: Implement the removeItem function
function removeItem(fruits, i) {
    return [...fruits.slice(0, i), ...fruits.slice(i + 1)];
}

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 0));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]



// TODO: Implement the sumOfCharacters function

function sumOfCharacters(arr) {
    return arr
    .filter(item => typeof item === "string")
    .reduce((sum, str) => sum + str.length, 0);
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55