// prime

// anonymous function

let num12=[1,2,3,4,5,6,7,8,9,10,11,13,12]
let d ="";
let prime = function(num12){
for (let x of num12)
{
if((x==2)||  (x==5)||(x==3))
{
  d=d+" "+x;
  }else if((x%2!=0)&&(x%3!=0)&&(x%5!=0))  
  {
    d=d+" "+x
    }
  }
  console.log(d)
}
prime(num12)
        
        
  // IIFE FUCTION
 
let c ="";
(function(num12){
for (let x of num12)
{
if((x==2)||  (x==5)||(x==3))
{
  c=c+" "+x;
  }else if((x%2!=0)&&(x%3!=0)&&(x%5!=0))  
  {
    c=c+" "+x
    }
  }
  console.log(c)
})
([2,3,4,5,6,7,8,9,10])