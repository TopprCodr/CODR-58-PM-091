var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {create: create, update: update });



var body1;
var body2;

function create() {

    //game.add.sprite(0, 0);
    body1 = game.add.sprite(0, 0,1);
    body2 = game.add.sprite(500, 0,1);
   

    //  Set-up the physics bodies
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.physics.arcade.enable([body1, body2]);
    
    body1.body.velocity.setTo(200, 200);
    body1.body.bounce.set(1);
    
    body2.body.velocity.setTo(-200, 200);
    body2.body.bounce.set(1);

    body1.body.collideWorldBounds = true;
    body2.body.collideWorldBounds = true;

}

function update () {

    game.physics.arcade.collide(body1, body2);

}