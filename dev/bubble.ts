class Bubble {

    div:HTMLElement

    constructor() {
        console.log("Blub... blub...")

        //get game
        let game = document.getElementsByTagName("game")[0]

        //create bubble
        this.div = document.createElement("bubble")

        //append bubble to game
        game.appendChild(this.div)

        //give bubble random location
        let x = Math.random() * (window.innerWidth - this.div.clientWidth)
        let y = Math.random() * (window.innerHeight - this.div.clientHeight)
        
        this.div.style.transform = `translate(${x}px, ${y}px)`

        //add the event
        this.div.addEventListener("click",() => this.popBubble())
    }

    popBubble() {
        console.log("Plop!")
        this.div.remove()
    }
}