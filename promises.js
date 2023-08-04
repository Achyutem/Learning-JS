let pm = new Promise((resolve,reject) => {
    let a = 1 + 2 
    if (a == 2) {
        resolve('success')
    } else {
        reject('failed')
    }
})


pm.then((message) => {
    console.log('this is in the then ' + message)
}).catch((message) => {
    console.log('this is in the catch ' + message)
})


//? ............SEPARATOR..................


let p = new Promise((resolve, reject) => {
    n = 5
    if (n == 5) {
        resolve('success')
    } else {
        reject('reject')
    }
})

p.then((message) => {
    console.log('this command was a ' + message)
}).catch((message) => {
    console.log('this is a ' + message)
})


