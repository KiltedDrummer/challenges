var findMissing = function (list) {  
  var difference;

  for (var i = 0; i < list.length; i++) {
    difference = list[i + 1] - list[i];
    for (var j = 0; j < list.length; j++) {
      if (list[j] + (difference * 2) === list[j + 1]) {
        return list[j] + difference;
      }
    }
  }
  return 'did not work' ;
}