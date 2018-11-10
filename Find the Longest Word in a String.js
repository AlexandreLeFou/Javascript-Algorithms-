function findLongestWordLength(str) {
  var a = str.split(' ');
  var max = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i].length > max) {
      max = a[i].length;
    }
  }

  return max;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");