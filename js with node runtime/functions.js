// this is function of js
function main(){
    console.log('function')
}

function main1(){
    return "akhi"
}

function main2 (a, b){
    let c = a + b
    return c
}

function Tocelcius (Farheeit){
    let celcius = (5/9) * (Farheeit - 32) 
    return celcius
}

// function calling
main();

console.log(main1())

console.log(main2(10,10))

console.log(Tocelcius(100))

const fahrenheit = 130;
const result = 'this is fahrenheit ' + fahrenheit + ' and celsius is ' + Tocelcius(fahrenheit)
console.log(result)