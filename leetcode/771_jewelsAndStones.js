var numJewelsInStones = function (J, S) {
  let count = 0;
  const jewels = J.split('').reduce((gems, letter) => {
    gems[letter] = 1;
    return gems
  }, {});

  for (let i = 0; i < S.length; i += 1) {
    if (jewels[S[i]]) {
      count += 1;
    }
  }

  return count;
};