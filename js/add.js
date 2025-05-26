import { header } from "./header.js";
header();
const btnDOM = document.getElementById('add');
const listDOM = document.querySelector('.block-list');
const indexEl=document.getElementsByClassName(".header");
const btndelete=document.getElementsByClassName(".button");
let count=0;
btnDOM.addEventListener('click', () => {
    listDOM.innerHTML += `<div class="block">${++count}</div>`;
    if (count>25)
    listDOM.innerHTML='';
});

