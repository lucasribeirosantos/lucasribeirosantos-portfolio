const navList =  document.getElementById('nav-list')
const links = document.querySelectorAll('.ul-links')
const mobileMenu = document.getElementById('mobile-menu')
const lines = document.querySelectorAll('.line')

mobileMenu.addEventListener('click', (event)=> {
    const isActive = navList.classList.toggle('active')

    // LINKS ANIMATION
    if(isActive) {
        links.forEach((link, index)=>{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`
        }) 
    } else {
        links.forEach(link =>{
            link.style.animation = ``
        })
    }

    // MENU LINES
    if(isActive) {
        lines.forEach(line =>{
            line.classList.add('active')
        })
    } else {
        lines.forEach(line =>{
            line.classList.remove('active')
        })
    }
})

links.forEach(link => {
    link.addEventListener('click', ()=>{
        navList.classList.remove('active')
        mobileMenu.setAttribute('aria-expanded', false)

        lines.forEach(line => {
            line.classList.remove('active')
        })

        links.forEach(link => link.style.animation = '')
    })
})