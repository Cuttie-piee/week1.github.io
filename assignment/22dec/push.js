var arr = [];
var i = prompt("Enter the first number")
i = parseInt(i)
arr.push(i);
i = prompt("Enter the second number")
i = parseInt(i)
arr.push(i);
i = prompt("Enter the third number")
i = parseInt(i)
arr.push(i);
var max = Math.max(arr[0], arr[1], arr[2]);
alert(max);
if((arr[0] >= arr[1]) && (arr[0] >= arr[2])) {
  alert(arr[0]);
} else if ((arr[1] >= arr[0]) && (arr[1] >= arr[2])) {
  alert(arr[1]);
} else {
  alert(arr[2]);
} 