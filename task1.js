const printDiamond = function (number,string) {
  const str = function(n) {
     let argument = "";
      for(let i = 0; i < n; i++){
       argument=argument+string;
      }
      return argument;
      }
  const spc = function(n) {
     let argument = "";
      for(let i = 0; i < n; i++){
       argument=argument+" ";
      }
      return argument;
      }
  const trianglestars = function(a,number){
    for(let i = 1, j = number; i <= a; i+=2, j--){
    console.log(spc(j)+str(i));
    }
   }
  const reverse = function(a,n){
    for(let i=a, j=n; i > 0; i-=2, j++){
    console.log(spc(j)+str(i));
    }
   }
  trianglestars(number,number/2-1);
  if (number%2 === 0){
  return reverse(number-1,0);
  } else {
  return reverse(number-2,1);
  }
}