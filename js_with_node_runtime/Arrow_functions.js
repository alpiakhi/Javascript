//arrow_functions................

let arrow = () => {
    console.log('this is arrow function')
}
arrow();

//arrow_functions with argument list.........

let sayHi = (a,b) => {

    return a + b;
}
console.log(sayHi(10,5))

//arrow one line function......

const sum = (a,b) => a + b;
console.log(sum(20,20))

//arrow function without return statement.........

const welcome = (name,age) => (
    `my name is ${name}.i am ${age}`
) 
console.log(welcome('akhi', 20))