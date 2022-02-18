// object from w3

const myobj = {
    myName : 'akhi',
    myRoll : 12,
    mycls : 'eleven',
}

let result = "my name is " + myobj.myName + " my roll is " + myobj.myRoll + " my cls is " + myobj.mycls
console.log(result)
// console.log(myobj.myName)
// console.log(myobj.myRoll)

// object with method

let myobj1 = {
    name : 'akhi' ,
    age : 20 ,

    getNAme : function(){
        console.log('my name is ' +  this.name)
    }
}

myobj1.getNAme()