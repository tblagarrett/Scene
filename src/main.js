// Code Practice: Making a Scene
// Name: Garrett Blake
// Date: 1/17/2024

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    scene: [ MainMenu, Play ]
}

let game = new Phaser.Game(config)