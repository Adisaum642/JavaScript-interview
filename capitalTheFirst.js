
function capitalFirst(str){

  let i = 0 ;
  let n = str.length;
  let result = ""

  while(i<n){
    result += str[i].toUpperCase()
    i++ ;


    while(i<n && str[i] != " "){

      result += str[i]
      i++
    
    
    }


    while(i<n && str[i] == " "){

      result += str[i]
       i++
    }
  }
return result;

  
}

const res = capitalFirst("take the help of this doc and complete the assignment") 

console.log(res)
