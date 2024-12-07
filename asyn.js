// function callbackfunction () {
//   console.log("this is a call back function normal")
// };
// // ! higher order function to call a call back function 
// function higherorderone (call) {
//   // to call a call back function 
 
//   call()
// }
// higherorderone(callbackfunction)
// !to call a call back function in another way 

// let callmeaFunction = (callback) => {
//   const result = callback();
//   console.log(result);

// }
// callmeaFunction( ()=>{
//   return "this is a function made with a call back"
// })
// ! a function to call back to another way 

// const simplecallbackfunction = (callback) => {
// const result = callback('mansur', 'shaik');
// console.log(result)
// }
// // create another function 
// const anotherfunction = (firstname, lastname)=>{
//   return `hello! this is  : ${firstname}: ${lastname} a call back function`

// }
// simplecallbackfunction(anotherfunction)

// const higherorderfunction = (callback)=> {
//   const result = callback("order",'function')
//   console.log(result)

// }

// const secondfunction = (lastname,firstname)=> {
//   return `this function contain call back to a higher ${lastname} ${firstname}`

// }
// higherorderfunction(secondfunction)

// !callback function with calucation 


// const addfunction = (a,b, callback) => {
//   let result = a + b;
//   callback(result);
// };
// addfunction(2,5, (result) => {
//   console.log(result)
// })


// ! call back hell 
// const task1 = (callback)=> {
//   setTimeout(()=> {
// console.log("task 1 completed ");
// callback();
//   }, 3000)
// }
// const task2 = (callback)=> {
//   setTimeout(()=> {
// console.log("task 2  completed ");
// callback();
//   }, 2000)
// }
// const task3 = (callback)=> {
//   setTimeout(()=> {
// console.log("task 3  completed ");
// callback();
//   }, 1000)
// }
// //  how to call this functions as callback hell model 
// task1(function(){
//     //one's the first task completed go to second one 
//     task2(function(){
//       //one's the second one completed go to task 3
//       task3(function(){
//         console.log("all tasks completed")
//       })
//     })
// })

// !code demo callback hell

// const result1 = (callback)=> {
// setTimeout(()=> {
//   // first task here 
//   console.log("the first resullt is completed");
//   callback();
// }, 5000)
// };
// const result2 = (callback)=> {
// setTimeout(() => {
//   console.log('result 2 comleted ');
  
//   callback();

  
// }, 9000);
// };
// const result3 = (callback)=> {
//   setTimeout(function(){
//     console.log('RESULT 3 COMPLETED');
// callback()
//   })
// }

// result1(()=> {
//   // one completed go to next one untill wait for 1 completd
//   result2(()=> {
    
//     result3(()=> {
//       console.log('all completed')
//     })
//   })
// })
// ! error handling in call back function 
// const divednumbers = (devisor, devident, callback)=> {
// setTimeout(()=> {
//   if(devisor === 0 ) {
//     callback(new Error("canot dived by zero"), null)
//   }
//   else{
//     callback(null, devident/devisor)
//   }
// }, 1000);
// };

// divednumbers(0,10, (error,result) => {
// if(error){
//   console.log('error',error.message);
//  return; 
// }
// else{
//   console.log('result', result);

// }
// })


// !promise  
// const simplecallback = (success, callback)=>{
//   console.log("call back function called");
// if(success) {
//   callback(null, 'the operation of success')
// }
// else{
//   callback('the operation was failed', null)
// }

// }
// simplecallback(true, (error, result)=> {
//   if(error){
//     console.log(error);
//   }
//   else{
//     console.log(result)
//   }
//   console.log("all call are completed ")

// })
// !convert to use case 
// ! promise 
// const simplepromise = new Promise((resove, rejected)=> {
//   let success = false;
//   if(success){
//     resove("the promise was fullfiled")
//   } 
//   else {
//     rejected("the promise was rejected ")
//   }

// })
// //useage promise 
// simplepromise.then((error)=> {
//   console.log(error);
  
