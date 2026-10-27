function throttle(fn , delay){
    let lastCall =0;

    return function(...args){
        const currentTime = Date.now();

        if(currentTime - lastCall < delay){
            return ;
        }
        lastCall = currentTime;
        return fn.apply(this , args )
    }
}



function thro(fn , delay){
    let prevtime;

    return  function (...args){
        const currTime = Date.now();
        if(currTime - prevtime < delay){
            return;
        }
        prevtime = currTime;
        return fn.apply(this , args)
    }
}