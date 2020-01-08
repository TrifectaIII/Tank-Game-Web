function Tank (chassis_sprite,cannon_sprite,x,y,scale, game) {
    this.game = game

    this.chassis = this.game.add.sprite(x,y,chassis_sprite)
    this.cannon = this.game.add.sprite(x,y,cannon_sprite)

    this.game.physics.arcade.enable([this.chassis, this.cannon])

    this.maxVel = 50
    this.velDecay = 1

    this.chassis.body.maxVelocity.x = this.maxVel
    this.chassis.body.maxVelocity.y = this.maxVel
    this.cannon.body.maxVelocity.x = this.maxVel
    this.cannon.body.maxVelocity.y = this.maxVel

    this.chassis.scale.setTo(scale)
    this.cannon.scale.setTo(scale)
    this.chassis.anchor.setTo(0.5)
    this.cannon.anchor.setTo(0.5)

    this.update = function () {
        if (this.chassis.body.velocity.x > 0){
            this.chassis.body.velocity.x -= this.velDecay
            this.cannon.body.velocity.x -= this.velDecay
        }
        else if (this.chassis.body.velocity.x < 0) {
            this.chassis.body.velocity.x += this.velDecay
            this.cannon.body.velocity.x += this.velDecay
        }

        if (this.chassis.body.velocity.y > 0){
            this.chassis.body.velocity.y -= this.velDecay
            this.cannon.body.velocity.y -= this.velDecay
        }
        else if (this.chassis.body.velocity.y < 0) {
            this.chassis.body.velocity.y += this.velDecay
            this.cannon.body.velocity.y += this.velDecay
        }

        if (this.chassis.body.velocity.x != 0 || this.chassis.body.velocity.y != 0) {
            this.chassis.rotation = this.chassis.body.velocity.atan() + Math.PI/2;
        }
    }
}