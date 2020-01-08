function Player (chassis_sprite, cannon_sprite, shell_sprite, x, y, scale, game, u, d, r, l, speed) {

    //save parameters
    this.game = game
    this.upkey = u
    this.downkey = d
    this.rightkey = r
    this.leftkey = l
    this.scale = scale
    this.speed = speed
    this.shell_sprite = shell_sprite
    this.x = x
    this.y = y

    //create group for shells
    this.shells = this.game.add.group()
    this.shot = false

    //create underlying tank object
    this.tank = new Tank(chassis_sprite, cannon_sprite, x, y, scale, game)

    this.update = function () {

        //4 way movement
        if (this.upkey.isDown) {
            this.tank.chassis.body.velocity.y -= this.speed
            this.tank.cannon.body.velocity.y -= this.speed
        }
        if (this.downkey.isDown) {
            this.tank.chassis.body.velocity.y += this.speed
            this.tank.cannon.body.velocity.y += this.speed
        }
        if (this.rightkey.isDown) {
            this.tank.chassis.body.velocity.x += this.speed
            this.tank.cannon.body.velocity.x += this.speed
        }
        if (this.leftkey.isDown) {
            this.tank.chassis.body.velocity.x -= this.speed
            this.tank.cannon.body.velocity.x -= this.speed
        }

        //cannon faces towards mouse
        this.tank.cannon.rotation = this.game.physics.arcade.angleToPointer(this.tank.cannon) - Math.PI/2

        //update underlying tank
        this.tank.update()

        //fire if on a "new" mouse click
        if (this.game.input.activePointer.isDown && !this.shot) {
            this.fire()
            this.shot = true
        }
        else if (!this.game.input.activePointer.isDown) {
            this.shot = false
        }

        this.x = this.tank.chassis.x
        this.y = this.tank.chassis.y
    }

    //function to fire shells
    this.fire = function () {
        shell = this.shells.create(this.tank.chassis.x, this.tank.chassis.y, this.shell_sprite)
        shell.anchor.setTo(0.5)
        shell.scale.setTo(0.4 * this.scale)
        this.game.physics.arcade.enable(shell)
        shell.rotation = this.game.physics.arcade.moveToPointer(shell, 750*this.scale) + Math.PI/2
    }
}