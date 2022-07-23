let accordions = document.querySelectorAll(".asked__accordion-info")

accordions.forEach(function (accordion) {
    accordion.children[2].addEventListener('click', function (){
        accordion.classList.toggle('asked__accordion-info-active')
    })
})
