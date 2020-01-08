var game = new Phaser.Game(750, 750, Phaser.AUTO, 'phaser-game', { preload: preload, create: create, update: update });

//Global Variables

//Function for loading in images
function preload() {
    game.load.image('pink-chassis','pink-chassis.png')
    game.load.image('pink-cannon','pink-cannon.png')
    game.load.image('pink-shell','pink-shell.png')
    game.load.image('blue-chassis','blue-chassis.png')
    game.load.image('blue-cannon','blue-cannon.png')
    game.load.image('blue-shell','blue-shell.png')
    game.load.image('yellow-chassis','yellow-chassis.png')
    game.load.image('yellow-cannon','yellow-cannon.png')
    game.load.image('yellow-shell','yellow-shell.png')
}

//Function for starting the game
function create() {

    //Global Tank Speed
    speed = 10
    
    //Set up Player controls
    upkey = game.input.keyboard.addKey(Phaser.Keyboard.W)
    downkey = game.input.keyboard.addKey(Phaser.Keyboard.S)
    rightkey = game.input.keyboard.addKey(Phaser.Keyboard.D)
    leftkey = game.input.keyboard.addKey(Phaser.Keyboard.A)

    //Create Player
    player = new Player('yellow-chassis', 'yellow-cannon', 'yellow-shell', game.width/2, game.height/2, 1, game, upkey, downkey,rightkey, leftkey, speed)
}

//Function for running the game
function update() {

    //Update Player
    player.update()
}