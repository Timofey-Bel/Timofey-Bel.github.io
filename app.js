//  Main navbar
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click',function() {
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if (containerHeight === 0 ){
    linksContainer.style.height = `${linksHeight}px`
    }
    else{
    linksContainer.style.height = '0px'
    }
})
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height
    if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav')
    }
    else{
    navbar.classList.remove('fixed-nav')
    }
    if(scrollHeight > 500){
    topLink.classList.add('show-link')
    }
    else{
    topLink.classList.remove('show-link')
    }
})
const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight

        if(!fixedNav){
            position = position - navHeight
        }
        if(navHeight > 82){
            position = position + containerHeight
        }

        window.scrollTo({
            left:0,
            top:position,
        })
        linksContainer.style.height = 0
    })
})

// Color flipper

isSimpleColor = true

document.getElementById('flipper').addEventListener('click', function() {
    isSimpleColor = true
})
document.getElementById('hex').addEventListener('click', function() {
    isSimpleColor = false
})

document.getElementById('btn').addEventListener('click', function() {
    if (isSimpleColor) {
        const colors = ["green", "red", "blue"];
        const btn = document.getElementById('btn')
        const color = document.querySelector('.color')
        const servicesSection = document.getElementById('services');
        const randomNumber = getRandomNumber()
        servicesSection.style.backgroundColor = colors[randomNumber]
        color.textContent = colors[randomNumber]

        function getRandomNumber() {
            return Math.floor(Math.random() * colors.length)
}            

    } else {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        const btn = document.getElementById('btn')
        const color = document.querySelector('.color')

        let hexColor = '#'
        for (let i = 0; i<6; i++) {
            hexColor += hex[getRandomNumber()]
        }
        color.textContent = hexColor
        const servicesSection = document.getElementById('services');
        servicesSection.style.backgroundColor = hexColor

        function getRandomNumber() {
            return Math.floor(Math.random() * hex.length)
};

    }
})

const whiteBtn = document.getElementById('random-colors')
whiteBtn.addEventListener('click',function() { 
document.getElementById('services').style.backgroundColor = 'white'
})







