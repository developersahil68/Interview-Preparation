function debounce(func , wait){
    let timerId;

    return function (...args){
        clearTimeout(timerId);

        timerId = setTimeout(() => {
           return func.apply(this ,args)
        } , wait)
    }
}





function debo(fn ,delay){
    let timerId ;

    return function (...args){
        clearTimeout(timerId);

        timerId = setTimeout(() =>{
       return  fn.apply(this , args)
        } , delay)
    }
}