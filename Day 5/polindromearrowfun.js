let array6 =["malayalam","mama","dad","11","hello"]
let pal_me =(array6)=>
 { 
 var result = array6.filter(element=>
     ((element.split("").join())===(element.split("").reverse().join())))
     return result;
}
console.log(pal_me(array6));