// })
// .catch((result)=> {
//   console.log(result);
  
// })
// .finally(()=> {
//   console.log("marvelees");
  
// })





// !promise example 2
// function isevennumber (number, callback){
//   if(number % 2 === 0) {
//     callback(`the given ${number} is even`)
//   }
//   else{
//     callback(`the give ${number} is odd`)
//   }
// }
// isevennumber(4,(err,result)=>{
// if(err) {
//   console.log(err)
// }
// else{
//   console.log(result);
  
// }
// })
// !promise creation above the function 
// function newfunctionpromise(number){
//   return new Promise((re,rej)=>{
//     if(number % 2 == 0) {
//       re(`the number ${number} is even`)
//     }
//     else{
//       rej(`the number is ${number} is not even`)
//     }
//   })
// }
// newfunctionpromise(1).then((result)=>{
//   console.log(result);
  
// })
// .catch((error)=>{
//   console.log(error);
  
// })

// ! changing functions 

// function steponefunction(){
//   return new Promise((resolve)=>{
//    resolve('the step one completed')
//   })
// }
// function steptwofunction(){
//   return new Promise((resolve)=>{
//    resolve('the step two completed')
//   })
// }
// function stepthreefunction(){
//   return new Promise((resolve)=>{
//    resolve('the step three completed')
//   })
// }
//To call the function 
// steponefunction().then((result)=>{
//   console.log(result)
//   // return set two
//   return steptwofunction();
// }).then((resulttwo)=>{
//   console.log(resulttwo);
  
//   //return step three
//   return stepthreefunction();
// }).then((resultthree)=> {
//   console.log(resultthree);
  
// })
// !promise.all() & promise.catch() methods 

// // create a our promise 
// const promiseone = new Promise.resolve("promis one resolved");
// const promisetwo = new Promise.resolve("promise two completed");
// Promise().all([promiseone, promisetwo]).then((result)=>{
//   console.log(result);
  
// }).catch((err)=>{
//   console.log(err);
  
// })
// !working with async and await promises

// async function functionname(value){
//   return new Promise((resolve, rejected)=>{
// setTimeout(() => {
//   resolve(value)
// },3000);
//   })
// }

// const functiontwo = async ()=> {
//   let result =  await functionname('this is my promise')
//   console.log(result)
// }
// functiontwo();

// !another example to arrow function 

// const name = async()=>{
//   return new Promise((resolve)=>{
//     setTimeout(() => {
//       resolve('mansur')
//     }, 3000);
//   })
// }
// const age =async ()=>{
//   return new Promise((resolve)=>{
//     setTimeout(() => {
//       resolve(21)
//     }, 1000);
//   })
// }
//  async function functioncall(){
//   let result = await Promise.all( [name(), age()]);
//   console.log(result)
// }
// functioncall()
// // ! error handling in async and await 
// const functionname = async ()=>{
//   return new Promise((resolve, rejected)=>{
//     if(Math.random >= 0) 
//     {
//       resolve('success')
//     } else{
//       rejected('failed')
//     }

//   })
// };
// const anotherfynction = async ()=>{
// try{
//   const result = await functionname()
//   console.log(result);
  
// } catch(error){
//   console.log(error);
  
// }
// }
// anotherfynction()


// !ajax models 

// !http making reques 
let xhr = new XMLDocument()
// !create a new xmlhttp request 

// cnfigaration the request 
xhr.open('GET','"https://jsonplaceholder.typicode.com/posts"',true )
// ! attach an event lister to call the url 
xhr.onreadystatechange = function(){
  // check if the request is complete (ready state  4) and successfull (state200)
  if(xhr.readyState === 4 && xhr.status === 200){
    //parse the json data 
    console.log(JSON.parse(xhr.responseText));
  }
  //erroe handile
  if(xhr.readyState === 4 && xhr.status !== 200) {
    console.log(xhr.responseText);
    
  }
}
//send the request 
xhr.send()

