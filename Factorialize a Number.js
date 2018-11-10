function factorialize(num) {
  //return num;
  var c=1;
  for(let i=1;i<=num;i++){
    if(num==0){return 1}
    else{
      c=c*i;
    }
  }
  return c;
}

factorialize(5);