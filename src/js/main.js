var swiper = new Swiper(".mySwiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    loop: true,
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
let callBtn = document.querySelector(".header__link-reg")
let overlay = document.querySelector(".overlay")
callBtn.addEventListener('click',function () {
    overlay.style.display = 'block'
} )
overlay.addEventListener("click" ,function (e){
    if (e.target.className.includes("overlay")){
        overlay.style.display = "none"
    }
})
let pop = document.querySelector('.pop__btn')
let right = document.querySelector('.pop__right')
let left = document.querySelector('.pop__left')
let pops = document.querySelector('.pop')
let poptext = document.querySelector('.pop__text')

pop.addEventListener('click',()=> {
    left.classList.toggle("pop__left-animation")
    right.classList.toggle("pop__right-animation")
    pop.classList.toggle("pop__top-animation")
    pops.classList.toggle ("pop__active")
    poptext.classList.toggle ("pop__active")

} )
let dark = document.getElementById("dark");
dark.onclick = function () {
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "src/css/style.css") {
        theme.href = "src/css/dark.css";
    } else {
        theme.href = "src/css/dark.css";
    }
}
let white = document.getElementById("white");
white.onclick = function () {
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "src/css/dark.css") {
        theme.href = "src/css/style.css";
    } else {
        theme.href = "src/css/style.css";
    }
}
let opacity = document.querySelector(".wave__img")
let opacity2 = document.querySelector(".asked__img")

opacity.addEventListener('mouseover', ()=>{
    opacity.style.opacity = '0'
    opacity.style.transition = '1s'
})
opacity.addEventListener('mouseout', ()=>{
    opacity.style.opacity = '1'
    opacity.style.transition = '1s'
})
opacity2.addEventListener('mouseover', ()=>{
    opacity2.style.opacity = '0'
    opacity2.style.transition = '1s'
})
opacity2.addEventListener('mouseout', ()=>{
    opacity2.style.opacity = '1'
    opacity2.style.transition = '1s'
})
$(window).scroll(function() {
    right.style.display = "none"
    left.style.display = "none"
});
let btn = document.querySelector(".meta__btn")
let btn2 = document.querySelector(".wave__right-btn")
let btn3 = document.querySelector(".join__info-btn")
let btn4 = document.querySelector(".join__info-btn-link")
btn.addEventListener('click',()=>{
    btn.style.background = "black"
    btn.style.color = "white"
    btn.style.border = "1px solid #8DFD1B"
    btn.style.transition = "1s"
    btn2.style.background = "black"
    btn2.style.color = "white"
    btn2.style.border = "1px solid #8DFD1B"
    btn2.style.transition = "1s"
    btn3.style.background = "black"
    btn4.style.color = "white"
    btn3.style.border = "1px solid #8DFD1B"
    btn3.style.transition = "1s"
    btn.addEventListener("mouseover",()=>{
        btn.style.background = "#8DFD1B"
        btn.style.color = "black"
        btn.style.border = "1px solid #8DFD1B"
        btn.style.transition = "1s"
    })
    btn2.addEventListener("mouseover",()=>{
        btn2.style.background = "#8DFD1B"
        btn2.style.color = "black"
        btn2.style.border = "1px solid #8DFD1B"
        btn2.style.transition = "1s"
    })
    btn3.addEventListener("mouseover",()=>{
        btn3.style.background = "#8DFD1B"
        btn4.style.color = "black"
        btn3.style.border = "1px solid #8DFD1B"
        btn3.style.transition = "1s"
    })
    btn.addEventListener("mouseout",()=>{
        btn.style.background = "black"
        btn.style.color = "white"
        btn.style.border = "1px solid #8DFD1B"
        btn.style.transition = "1s"
})
    btn2.addEventListener("mouseout",()=>{
        btn2.style.background = "black"
        btn2.style.color = "white"
        btn2.style.border = "1px solid #8DFD1B"
        btn2.style.transition = "1s"
    })
    btn3.addEventListener("mouseout",()=>{
        btn3.style.background = "black"
        btn4.style.color = "white"
        btn3.style.border = "1px solid #8DFD1B"
        btn3.style.transition = "1s"
    })
})
btn2.addEventListener('click',()=> {
    btn.style.background = "#8DFD1B"
    btn.style.color = "black"
    btn.style.border = "1px solid #8DFD1B"
    btn.style.transition = "1s"
    btn2.style.background = "#8DFD1B"
    btn2.style.color = "black"
    btn2.style.border = "1px solid #8DFD1B"
    btn2.style.transition = "1s"
    btn3.style.background = "#8DFD1B"
    btn4.style.color = "black"
    btn3.style.border = "1px solid #8DFD1B"
    btn3.style.transition = "1s"
    btn.addEventListener("mouseout",()=>{
        btn.style.background = "#8DFD1B"
        btn.style.color = "black"
        btn.style.border = "1px solid #8DFD1B"
        btn.style.transition = "1s"
    })
    btn2.addEventListener("mouseout",()=>{
        btn2.style.background = "#8DFD1B"
        btn2.style.color = "black"
        btn2.style.border = "1px solid #8DFD1B"
        btn2.style.transition = "1s"
    })
    btn3.addEventListener("mouseout",()=> {
        btn3.style.background = "#8DFD1B"
        btn4.style.color = "black"
        btn3.style.border = "1px solid #8DFD1B"
        btn3.style.transition = "1s"
    })
    btn.addEventListener("mouseover",()=>{
        btn.style.background = "black"
        btn.style.color = "white"
        btn.style.border = "1px solid #8DFD1B"
        btn.style.transition = "1s"
    })
    btn2.addEventListener("mouseover",()=>{
        btn2.style.background = "black"
        btn2.style.color = "white"
        btn2.style.border = "1px solid #8DFD1B"
        btn2.style.transition = "1s"
    })
    btn3.addEventListener("mouseover",()=>{
        btn3.style.background = "black"
        btn4.style.color = "white"
        btn3.style.border = "1px solid #8DFD1B"
        btn3.style.transition = "1s"
    })
})
