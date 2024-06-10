
    let sum_1 = 1;
    let price_1=85
    
    const total_price=document.querySelector('.total_price')
    const quan_tot = document.getElementsByClassName('quan_tot')[0];
    const quantity = document.createElement('div');
    quantity.classList.add('quantity');
    quantity.innerHTML = `
        <input type="number" value="${sum_1}" id="text">
        <div class="quan_btn">
            <button id="minus"><img src="../image/minus.svg"></button>
            <button id="plus"><img src="../image/plus.svg"></button>
         </div>`;

    const total = document.createElement('p');
    total.classList.add('total');
    total.innerHTML = `£${sum_1*price_1}`;

    quan_tot.appendChild(quantity);
    quan_tot.appendChild(total);

    const plusButton = document.querySelector('#plus');
    const minusButton = document.querySelector('#minus');
    const input = document.querySelector('#text');
    function add() {
        sum_1++;
        input.value = sum_1;
        total.textContent=`£${sum_1*price_1}`
        total_price.textContent=`£${sum_1*price_1+sum_2*price_2}`
    }

    function subtract() {
        if (sum_1 > 1) {
            sum_1--;
            input.value = sum_1;
            total.textContent=`£${sum_1*price_1}`
            total_price.textContent=`£${sum_1*price_1+sum_2*price_2}`
        }
    }
    
    plusButton.addEventListener('click', add);
    minusButton.addEventListener('click', subtract);


let sum_2=1
let price_2=125
const quan_tot1=document.querySelector('#quan_tot1')
const quantity1 = document.createElement('div');
quantity1.classList.add('quantity');
let totalprice=sum_1*price_1+sum_2*price_2
total_price.textContent=`£${sum_1*price_1+sum_2*price_2}`
quantity1.innerHTML = `
        <input type="number" value="${sum_2}" id="text" class='input'>
        <div class="quan_btn">
            <button class="minus" id="minus"><img src="../image/minus.svg"></button>
            <button class="plus" id="plus"><img src="../image/plus.svg"></button>
         </div>`;
const total1 = document.createElement('p');
total1.classList.add('total');
total1.innerHTML = `£${sum_2*price_2}`;
quan_tot1.appendChild(quantity1)
quan_tot1.appendChild(total1)
const plusButton1 = document.querySelector('.plus');
const minusButton1 = document.querySelector('.minus');
const input1=document.querySelector('.input');
function add1(){
    sum_2++
    input1.value=sum_2
    total1.textContent=`£${sum_2*price_2}`
    total_price.textContent=`£${sum_1*price_1+sum_2*price_2}`
}
function subtract1(){
    if (sum_2 > 1) {
        sum_2--;
        input1.value = sum_2;
        total1.textContent=`£${sum_2*price_2}`
        total_price.textContent=`£${sum_1*price_1+sum_2*price_2}`
    }
}

plusButton1.addEventListener('click',add1)
minusButton1.addEventListener('click',subtract1)