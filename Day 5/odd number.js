// print odd numbers

// anonymous function

//type 1

let oddNumber = function(array){
    let result = array.filter(element=>element%2!=0)
    return result
    }
    console.log(oddNumber([1,2,3,4,5,6,7,8,9]));

// type 2

let array1  = [10,13,25,5,6,7,8,9]
let oddNumber1 = function(array1){
    let result3 = array1.filter(element=>element%2!=0)
    console.log(result3)
    }
oddNumber1(array1);


//IIFE function

(function (array2){
var result1 = array2.filter(element=>element%2!=0)
    console.log(result1)
    
})
([1,2,3,4,5,6,7,8,9])


