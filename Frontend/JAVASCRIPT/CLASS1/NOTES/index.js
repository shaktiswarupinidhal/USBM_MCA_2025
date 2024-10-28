/*var name="mamali";
let age=22;
const city="bhubaneswar";*/

//console.log(address);
/*var address="bhubaneswar";
console.log(address);

let user=null;
console.log(typeof null);//object
console.log(user);*/

/*for(let i=0;i<5;i++){
    console.log(i);
}*/

/*for(let i=5;i>=1;i--){
console.log(i);
}*/

/*let sum=0;
for(let i=0;i<=5;i++){
    let random=Math.floor(Math.random() * 10);
    let result=sum+random;
    console.log(`the random sum result is ${result}`);
}*/

//nested loop

/*for(let i=1;i<=5;i++){
    for(let j=1;j<=2;j++){
        console.log(j);
    }
    console.log(i);
}*/

//pattern printing
/*for(let i=1; i<=5; i++){
    let pattern="";
    for(let j=1; j<=i; j++){
        pattern +="*";

    }
    console.log(pattern);
}*/

/*const calculator=(a,b,operator)=>{
    switch(operator){
        case "+":
            return a+b;
            break;
            case "-":
                return a-b;
                break;
                case "*":
                    return a*b;
                    break;
                    case "/":
                        return a/b;
                        break;
                        default:
                            return "invalid operator";
                            break;
                            const output=calculator(10,5,"+");
                            console.log(output);
    }
};*/

/*const add=(a,b)=>a+b;
console.log(add(5,8));*/

//to do BMI calculator


//rest parameter
const printNumber=(...number)=>{
    return number;

}
let output=printNumber(1,2,3,4,5,6,7,8,9);
console.log(output);

//callback function
/*when a function is called as an arguement in an another function*/

/*syntax:function say(num,callback){
console.log (`my name ${name}`);
return callback;
}*/

/*function hello(){
    return "hello"
}*/

//todo: make a user authentication system using callback function
//todo: password validation
//synchronous
//line by line
//console.log(1);
//console.log(2);
//console.log(3);
//if error happens it will stop the execution and not switch to next line

//asynchronous
//if error happens in line 1, it will not stop the execution and switch to next line

//set time out syntax
//setTimeout(()=>{}); /callback function
//setInterval(()=>{});/ananumous function

//ex:
setTimeout(()=>{
    console.log("hey USBM STUDENT");},5000);
    

 