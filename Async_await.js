function resolveHello() {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve('Hello')
        }, 2000)
    })
}

function resolveWorld() {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve('World')
        }, 1000)
    })
}

//* here the function is ran simultaneously and gets printed as soon as its done with no wait.
async function parallel() {
    Promise.all([
        (async () => console.log(await resolveHello()))(),
        (async () => console.log(await resolveWorld()))()
    ])
}
parallel()

//* in this function both the fucntions are called together but they show the output in order
//* here *World* gets resolved and by the time hello finishes it, it sends the value to print after hello.
async function concurrentStart() {
    const hello = resolveHello()
    const world = resolveWorld()

    console.log(await hello)
    console.log(await world)
}

concurrentStart()


//? ..................................
//? ..........SEPARATOR...............
//? ..................................


//* basic fucntioning of async 
async function greet() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('hello'), 1000)
})

let result = await promise

console.log(result)
}

greet()