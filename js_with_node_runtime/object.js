let student = {
    name : 'akhi',
    roll : 84 ,
    age : 20 ,
}

console.log(student.name);

// add new property into obejct.......
student.id = 1235;
console.log(student);

//updating property....
student.name = 'alpi';
console.log(student);

//delete property from object.......
delete student.name;
console.log(student);

//multi word data add.......
student['last name'] = 'alpi';
console.log(student);

//multi word data access......
console.log(student['last name']);