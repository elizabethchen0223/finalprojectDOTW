const sunPath = "M74 37C74 57.4345 57.4345 74 37 74C16.5655 74 0 57.4345 0 37C0 16.5655 16.5655 0 37 0C57.4345 0 74 16.5655 74 37Z"
const moonPath = "M19.5 37.9469C19.5 58.3814 37 74.9469 37 74.9469C16.5655 74.9469 0 58.3814 0 37.9469C0 17.5123 16.5655 0.946867 37 0.946867C37 0.946867 19.5 17.5123 19.5 37.9469Z"
const sun = document.querySelector('#sun')
let greeting = document.querySelector("#greeting1")
let greeting2 = document.querySelector("#greeting2")
var morning_panel = document.getElementById('morning_panel')

var audio1 = document.getElementById('audio1')
var audio2 = document.getElementById('audio2')


let toggle = false

// clicking the sun will turn into dark 
sun.addEventListener('click',()=> {
    // call anime.js
    const timeline = anime.timeline({
        duration: 750, 
        easing: "easeOutExpo"
    })
    // add animation for sun to turn into moon
    timeline.add({
        targets: ".sun_shape",
        d: [{value: toggle ? sunPath : moonPath}]
    })
    .add ({
        targets: "#sun",
        rotate: 320}, "-= 350")
    .add({
        targets: "#container",
        backgroundImage: toggle ? "linear-gradient(#83FCE0,lightskyblue)" : "linear-gradient(#837B9E,#483D8B)",
        color: toggle ? "rgb(22, 22, 22)" : "rgb(255,255,255)"
    }, "-= 750")

    var toHide = anime({
        targets:"#morning_panel",
        easing:'easeOutQuad',
        duration: 750,
        loop: false,
        translateX: toggle ? "0" : "-1700"
    })

    // if we click the moon again, will switch back to sun
    if (!toggle){
        toggle = true
        morning_panel.style.overflow = "visible"
        greeting2.classList.add('greeting')
        audio1.pause()
        audio1.currentTime = 0
        audio2.play()

    }else{
        toggle = false 
        morning_panel.style.overflow = "hidden"
        greeting.textContent = "Good Morning, are you feeling better today?"
        audio2.pause()
        audio2.currentTime = 0
        audio1.play()
        goodmorning()
    }
})


var timeout

function goodmorning(){
    bubbletext1.textContent = "Not Really ..."
}


var plant = document.getElementById('plant')
var plant2 = document.getElementById('plant2')
var bubbles1 = document.querySelector('#bubble')
var bubbles2 = document.querySelector('#bubble2')
var circles = document.querySelector('#circles')
var bubbletext1 = document.querySelector('#text1')
var bubbletext2 = document.querySelector('#text2')


plant.onmouseover = function(){
    setTimeout(function(){
        circles.classList.remove('hidden')
        bubbles1.classList.remove('hidden')
        bubbletext1.classList.remove('hidden')
    }, 200)
}

plant2.onmouseover = function(){
    setTimeout(function(){
        bubbles2.classList.remove('hidden')
        bubbletext2.classList.remove('hidden')
    }, 200)
}


function makeRain(){}