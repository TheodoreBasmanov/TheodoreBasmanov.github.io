(function(){
    startTime = (new Date).getTime();
    window.addEventListener('load',function () {
        console.log("Page load time is " + (((new Date).getTime() - startTime) / 1000) + " Seconds");   
    });
})();