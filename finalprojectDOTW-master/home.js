var title = document.getElementById('title')
var home = document.getElementById('home')
var draw1 = document.getElementById('draw1')
var draw2 = document.getElementById('draw2')
var draw3 = document.getElementById('draw3')
var audio = document.getElementById('soundfx')
var imgContainer = document.getElementById('imageContainer')


home.onmouseover = function(){
    title.classList.add('hidden')
    audio.play()
    setTimeout(() => {
        title.innerHTML = "My greenhouse (you are here)"
        title.classList.remove('hidden')
    }, 200);
}

home.onmouseleave = function(){
    title.classList.add('hidden')
    setTimeout(() => {
        title.innerHTML = "greenHOUSE"
        title.classList.remove('hidden')
    }, 200);
}

draw1.onmouseover = function(){
    title.classList.add('hidden')
    audio.play()

    setTimeout(() => {
        title.innerHTML = "Plant Checkup"
        title.classList.remove('hidden')
    }, 200);
}

draw1.onmouseleave = function(){
    title.classList.add('hidden')

    setTimeout(() => {
        title.innerHTML = "greenHOUSE"
        title.classList.remove('hidden')
    }, 200);
}

draw2.onmouseover = function(){
    title.classList.add('hidden')
    audio.play()

    setTimeout(() => {
        title.innerHTML = "Drawing 2"
        title.classList.remove('hidden')
    }, 200);
}

draw2.onmouseleave = function(){
    title.classList.add('hidden')

    setTimeout(() => {
        title.innerHTML = "greenHOUSE"
        title.classList.remove('hidden')
    }, 200);
}

draw3.onmouseover = function(){
    title.classList.add('hidden')
    audio.play()

    setTimeout(() => {
        title.innerHTML = "Drawing 3"
        title.classList.remove('hidden')
    }, 200);
}

draw3.onmouseleave = function(){
    title.classList.add('hidden')

    setTimeout(() => {
        title.innerHTML = "greenHOUSE"
        title.classList.remove('hidden')
    }, 200);
}