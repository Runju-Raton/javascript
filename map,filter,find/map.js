const numbers=[3,4,5,6,7,8];
// 1.array map function

// console.log(numbers);

// function squre(element){
//     return element*element;
// }

// const result=numbers.map(function(element){
//     return element*element;
// });

// const result=numbers.map(element=>element*element);

// const result=numbers.map(x=>x*x);

// 2.create mapFunction
// function mapFunction(array){
//     console.log(array);
//     const newArray=[];
//     for(let i=0;i<array.length;i++){
//         newArray.push(doSomething(array[i]));

//     }
//     return newArray;
// }

// function doSomething(element){
//     return element*element;
// }
// const result=mapFunction(numbers);
// console.log(result);

// // 2.1 reduce function using arrow function
// function mapFunction(array){
  
//     const newArray=[];
//     for(let i=0;i<array.length;i++){
//        const num=array[i];
//        const r=num=>num*num;
//         newArray.push(r(array[i]));

//     }
//     return newArray;
// }

// // function doSomething(element){
// //     return element*element;
// // }
// const result=mapFunction(numbers);
// console.log(result);

//2.2 reducing array function using map

// Total Three steps
// 1.pass the array into a function to read each element using map function
// 2.do somethin with the Data
// 3. store them into a new array

/* const newArray=numbers.map(element=>element*element);
console.log(newArray); */

/* 3.Arrow function 
const a=10;
const resultDouble=a=>a*a;
console.log(resultDouble(a)); */


/* 4.filter function
const newArray=numbers.filter(element=>element>5);
console.log(newArray); */

/* // 5.find function

const result=numbers.find(num=>num>5);
console.log(result); */

// 6. map function with object

/* const array=[
    {id:21, name:"Anik"},
    {id:22, name:"Shazu"},
    {id:23, name:"pinky"}
];

const nameArray=[];

array.forEach(element => {
   nameArray.push(element.name);
});

console.log(nameArray); */

const array=[
    {id:21, name:"Anik"},
    {id:22, name:"Shazu"},
    {id:23, name:"pinky"}
];

/* const arrayMap=array.map(element=>element.name);
console.log(arrayMap); */

/* const arrayFilter=array.filter(element=>element.id>21);
console.log(arrayFilter);
 */

const arrayFind=array.find(element=>element.id>21);
console.log(arrayFind);
