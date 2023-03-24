//prime number arrow function

let c ="";
let prime = (num12)=>{
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
}
prime([1,2,3,4,5,6,7,8,9,10])
    