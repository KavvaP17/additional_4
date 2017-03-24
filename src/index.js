module.exports = function multiply(first, second) {
  let arrFirst=first.split('').reverse();
  let arrSecond=second.split('').reverse();
  let res=[];
  arrSecond.forEach(function(value1,index1){
    arrFirst.forEach(function(value2,index2){
      if (res[index1+index2]){
          res[index1+index2]+=value1*value2;
      }
      else{
          res[index1+index2]=value1*value2;
      }
    });
  });
  res.forEach(function(value,index){
    if (value/10>=1){
      if (res[index+1]){
          res[index+1]+=Math.floor(res[index]/10);
      }
      else{
          res[index+1]=Math.floor(res[index]/10);
      }
      res[index]=res[index]%10;
    }
  })
  return res.reverse().join('');
}
