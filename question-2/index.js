resolvedPromise = new Promise (function(resolve, reject){
    setTimeout(() =>{
        let success = {'message' : 'delayed success!'}
        console.log(success);
    }, 500)

})
resolvedPromise.then(
    function(value){

    }
)

rejectedPromise = new Promise (function(resolve, reject){
    setTimeout(() => {
        try{
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e)
        }
    }, 500)
})
rejectedPromise.then(
    function(value){

    },
    function(error){

    }
)



console.log(resolvedPromise)
console.log(rejectedPromise)