
const btnDOM = document.getElementById('add');
const listDOM = document.querySelector('.block-list');
let count=0;
btnDOM.addEventListener('click', () => {
    listDOM.innerHTML += `<div class="block">${++count}</div>`;
    if (count>23)
    listDOM.innerHTML='';
});

const refDOM=document.querySelector(".x");
refDOM.addEventListener('click', ()=> {
    listDOM.innerHTML='';
})