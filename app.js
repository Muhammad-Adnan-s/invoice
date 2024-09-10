let btn = document.querySelector('#cart');
let name = document.querySelector('#name');
let price = document.querySelector('#price');
let para = document.querySelector('#para');
let arr = [];
function add() {
    if (name.value != '' && price.value != '') {
        let n = name.value;
        let p = price.value;
        let item = {
            name: n,
            price: parseFloat(p)
        }
        arr.push(item);
        let div = document.createElement('div');
        div.classList.add('div');
        document.querySelector('.output #para').appendChild(div);
        let ele = document.createElement('p');
        let span = document.createElement('span');
        let button = document.createElement('img');
        let hr = document.createElement('hr');
        button.src = 'delete.png';
        button.classList.add('delete');
        span.innerText = `${item.price}`;
        ele.innerText = `${item.name}`;
        div.appendChild(ele);
        div.appendChild(span);
        div.appendChild(button);
        div.after(hr);
        name.value = '';
        price.value = '';
        let sp = document.querySelector('#sp');
        let pr = 0
        arr.forEach((Object) => {
            pr += Object.price;
        })
        sp.innerText = pr;
        button.addEventListener('click', () => {
                div.remove();
                hr.remove();
                let tot = Number(span.innerText);
                let t1 = Number(sp.innerText);
                sp.innerText = t1 - tot;
            })
    }
    else {
        alert('Please file the input field !');
    }
}
btn.addEventListener('click', add);
function invoice() {
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            body{
                font-family:sans-serif ;
            }
            .container{
                text-align: center;
            }
            .heading  h2{
                background-color:black;
                color:white;
                display:inline;
            }
            .head{
    display: flex;
    justify-content:center;
    align-items:center;
    gap: 3rem;
            }
            .div{
                display:flex;
                gap:3rem;
                justify-content:center;
    align-items:center;
            }
           
        </style>
    </head>
    <body>
        <div class="container">
            <div class="heading">
                <h2>Invoice</h2>
            </div>
            <div class="head">
                <h2>Name</h2>
                <h2>Price</h2>
            </div>
        `;
    arr.forEach((Object) => {
        html += `<div class="div"> <p> ${Object.name}</p> <h3> ${Object.price}</h3> </div>`;
    })
    let total = document.querySelector('#sp');
    html += ` <div class="total">
       <h2>Total Cost: <span id="sp">${total.innerText}</span></h2> </div> </div> </body> </html>`;
    let popup = window.open('', '_blank');
    popup.document.open();
    popup.document.write(html);
    popup.document.close();
}
let create = document.querySelector('#btn');
create.addEventListener('click', invoice);
