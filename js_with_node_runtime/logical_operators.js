let hour = 9;

// if(hour < 10 || hour > 18){
//     console.log('the value is less than 10 and more than 18')

// }
//Logical or Operator.............................
let checkHour = hour < 10 || hour > 18
console.log(checkHour)

let ResultHour = checkHour === true ? 'the value is less than 10 or greater than 18' : 'the value is invalid'
console.log(ResultHour)

//and operator...................
let name = 'akhi'
let check_name = name == 'akhi' && name =='alpi'
console.log(check_name)

//not operator...........
let i_am_a_student = false
let check_student = i_am_a_student !== true? 'you are not a student' : 'you are a student'
console.log(check_student)

let check_student2 = !i_am_a_student ? 'you are not a student' : 'you are a student'
console.log(check_student2)

//nullish operator................
let user_name = null
let check_username = user_name ?? `my name is akhi`
console.log(check_username)

let first_name = null
let last_name = 'jishan'

let check_full_name = first_name ?? last_name ?? 'everything is good'
console.log(check_full_name)


