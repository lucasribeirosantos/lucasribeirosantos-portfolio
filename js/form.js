const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')

form.addEventListener('submit', (event) => {
    const required = document.querySelectorAll('.required')

    let hasError = false

    let nameValue = nameInput.value.trim()
    if (nameValue === "") {
        required[0].classList.remove('hide')
        hasError = true
    } else {
        required[0].classList.add('hide')
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let emailValue = emailInput.value.trim()
    if (emailValue === '' || !emailRegex.test(emailValue)) {
        required[1].classList.remove('hide')
        hasError = true
    } else {
        required[1].classList.add('hide')
    }

    let messageValue = messageInput.value.trim()
    if (messageValue === '') {
        required[2].classList.remove('hide')
        hasError = true
    } else {
        required[2].classList.add('hide')
    }

    if (hasError) {
        event.preventDefault()
    }
})