var num=3.516;

var result1=Math.floor(num);
var result2=Math.ceil(num);
var result3=Math.round(num);

console.log(result1);
console.log(result2);
console.log(result3);

//2.dice
console.log("output dice: ");
for(i=1;i<=6;i++){
    console.log(Math.round(Math.random()*6))
}

var output1=Math.random()*6;
console.log(output1);