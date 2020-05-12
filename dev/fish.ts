class Fish {

    div: HTMLElement
    
    constructor() {
        console.log("Fish was created!")
        let game = document.getElementsByTagName("game")[0]

        //create fish
        this.div = document.createElement("fish")

        //append fish to game
        game.appendChild(this.div)

        //give fish random color
        let color = Math.random() * 360
        this.div.style.filter = `hue-rotate(${color}deg)`

        //give fish random location
        let x = Math.random() * (window.innerWidth - this.div.clientWidth)
        let y = Math.random() * (window.innerHeight - this.div.clientHeight)

        this.div.style.transform = `translate(${x}px, ${y}px)`

        //add the event
        this.div.addEventListener("click",() => this.killFish())
    }

    killFish(){
        console.log("Aargh!")
        this.div.classList.add("dead")
    }
}