var game = new Phaser.Game(640, 480, Phaser.CANVAS, 'sandbox', {
    // preload: preload,
    // create: create,
    // update: update,
    render: render
});

function preload() {
}

function create() {
}

function update() {
}

function render() {
    game.debug.text("hello world!", 320, 240);
    game.debug.inputInfo(32, 32);
}
