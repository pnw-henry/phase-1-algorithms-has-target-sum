function hasTargetSum(array, target){
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
      if (array[i] + array[j] === target && i !== j){
        return true;
      }
    }
  }
  return false;
}

/* 
  The time complexity of my solution is not ideal, currently sitting at O(n^2).
  We are iterating through the array twice, therefore exponentially increasing 
  the time it takes to find the sum as the array length increases.
*/

/*
  First loop interation takes one element, second loop takes another.
  If first element and second element add up to the target number, and if
  the indexes don't equal each other, return true. If no two pairs add up to
  the target number, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1], 1));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2], 1));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3], 3));
  
  console.log("");

  console.log("Expecting: true");
  console.error("=>", hasTargetSum([1, 1], 2));

  console.log("");

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
