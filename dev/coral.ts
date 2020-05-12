class Coral {

    div : HTMLElement

    constructor() {
        //get game element
        let game = document.getElementsByTagName("game")[0]

        //create coral
        this.div = document.createElement("coral")

        //append coral
        game.appendChild(this.div)

        //give coral random location
        let x = Math.random() * (window.innerWidth - this.div.clientWidth)
        let y = window.innerHeight - this.div.clientHeight

        this.div.style.transform = `translate(${x}px, ${y}px)`

        //give coral random texture
        let coralArray = ["./images/corals/brain_coral.png", "./images/corals/bubble_coral.png", "./images/corals/fire_coral.png", "./images/corals/horn_coral.png", "./images/corals/tube_coral.png"]

        let texture = Math.floor(Math.random() * coralArray.length)

        this.div.style.backgroundImage = `url(${coralArray[texture]})`

        //add event
        this.div.addEventListener("click", () => this.killCoral())
    }

    killCoral(){
        console.log("oof")
        this.div.style.filter = "grayscale(100%)"
        this.div.classList.add("dead-coral")
    }
}