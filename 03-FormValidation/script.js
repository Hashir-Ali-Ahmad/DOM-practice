var form = document.querySelector('form');
var inputs = document.querySelectorAll('input[type="text"]')
var h1 = document.createElement("h1")
h1.textContent = "error";
console.log(inputs)

form.addEventListener('submit',(e)=>{
    // console.log(e);
    e.preventDefault();

    // inputs.forEach((i)=>{
    //     console.log(i)
    //     if (i.value.trim()=='') {
    //         // alert("Error bro")
    //         document.querySelector("body").appendChild(h1);
    //     }
    // })

        for (let index = 0; index < inputs.length; index++) {
            if (inputs[index].value.trim() == '') {
            document.querySelector("body").appendChild(h1);
            h1.style.color = 'red'
                break;
            }
            
        }
})