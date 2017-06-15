// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y =y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.speed = 100+200*Math.random();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x <=505){
    this.x += dt * this.speed
    }
    else
    {
    this.x=this.x-605+dt*this.speed;
    };

    this.checkCollision(player);

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.checkCollision = function (player) {
// var left_x= player.x-50;
// var right_x = player.x+50;
//      if(this.y === player.y || this.x>= left_x || this.x<= right_x ){
  
//         }
//     else{  
//         // 没碰上                
//         }  

        // var circle = {radius: 30, x:this.x, y:this.y};

        var dx = this.x - player.x;
        var dy = this.y - player.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 30) {
            // collision detected!
            player.x=101*2;
            player.y=83*4+70;   
        }
        else{
            // not detected
        }

}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function(dt) {
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(movement) {
    switch(movement){
        case 'left':
        if (this.x >= 50) {
            this.x -= 100;
        } break;
        case 'right':
        if (this.x <= 350) {
            this.x += 100;
        } break;
        case 'up':
        if (this.y>=50){
            this.y -= 83;
        }  break;
        case 'down':
        if (this.y<=4*83){
            this.y += 83;
        } break;
}
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
    new Enemy(0, 83 * 0 + 70), new Enemy(30, 83 * 0 + 70), // row 1
    new Enemy(60, 83 * 1 + 70), new Enemy(10, 83 * 1 + 70), // row 2
    new Enemy(25, 83 * 2 + 70), new Enemy(60, 83 * 2 + 70),  // row 3
    ]
var player= new Player(101*2,83*4+70);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

