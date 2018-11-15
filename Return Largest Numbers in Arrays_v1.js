function largestOfFour(arr) {
  var max;
  var b = new Array(); //max array
  for(let j=0;j<arr.length;j++){
    max=-9999; //since no negative number is provided
    //
    for(let i=0;i<arr[j].length;i++){
      if (max<arr[j][i]){ max=arr[j][i];}}
      b[j]=max;                          
                              
                              }
  return b;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
