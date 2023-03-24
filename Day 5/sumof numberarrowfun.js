let sum = [1,2,3,4,5,6,7,8,9]
let add = (sum)=>{
let add1 = sum.reduce((value1,value2)=>(value1+value2))
console.log(add1)
}
add(sum)