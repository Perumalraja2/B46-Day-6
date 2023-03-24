//Palindrome

// anonymous function

let array6 =["malayalam","mama","dad","11","hello"]
let pal_me = function(array6)
 { 
 var result = array6.filter(element=>
     ((element.split("").join())===(element.split("").reverse().join())))
     console.log(result)
}
pal_me(array6);

    
 // IIFE function    
    

 (function(array6)
 { 
    var result = array6.filter(element=>
        ((element.split("").join())===(element.split("").reverse().join())))
        console.log(result)
   }
 )
 (["appa","mama","amma","athai","hello","1331","1452"])

