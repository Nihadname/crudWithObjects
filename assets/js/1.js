const student={
    name:"Nihad",
    surname:"ibadzade",
    age:16,
    id:1,  
}
const Group={
    name:"p518",
    id:1,
    GroupSize:5,
    students:[],
    addStudent:function(student){
        if(this.students.length>this.GroupSize){
            throw new console.error("its size is more than given ruquirements");
        }else{
            this.students.push(student);
        }
    },
    removeStudent:function(id){
let index=this.students.findIndex(student=>student.id==id);
if(index!=-1){
    this.students.splice(index,1);
}else{
    console.log("there is no id like that");
}
    },
    findStudent:function(id){
    let newStudent =  this.students.find(student=>student.id==id);
   return newStudent;
    },
    finadAll:function(){
return this.students;
    },
    update:function(id,newStudent){
let currentStudents=this.students.find(student=>student.id==id);
  if(currentStudents!=null){
    currentStudents.name=newStudent.name??currentStudents.name;
    currentStudents.surname=newStudent.surname??currentStudents.surname;
    currentStudents.age=newStudent.age??currentStudents.age;
    return currentStudents;
  }else{
    console.log("there is no")
  }
    }
}

Group.addStudent(student)
console.log(Group.students);
console.log(Group.findStudent(1));
console.log(Group.update(1,{
    name:"kamil",
    surname:"ibadzade",
    age:19, 
}));
