class Game {
        
    fish : Fish
    bubble : Bubble
    coral : Coral

    constructor() {
        console.log("Game was created!")

        for(let i = 0; i < 100; i++) {
            this.fish = new Fish

            this.bubble = new Bubble

            this.coral = new Coral
        }

    }
} 

window.addEventListener("load", () => new Game())