
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // Use j = i + 1 to ensure we're not comparing the same element at the same index.
      const total = array[i] + array[j];
      console.log(array[i], array[j], total);

      if (total === target) {
        // If a pair is found whose sum equals the target, return true.
        return true;
      }
    }
  }
  // If no such pair is found after checking all pairs, return false.
  return false;
}

// Example usage:
const array = [6, 7, 8, 9, 10];
const target = 15;
console.log(hasTargetSum(array, target));
// Output: true

/*
  Write the Big O time complexity of your function here
  O(n^2) - The function uses nested loops to iterate through each pair of elements.
*/

/* 
  Add your pseudocode here
  - Iterate through each element in the array using the outer loop.
  - For each element in the outer loop, iterate through the array again using the inner loop starting from the next index.
  - Calculate the sum of the current pair of elements.
  - If the sum equals the target, return true.
  - If no such pair is found after checking all pairs, return false.
*/

/*
  Add a written explanation of your solution here
  The function uses two nested loops to iterate through each pair of elements in the array.
  For each pair, it calculates the sum and checks if it equals the target.
  If the sum equals the target, the function returns true.
  If no such pair is found after checking all pairs, it returns false.
  The time complexity is O(n^2) due to the nested loops.
*/

// Additional tests:
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

