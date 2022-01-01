
alert("Minimum of the three numbers")
var n1=parseInt(prompt("Enter 1st number"));
var n2=parseInt(prompt("Enter 2nd number"));
var n3=parseInt(prompt("Enter 3rd number"));
var min=Math.min(Math.min(n1,n2),n3)
alert("The Minimum Number is" +min)
console.log(min);