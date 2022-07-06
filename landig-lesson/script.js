let title = document.querySelector('.com-bg-text')

let burger = document.querySelector(".burger-menu")

let button = document.querySelector('.nav-open')

button.addEventListener('click',()=>{
    burger.classList.toggle('opened')
})