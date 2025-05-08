const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')

form.addEventListener('submit', (event)=> {

    const required = document.querySelectorAll('.required')

    let nameValue = nameInput.value
    if(nameValue === "") {
        required[0].classList.remove('hide')
        event.preventDefault()
    } else {
        required[0].classList.add('hide')
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailValue = emailInput.value
    if(emailValue === '' || emailRegex.test(emailValue) === false) {
        required[1].classList.remove('hide')
        event.preventDefault()
    } else {
        required[1].classList.add('hide')
    }

    let messageValue = messageInput.value
    if(messageValue === '') {
        required[2].classList.remove('hide')
        event.preventDefault()
    } else {
        required[2].classList.add('hide')
    }


})