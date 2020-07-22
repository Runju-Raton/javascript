var array=[1,2,3,4,5,6];
console.log(Math.max(...array));// ... spread operator

console.log(array.length);//6
array.push(7);
array.push(8);
console.log(array.length);//8
array.pop();
console.log(array.length);//7
array.shift();
console.log(array.length);//6 1 pop
console.log(array[0]);//2 
array.shift(0);
array.shift(0);
console.log(array[0]);//4
console.log(array.length);//4
array.unshift(3);
array.unshift(2);
array.unshift(1);
console.log(array.length);
for(i=0;i<array.length;i++){
    console.log(array[i]);
}