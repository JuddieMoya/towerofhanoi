//Code sources are sited at the bottom of the README.md file to avoid plagarism

let mode = "pickup"
let selectedDisc = null

const towerClick = function(evt) {
    const tower = evt.currentTarget
    if (mode === "pickup") {
        const disc = tower.lastElementChild
        if (disc) {
            console.log("You picked up disc " + disc.id)
            selectedDisc = disc
            mode = "drop"
        } else {
            console.log("No disc picked up.")
        } 
    }  else if (mode === "drop") {
        if (!tower.lastElementChild) {
            tower.append(selectedDisc)
            mode = "pickup"
            console.log("You dropped onto " + tower.id)
    } else if (selectedDisc.dataset.width < evt.currentTarget.lastElementChild.dataset.width) {
        tower.append(selectedDisc)
        console.log("Yay!")
        mode = "pickup"
    } else {
        alert("Invalid Move.")
    } if (tower3.childElementCount===4) {
        alert("You win!")
    }
    }
} 
    

const tower1 = document.querySelector("#tower1")
const tower2 = document.querySelector("#tower2")
const tower3 = document.querySelector("#tower3")

tower1.addEventListener ('click', towerClick)
tower2.addEventListener ('click', towerClick)
tower3.addEventListener ('click', towerClick)