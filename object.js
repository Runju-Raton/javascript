//1.Object define
var obj1={name:"runju", id:123, cgpa:3.93};
var obj2={name:"raton", id:456, cgpa:4};

//2.obj print
console.log(obj1);
console.log(obj2);

//3.Object property access
console.log(obj1.name);
console.log(obj1["name"]);
var n="name";
console.log(obj1[n]);

//4.Object property add
obj2.comment="outstanding";
console.log(obj1);
console.log(obj2);

//5.Object property change

obj1.id=9285;
obj1["name"]="Runju Raton";
var c="cgpa";
obj1[c]=3.94;
console.log(obj1);
console.log(obj2);
