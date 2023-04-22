// let arr = [1,4,5,7,9,2,55]

function averageHeight(arr){

let totalLenght = arr.length;
  let result =0

  for(let i = 0 ; i < totalLenght ; i++){

    result += arr[i];
  }
return (result/totalLenght)
  
}

const res = averageHeight([1,4,5,7,9,2,55])

console.log(res)