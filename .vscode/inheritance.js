class Father{
    constructor(name=" sarkar"){
        this.lname=name;
    }
}



class Child extends Father{
    
    constructor(sname){
        super();
        this.fname=sname;

    }
}

const child1=new Child("Shuvo");
const child2=new Child("Sabbir");

console.log(child1.fname+child1.lname);
console.log(child2.fname+child2.lname);