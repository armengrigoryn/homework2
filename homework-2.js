//N1
function getSum(n)
{
    var sum = 0;
    while (n != 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
    }
    return sum;
}
  
var n = 306; 
console.log(getSum(n));

//N2
a = 2;
b = 3;
c = 5;

awnser = a + b;
if(awnser>c){
    console.log(awnser,">",c);
    console.log("yes");
}

else if(awnser<c){
    console.log(awnser,"<",c);
    console.log("no");
}

else{ 
    console.log("no");
}


//N3
function countDigit(n)
{
    let count = 0;
    while (n != 0)
    {
        n = Math.floor(n / 10);
        ++count;
    }
    return count;
}

 
    n = 78756;
    console.log("Number of digits : "+ countDigit(n));

//N3 String Method 
var number = "1234566";
console.log(number.length);

//N4

//N5
function a() {
    let numbers = window.prompt("Enter a number")
    let arrs = numbers.toString().split("");
    let rev = arrs.reverse().join("");
    return rev;
}
    
console.log(a());
