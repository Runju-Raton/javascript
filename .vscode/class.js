class Student{
    constructor(sId, sName){
        this.id=sId;
        this.name=sName;
    }
}

const std1=new Student(1,"Runju");
const std2=new Student(2,"Raton");
const std3=new Student(3,"Mahi");

console.log(std1,std2,std3.name);