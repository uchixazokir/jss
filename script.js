let inp = document.querySelector('input')
let btn = document.querySelector('button')
let ol = document.querySelector('ol')

btn.addEventListener('click', ()=>{
    fetch(`https://api.nationalize.io/?name=${inp.value}`)
    .then((res)=> res.json())
    .then((data)=>{
        ol.innerHTML = ''
        console.log(data);
        
        data.country.map((item)=>{
            ol.innerHTML += `
                <li>${item.country_id}, ${(item.probability*100).toFixed(2)}%</li>
            `
        })
    })
})
