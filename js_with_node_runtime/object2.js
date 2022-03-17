//computed properties............
let brand = 'name';
const computer = {
    [brand]: 'dell' 
};
 //let result = computer.name;
 console.log(computer.name);
 console.dir(computer);

 //another example...
 const student = {
    ['name'] : 'akhi' ,
 }
 console.log(student.name);

 //complex expression...
 let name = "student";
  const student2  = {
        [name + 'Name'] : 'my name is akhi'
  }
  console.log(student2.studentName);
  console.log(student2);
