let span = document.querySelector('#hex')
let body = document.querySelector('.body')

let btn = document.querySelector('.btn')
btn.addEventListener('click',(e)=>{
    span.textContent = getNewColor()
    body.style.backgroundColor = `${getNewColor()}`
})





function getNewColor()
{
    let sympols = "0123456789ABCDEF"
    let color = "#"

    for(let i =0;i<6;i++)
    {
        color += sympols[Math.floor(Math.random()*16)]
    }
    return color
}