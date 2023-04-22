//Merge Two Sorted Array in Ascending order by removing Duplicates



let arr1  = [1,4,5,8,2,8,9]
let arr2= [2,3,6,6,7,8,0]

const arr3 = [...arr1,...arr2]

arr3.sort((a,b) => a-b)

const res = [...new Set(arr3)]

console.log(res)

//Merge Two Sorted Array in Decscending order by removing Duplicates

let arr4  = [1,4,5,8,2,8,9]
let arr5= [2,3,6,6,7,8,0]

const arr6 = [...arr4,...arr5]
arr6.sort((a,b) => b-a)

const result = [...new Set(arr6)]

console.log(result)
