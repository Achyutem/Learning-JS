//! Asynchronous Callbacks #NOT RECOMMENDED
//* It is a callback used to resume code execution after a asynchronous operation has been completed.
//* It is also used to delay execution of program unless other is finished.

function greet(name){
    console.log(`Hello ${name}`)
}
setTimeout(greet, 2000, 'Gogo')


//? ..............Separator............. 


//! Synchronous callbacks
//* Any function that is passed to another function as an arguent in called callback.

function greet(name) {
    console.log(`Hello ${name}`)
}

function greetGogo(greetFn) {
    const name = 'Gogo'  //!cannot use let or var
    greetFn(name)
}

greetGogo(greet) 
//? in the greetGogo function we pass on the greet argement to fetch.  
