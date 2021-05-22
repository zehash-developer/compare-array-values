// Tests the values of 2 same length arrays
// Scores are earnt on which value is greater.
function compareArrayValues(a, b) {
  // This is our return array
  // Prefill it with the same init values of 0
  let score = new Array(2).fill(0);
  // Just need a single for loop as we want the same index for both arrays
  // and will test a[idx] and b[idx] values against each other.
  for (let idx = 0; idx < a.length; idx++) {
    // array idx values need to be a maximum of 99.
    if (a[idx] < 100 && b[idx] < 100) {
      // If values are equal no score is granted.
      if (a[idx] > b[idx]) {
        score[0]++;
      } else if (a[idx] < b[idx]) {
        score[1]++;
      }
    }
  }

  return score;
}
