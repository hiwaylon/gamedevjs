define(['phaser'], function(Phaser) {
  // 'use strict';

  function Sandbox() {
    console.log('hi sandbox');
  }

  Sandbox.prototype = {
    flib: function() {
      console.log('flibbed!');
    },

    slib: function() {
      var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
        preload: this.preload,
        create: this.create
      });
    }

  };

  return Sandbox;
});


// require(['phaser', 'perlin', 'app/util'], function(Phaser, perlin, util) {

// //This function is called when scripts/helper/util.js is loaded.
// //If util.js calls define(), then this function is not fired until
// //util's dependencies have loaded, and the util argument will hold
// //the module value for "helper/util".

// // TODO: All the high level Phaser things should be abstracted out such that the game is started via a facade
// // and adapter that wraps the phaser stuff.
// var game = new Phaser.Game(
//   768, 480, Phaser.CANVAS, 'sandbox', {
//   preload: preload,
//   create: create,
//   update: update,
//   render: render
//   }
// );

// function preload() {
//   // TODO: This looks a lot like a job for data driving stuff!
//   game.load.spritesheet('darthVader', 'assets/sprites/darthvader.png', 32, 48, 16);
//   game.load.spritesheet('ariel', 'assets/sprites/ariel.png', 32, 48, 16);
//   game.load.spritesheet('han', 'assets/sprites/hansolo.png', 32, 48, 16);
// }

// var darthVader;
// var ariel;
// var han;

// function create() {
//   game.physics.startSystem(Phaser.Physics.ARCADE);

//   darthVader = game.add.sprite(0, 0, 'darthVader', 0);
//   darthVader.x = Math.max(0, (Math.random() * 640) - darthVader.width);
//   darthVader.y = Math.max(0, (Math.random() * 480) - darthVader.height);
//   darthVader.scale.setTo(4, 4);

//   ariel = game.add.sprite(0, 0, 'ariel', 0);
//   ariel.x = Math.max(0, (Math.random() * 640) - ariel.width);
//   ariel.y = Math.max(0, (Math.random() * 480) - ariel.height);
//   ariel.scale.setTo(3, 3);

//   han = game.add.sprite(0, 0, 'han', 0);
//   han.x = Math.max(0, (Math.random() * 640) - han.width);
//   han.y = Math.max(0, (Math.random() * 480) - han.height);
//   han.scale.setTo(3, 3);

//   game.physics.enable([ariel, darthVader, han], Phaser.Physics.ARCADE);
//   ariel.body.allowRotation = false;
//   darthVader.body.allowRotation = false;
//   han.body.allowRotation = false;

//   var text = "darth vader vs. ariel\nBATTLE!\nsave me SOLO!!!";
//   var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

//   var t = game.add.text(game.world.centerX-300, 0, text, style);
// }

// function update() {
//   game.physics.arcade.moveToPointer(ariel, 60, game.input.activePointer);
//   game.physics.arcade.moveToObject(darthVader, ariel, 12);
//   game.physics.arcade.moveToObject(han, darthVader, 60);
// }

// var rect = new Phaser.Rectangle( 100, 100, 100, 100 ) ;
// var point = new Phaser.Point(50, 400);

// function render() {
//   game.debug.text("hello world!", 320, 240);
//   game.debug.inputInfo(32, 32);
//   game.debug.spriteInfo(darthVader, 640 - 256, 32);
//   game.debug.spriteInfo(ariel, 640 - 256, 480 - 128);

//   game.debug.geom(rect, 'rgba(255,0,0,1)');

//   game.debug.geom(point, 'rgba(255,0,0,1)');
// }

// });
