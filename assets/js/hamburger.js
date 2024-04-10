let button = document.querySelector('.ham-btn');
let mobileLinks = document.querySelector('.mobile-links');
// let deskLinks = document.querySelector('desk-links');
let filter = document.querySelector('#filter');

button.addEventListener('click', ()=>{
    filter.classList.toggle('hidden');
    mobileLinks.classList.toggle('hidden');
    button.classList.toggle('fa-bars');
    button.classList.toggle('fa-xmark');
})

filter.addEventListener('click', ()=>{
    filter.classList.toggle('hidden');
    mobileLinks.classList.toggle('hidden');
    button.classList.toggle('fa-bars');
    button.classList.toggle('fa-xmark');
})
