/* while loop*/

let i = 0;
while(i<5){
    console.log('true')
    i++
}

/* do....while */

let number = 10;

do{
    console.log('this is true ' , number)
    number++
}while(number<=20)

/* for loop*/
 for(let counter = 1;counter <=10;counter++){
    console.log("loop is running " ,counter)
 }
 
/* break from the loop*/
let x = 0;
while(x<=10){
    if(x == 5){
        break;
    }
    console.log(x)
    x++
}
//break for loop for.............
for(let counter = 1; counter <= 20; counter++){
    if(counter == 10){
        break;
    }
    console.log(counter)
}
//continue for while loop............
// let y = 0;
// while(y<=5){
//     if(y === 3){
//         continue;
//     }
//     console.log(y + '\t')
//     y++
//}
//continue for loop for..............
for(let counter = 0; counter <= 5; counter++){
    if(counter == 3){
        continue;
    }
    console.log(counter)
}