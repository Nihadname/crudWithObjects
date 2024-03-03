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
    console.log("there is no id like that");
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


function  slicing(word,position){
  let splitted=  word.split('');
  splitted.splice(position, 1);
  return splitted.join("");

}
console.log(slicing("python",2));


function addingLetterToTheEndAndStart(word){
console.log(`${word[word.length-1]}${word}${word[word.length-1]}`)
}
addingLetterToTheEndAndStart("red");

function  task3(word){
    let array=[];
    let splitted=word.split("")
    for (var i = splitted.length - 1; i >= 0; i--) {
        array.push(splitted[i])
    }
  return  array.join("");
}
console.log(task3("python"));
    const numbers = [10, 5, 7, 3, 15, 8];

function task4(array){
let max=0;
let secondMax=0;
for(let i=0;i<array.length;i++){
    if(array[i]>max){
        secondMax=max;
        max=array[i];
    }
}
return secondMax;
}
