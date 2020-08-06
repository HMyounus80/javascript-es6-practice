/*class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimonnesa school"
        this.adders ="Dhaka"
    }
}

const student1 = new Student(12,'shuvo');
const student2 = new Student(22, "mahi");
const student3 = new Student(20,'bappi')
console.log(student1, student2,student3);
*/

class Student {
    constructor(name, id, phone){
        this.name = name;
        this.id = id;
        this.phone = phone;
        this.madrasha ="jamiya Ahmadia sunnia kamil madrasha"

    }
}
const student1 = new Student("Tarck", 20214, '0175894633' );
const student2 = new Student('younus', 25416, '0185469723');
console.log(student1, student2);
