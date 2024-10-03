resolvedPromise = new Promise (function(resolve, reject){
    setTimeout(() => {resolve("haha resolved")}, 500)
    

})
resolvedPromise.then(
    function(value){

    }
)

rejectedPromise = new Promise (function(resolve, reject){
    setTimeout(() => {reject("haha rejected")}, 500)
})
rejectedPromise.then(
    function(value){

    },
    function(error){

    }
)



console.log(resolvedPromise)
console.log(rejectedPromise)