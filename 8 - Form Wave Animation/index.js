const labelOne = document.querySelector(".labelOne")

const labelTwo = document.querySelector(".labelTwo")


const email = document.querySelector('#email')

const password = document.querySelector('#password')

email.addEventListener('click', () => {
labelOne.classList.add('active')
labelTwo.classList.remove('active')
})



password.addEventListener('click', () => {
    labelTwo.classList.add('active') 
    labelOne.classList.remove('active')
})