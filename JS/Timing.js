(function(){
    startTime = (new Date).getTime();
    window.addEventListener('load',function () {
        document.getElementById("timing").innerHTML = "Page load time is " + (((new Date).getTime() - startTime) / 1000) + " Seconds";
        console.log("Page load time is " + (((new Date).getTime() - startTime) / 1000) + " Seconds");   
    });
})();