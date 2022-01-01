alert("Print all even numbers <= n")
var n=parseInt(prompt("Enter any number"))
var num=[]
for(var i=1;i<=n;i++)
{
  if(i%2==0)
  {
    console.log(i);
    num.push(i)
   }
}
alert(num)