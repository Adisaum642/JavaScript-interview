function reverse(num){

 let res = 0 ;
while(num> 0){
  res = res * 10 + num%10;
num = Math.floor(num/10)
  }
  return res
}

const result = reverse(58799)

console.log(result)