var progress = document.querySelector('.progress')
var btn = document.querySelector('button')
var h3 = document.querySelector('h3')

btn.addEventListener('click',()=>{
    var count = 0
    h3.style.opacity = 0
    if (count == 99) {
        
    }
    var inter = setInterval(()=>{
        if (count == 99) {
            clearInterval(inter)
            h3.style.opacity = 1
        }
        count++
        progress.style.width = count +'%'
    },50)
})
