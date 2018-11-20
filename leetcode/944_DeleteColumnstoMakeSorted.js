/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = function (A) {
  let result = 0;
  const colStrings = [];

  const colChecker = (string) => {
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] > string[i + 1]) {
        return false;
      }
    }
    return true
  }

  for (let i = 0; i < A[0].length; i += 1) {
    if (!colStrings[i]) {
      colStrings.push('')
    }
    A.forEach(string => {
      colStrings[i] += string[i];
    });
  }

  colStrings.forEach(string => {
    if (!colChecker(string)) {
      result += 1;
    }
  });

  return result;
};