require(["phaser/build/phaser", "perlin", "app/util"], function(phaser, perlin, util) {

//This function is called when scripts/helper/util.js is loaded.
//If util.js calls define(), then this function is not fired until
//util's dependencies have loaded, and the util argument will hold
//the module value for "helper/util".

// TODO: All the high level Phaser things should be abstracted out such that the game is started via a facade
// and adapter that wraps the phaser stuff.
var game = new Phaser.Game(
	640, 480, Phaser.CANVAS, 'sandbox', {
	    preload: preload,
	    create: create,
	    update: update,
	    render: render
	}
);

function preload() {
	// TODO: This looks a lot like a job for data driving stuff!
    game.load.spritesheet('darthVader', 'assets/sprites/darthvader.png', 32, 48, 16);
    game.load.spritesheet('ariel', 'assets/sprites/ariel.png', 32, 48, 16);
}

var darthVader;
var ariel;

function create() {
    darthVader = game.add.sprite(0, 0, 'darthVader', 0);
	darthVader.x = Math.max(0, (Math.random() * 640) - darthVader.width);
	darthVader.y = Math.max(0, (Math.random() * 480) - darthVader.height);
	darthVader.scale.setTo(4, 4);

    ariel = game.add.sprite(0, 0, 'ariel', 0);
	ariel.x = Math.max(0, (Math.random() * 640) - ariel.width);
	ariel.y = Math.max(0, (Math.random() * 480) - ariel.height);
	ariel.scale.setTo(2, 2);

    var text = "darth vader vs. ariel\nBATTLE!";
    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

    var t = game.add.text(game.world.centerX-300, 0, text, style);
}

function update() {
}

var rect = new Phaser.Rectangle( 100, 100, 100, 100 ) ;

function render() {
    game.debug.text("hello world!", 320, 240);
    game.debug.inputInfo(32, 32);
    game.debug.spriteInfo(darthVader, 640 - 256, 32);
    game.debug.spriteInfo(ariel, 640 - 256, 480 - 128);

	game.debug.geom(rect, 'rgba(255,0,0,1)');
}

});
