var ad = document.querySelector('.add')
var rem = document.querySelector('.remove')
var input = document.querySelector('input')
var ul = document.querySelector('ul')

var li;

ad.addEventListener('click', ()=>{

    if (input.value.trim() == '') {
        
    } else {
        li = document.createElement('li')
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = '';
    }

})

rem.addEventListener('click',()=>{

    li.remove();

})

