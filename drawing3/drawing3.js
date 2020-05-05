let button = document.getElementById('button')
let pot = document.getElementById('pot')
let plant = document.getElementById('plant')
let state = "off"

// create an on/off button
button.onclick = function(event){
    if (state == "off"){
        // hide static png and show animated gif
        pot.classList.add('hidden')
        plant.classList.remove('hidden')
        state = "on"
    }
    else if (state == "on"){
        // show static png and hide animated gif
        pot.classList.remove('hidden')
        plant.classList.add('hidden')
        state = "off"
    }
}