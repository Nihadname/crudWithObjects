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

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  let counter="";
  for(let x in person){
    counter+=person[x];
  }
  console.log(counter);
  let myString = JSON.stringify(person);
  console.log(myString);
  const person2 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const myArray = Object.values(person2);
  console.log(myArray);
  let person3 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

  const person4 = {};
person4.firstName = "John";
person4.lastName = "Doe";
person4.age = 50;
person4.eyeColor = "blue";
const person5 = new Object();
person5.firstName = "John";
person5.lastName = "Doe";
person5.age = 50;
person5.eyeColor = "blue";
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }


  var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }
   