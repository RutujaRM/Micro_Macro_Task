import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Call Stack Fibonannci!</h1>
<div>
  
</div>
`;
//Stack is work as last in first out that means last element pop first it have only 1 insertion/deletion point

/*Factiorial series is using Stack  5*4*3*2*1
5 * Facorial of 4 (4*3*2*1)
4 * Factorial of 3(3*2*1)
3 * Factorial of 2 (2*1)
2 * Factorial of 1(*1)

*/
let num = 5;
const Factorial = (num) => {
  if (num == 1) {
    return 1;
  }
  return num * Factorial(num - 1);
};

let result = Factorial(5);
console.log(result);

//To show result on webpage
const ans = document.getElementById("h4");
ans.innerText = `Factorial of ${num}  is :- ${result} `;

/* 
    plain Task :- noraml Taks Excutes line by line 

    Microtask :- heavy task that executes at last so we use like "promise"
                   fetch is one of the type of promise also Microtask
                   its in the form of queue it collects it and at the end it 
                   executes on the basis of FIFO 
                   This task having priority than macrotask'

   Macrotask :- small task like callback function ,settimeout
                 in it's task also present in queue format 
                 but this tasks excutes after execution of
                 Microtask if present                  
 
      Int this if all type of task present then they are excutes as
      
      **** 1) Plain Task 2)Micro Task 3)Macro Task

*/

// plain text
const a = 10,
  b = 20;
console.log(a + b);

//Micro Text
let some = new Promise((response, reject) => {
  console.log("330");
  response();
  reject();
});
some.then((_) => console.log("50")).catch((_) => console.log("100")); //From then & catch only 1 is execute then(successful promise) / catch(unsuccessful)

//Macro task
setTimeout((_) => console.log("time"), 3);

console.log("a"); //plain task
console.log("b"); //plain task
const value = new Promise((response, reject) => {
  console.log("c");
  response();
}); //plain task
value.then((_) => console.log("d")); //  1 microtask
console.log("e"); //plain task
value.then((_) => console.log("f")); // 2 microtask
setTimeout((_) => console.log("Z"), 0); // 1 Macro Task

console.log("A"); //plain task
console.log("B"); //plain task
setTimeout((_) => console.log("F"), 1); // 2 Macro Task
console.log("G"); //plain task
const value1 = new Promise((response, reject) => {
  console.log("C");
  reject();
}); //plain Task
value1.catch((_) => console.log("D")); // 3 Micro Task
console.log("E"); //plain task

//OP :- a,b,c,e,A,B,G,C,E , d,f,D  , Z,F
//         plain Task       Micro      Macro
