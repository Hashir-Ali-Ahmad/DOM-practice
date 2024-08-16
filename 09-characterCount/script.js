var span = document.querySelector('span')
var text = document.querySelector('textarea')

text.addEventListener('input',()=>{
    span.innerText = text.value.length
})