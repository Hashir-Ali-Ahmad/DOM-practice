var h1 = document.querySelector('h1');
var start = document.querySelector('#start');
var stop = document.querySelector('#stop');
var int;

start.addEventListener('click',()=>{
    var count = 0;
    
    int = setInterval(()=>{
        h1.textContent = count;
        count++;
    },1000)
})

stop.addEventListener('click',()=>{
    clearInterval(int)
})
