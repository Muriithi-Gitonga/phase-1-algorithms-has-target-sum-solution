function hasTargetSum (array, target) {
  // create an abject to keep track of all no's seen
  const seenNumbers = {}
  for (const number of array) {
    const complimentary = target -number
    if (complimentary in seenNumbers) return true
    seenNumbers[number] = true;
  }
  return false 
}

// complexity O(n)




function hasTargetSum(array, target) {
  // Write your algorithm here
  
  for (let i =0; i < array.length; i++) {
    const complimentary = target - array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (complimentary === array[j]) return true
   } 
   
  }
  return false
}



/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
   iterate over the array 
  for the current number identify a complimentary number
  ieterate over the remaining number in the array 
  check if any of the number is the complimentary 
  if so return true 
  else return false
*/

/*
  Add written explanation of your solution here
   I need to make a function that checks if two two numbers in an array 
  add up t some target number. eg [1,2,3,4] and the target number is 6. 
  I know that that 2 and 4 add up to 6, so i should return true

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
