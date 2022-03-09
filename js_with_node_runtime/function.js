//function....................

function summary(){
    console.log('this is summary')
}
summary();

//function with return statement...........
function hungry(){
    return 'i felt hungry'
}
console.log(hungry());
let forhungry = hungry()
console.log(forhungry)

//fucntion with argument list/parameter.....
function sleep(name,number){
    console.log(name,number)
}
    sleep(20,10)

//function with default parameter.......
function showMessage (username,message='default message'){
    console.log(message,' from ' + username) 
}
    showMessage('john','i am akhi') 

//function expression........
    let sayhi = function(){
        console.log('this is statement')
    }
    sayhi()

//callback function......
    function callback (question,yes,no){
        if(question == true){
            yes()
        }else{
            no()
        }
    }
    function showYes(){
        console.log('this is yes')
    }
    function showNo(){
        console.log('this is no')
    }


        callback(false,showYes,showNo)