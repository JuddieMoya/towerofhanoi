let mode = "pickup"
let selectedDisc = null

const towerClick = function(evt) {
    const tower = evt.currentTarget
    const disc = tower.lastElementChild
    if (disc) {
        console.log("You picked up disc" + disc.id)
        selectedDisc = disc
        mode = "drop"
    } else {
        console.log("No disc picked up")
    }
}

const tower1 = document.querySelector("#tower1")
const tower2 = document.querySelector("#tower2")
const tower2 = document.querySelector("#tower3")

tower1.addEventListener ('click', towerClick)
tower2.addEventListener ('click', towerClick)
tower3.addEventListener ('click', towerClick)