var tab = document.querySelectorAll('.tab');
var data = document.querySelectorAll('.data')

// Show home by default

data[0].style.display = 'block';


// Remove all data

var remove = ()=>{
    data.forEach(d => {
        d.style.display = 'none';
    });
}

// Diplay one at a time per click

tab.forEach((t,index) => {
    t.addEventListener('click',()=>{
        remove()
        data[index].style.display = 'block';
        // alert('hi')
    })
});