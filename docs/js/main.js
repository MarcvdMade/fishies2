"use strict";
var Bubble = (function () {
    function Bubble() {
        var _this = this;
        console.log("Blub... blub...");
        var game = document.getElementsByTagName("game")[0];
        this.div = document.createElement("bubble");
        game.appendChild(this.div);
        var x = Math.random() * (window.innerWidth - this.div.clientWidth);
        var y = Math.random() * (window.innerHeight - this.div.clientHeight);
        this.div.style.transform = "translate(" + x + "px, " + y + "px)";
        this.div.addEventListener("click", function () { return _this.popBubble(); });
    }
    Bubble.prototype.popBubble = function () {
        console.log("Plop!");
        this.div.remove();
    };
    return Bubble;
}());
var Coral = (function () {
    function Coral() {
        var _this = this;
        var game = document.getElementsByTagName("game")[0];
        this.div = document.createElement("coral");
        game.appendChild(this.div);
        var x = Math.random() * (window.innerWidth - this.div.clientWidth);
        var y = window.innerHeight - this.div.clientHeight;
        this.div.style.transform = "translate(" + x + "px, " + y + "px)";
        var coralArray = ["./images/corals/brain_coral.png", "./images/corals/bubble_coral.png", "./images/corals/fire_coral.png", "./images/corals/horn_coral.png", "./images/corals/tube_coral.png"];
        var texture = Math.floor(Math.random() * coralArray.length);
        this.div.style.backgroundImage = "url(" + coralArray[texture] + ")";
        this.div.addEventListener("click", function () { return _this.killCoral(); });
    }
    Coral.prototype.killCoral = function () {
        console.log("oof");
        this.div.style.filter = "grayscale(100%)";
        this.div.classList.add("dead-coral");
    };
    return Coral;
}());
var Fish = (function () {
    function Fish() {
        var _this = this;
        console.log("Fish was created!");
        var game = document.getElementsByTagName("game")[0];
        this.div = document.createElement("fish");
        game.appendChild(this.div);
        var color = Math.random() * 360;
        this.div.style.filter = "hue-rotate(" + color + "deg)";
        var x = Math.random() * (window.innerWidth - this.div.clientWidth);
        var y = Math.random() * (window.innerHeight - this.div.clientHeight);
        this.div.style.transform = "translate(" + x + "px, " + y + "px)";
        this.div.addEventListener("click", function () { return _this.killFish(); });
    }
    Fish.prototype.killFish = function () {
        console.log("Aargh!");
        this.div.classList.add("dead");
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        console.log("Game was created!");
        for (var i = 0; i < 100; i++) {
            this.fish = new Fish;
            this.bubble = new Bubble;
            this.coral = new Coral;
        }
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map