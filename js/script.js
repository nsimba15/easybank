

let openModal = document.querySelector('.hamburger')
let closeModal = document.querySelector('.close')
let modal = document.querySelector('nav')


openModal.addEventListener('click', ()=>{

  modal.style.top = 0
})

closeModal.addEventListener('click', ()=>{

  modal.style.top = '-100%'
})

