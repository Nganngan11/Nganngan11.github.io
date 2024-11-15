function calculate(){
    var a = document.getElementById("a_value").value;
    //checking whether a is odd or even
    if (a%2==0){
    result = "Even";}
else{
    result = "Odd";
}
//calculate a!=1*2*3*...*a
/*var result = 1;
var output = "Result:";
for (var i=1; i<=a; i++){
result*=i;
}*/
var result=a*2;
    document.getElementById("result").innerHTML = a+" x 2 = " + result;
}
