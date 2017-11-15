const at = function (num){
  let str = "";
  for (let j=1; j<=num; j=j+1){
      str = str+"@"
     }
     return str;
     };

const space = function(space1) {
  let space2= "";
  for (let i=0; i<space1; i=i+1){
    space2 = space2+" ";
     } 
    return space2;
     }


const united = function(a,num){
	console.log(space(a)+at(num));

     };


 const printDiamond = function(k) {
     if(k%2===0) {
	  k=k+1;
     }


 for(let i=0; i<(k+1)/2; i=i+1){
			united((k-1)/2-i, 2*i+1);
		}

 for(let i=0; i<(k-1)/2; i=i+1) {
		  united(i+1, k-2-2*i);
		}


};