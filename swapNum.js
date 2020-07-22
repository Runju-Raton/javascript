

//2.without Using temp;
var a=5;
var b=7;

console.log("before swaping a=",a,"b=",b);

a=a+b;
b=a-b;
a=a-b;

console.log("after swaping a=",a,"b=",b);

//3 using squre backet

[a,b]=[b,a];
console.log("after swaping a=",a,"b=",b);


