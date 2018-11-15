
function largestOfFour(arr) {
  var max;
  var b = new Array (); //max array
    //console.log("ok1")
  for(let j=0;j<arr.length;j++){
    max=arr[j][0];
    //console.log("ok2")
//console.log(max)


    for(let i=1;i<arr[j].length;i++){
      if (max<arr[j][i]){ max=arr[j][i];}
                                    }    
    b[j]=max;                          
    console.log(b[j])
    //console.log("ok3")
	//console.log(max)
                              }
  return b;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);