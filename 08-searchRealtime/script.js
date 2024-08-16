var input = document.querySelector('input')

var data = [
    {
        name:'hashir',
        src : 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww'
    },
    {
        name:'ali',
        src : 'https://images.unsplash.com/photo-1715412507413-c7416b47cacb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        name:'ahmad',
        src : 'https://images.unsplash.com/photo-1694459471238-6e55eb657848?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        name:'khizar',
        src : 'https://images.unsplash.com/photo-1590422915349-6deb47963c8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        name:'hammad',
        src : 'https://images.unsplash.com/photo-1551421684-8501dd990567?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        name:'muneeb',
        src : 'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D'
    }
]

var result = ''
data.forEach((elem)=>{
    result += `<div class="person" >
                    <img src="${elem.src}" alt="">
                    <h4>${elem.name}</h4>
                </div>`
            })
            
            document.querySelector('.people').innerHTML = result

input.addEventListener('input',()=>{
    var matching = data.filter((na)=>{
        return na.name.startsWith(input.value)
        console.log(matching)
    })
    var out = ''
matching.forEach((elem)=>{
    out += `<div class="person" >
                    <img src="${elem.src}" alt="">
                    <h4>${elem.name}</h4>
                </div>`
})

document.querySelector('.people').innerHTML = out
})