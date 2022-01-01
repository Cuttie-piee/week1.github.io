var n = prompt();
var flag = 0;
for(var i=1; i<n; i++){
 if(n%i==0 && n/i==i){
   flag=1;
   break;
 }
}
if(flag==1){
  console.log("Perfect square");
}
else{
  console.log(" Not a perfect square");
}