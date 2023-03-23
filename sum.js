const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const calabtn = document.querySelector('#cala');
const calsbtn = document.querySelector('#cals');
const calmbtn = document.querySelector('#calm');
const caldbtn = document.querySelector('#cald');
const answer=document.getElementById('ans');

calabtn.addEventListener('click',()=>{
    let c = parseInt(n1.value)+parseInt(n2.value);
    ans.innerText = c;
});    

calsbtn.addEventListener('click',()=>{
    let c = parseInt(n1.value)-parseInt(n2.value);
    ans.innerText = c;
});

calmbtn.addEventListener('click',()=>{
    let c = parseInt(n1.value)*parseInt(n2.value);
    ans.innerText = c;
});

caldbtn.addEventListener('click',()=>{
    let c = parseInt(n1.value)/parseInt(n2.value);
    ans.innerText = c;
});