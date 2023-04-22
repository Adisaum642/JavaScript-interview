let arr1 = [1,4,2,7,8,6,9]
let arr2 = [2,3,4,10,1]

const intersection = arr1.filter((curr) =>{
  return arr2.includes(curr)
})
console.log(intersection)