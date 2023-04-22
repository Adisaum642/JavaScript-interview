let a = [1,4,5,7,9,2,55]


function sumOfarray (arr){
let result = 0
  for(let i =0 ; i < arr.length ; i++){
    result += arr[i]
  }
  return Math.floor(result)
}

const res = sumOfarray([1,4,5,7,9,2,55])

console.log(res)