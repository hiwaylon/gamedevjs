define(function() {
  'use strict';

  console.log('hi sandbox');

  // This is stupid and it sucks.
  var characters = {
    "characterSpecs": [
      {
        "system": "phaserSpriteSheet",
        "name": "darthVader",
        "assetLocation": "assets/sprites/darthvader.png",
        "tileSize": 32,
        "tileSize2": 48,
        "tileSize3": 16
      }
    ]
  };

  var Phaser;
  var PerlinNoise;
  var kWindowWidth = 768;
  var kWindowHeight = 480;

  // I can't figure out how to get varibles set in ctor onto this in the other methods.
  function Sandbox() {
  }

  Sandbox.prototype = {
    constructor: Sandbox,

    start: function(phaser, perlinNoise) {
      Phaser = phaser;

      PerlinNoise = perlinNoise;

      this.game = new Phaser.Game(kWindowWidth, kWindowHeight, Phaser.CANVAS, '', {
        preload: this.preload,
        create: this.create,
        update: this.update,
        render: this.render
      });
    },

    preload: function() {
      // TODO: This looks a lot like a job for data driving stuff!
      this.game.load.spritesheet('darthVader', 'assets/sprites/darthvader.png', 32, 48, 16);
      this.game.load.spritesheet('ariel', 'assets/sprites/ariel.png', 32, 48, 16);
      this.game.load.spritesheet('han', 'assets/sprites/hansolo.png', 32, 48, 16);
    },

    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.darthVader = this.game.add.sprite(0, 0, 'darthVader', 0);
      this.darthVader.x = Math.max(0, (Math.random() * 640) - this.darthVader.width);
      this.darthVader.y = Math.max(0, (Math.random() * 480) - this.darthVader.height);
      this.darthVader.scale.setTo(4, 4);

      this.ariel = this.game.add.sprite(0, 0, 'ariel', 0);
      this.ariel.x = Math.max(0, (Math.random() * 640) - this.ariel.width);
      this.ariel.y = Math.max(0, (Math.random() * 480) - this.ariel.height);
      this.ariel.scale.setTo(3, 3);

      this.han = this.game.add.sprite(0, 0, 'han', 0);
      this.han.x = Math.max(0, (Math.random() * 640) - this.han.width);
      this.han.y = Math.max(0, (Math.random() * 480) - this.han.height);
      this.han.scale.setTo(3, 3);

      this.game.physics.enable([this.ariel, this.darthVader, this.han], Phaser.Physics.ARCADE);
      this.ariel.body.allowRotation = false;
      this.darthVader.body.allowRotation = false;
      this.han.body.allowRotation = false;

      var text = "darth vader vs. ariel\nBATTLE!\nsave me SOLO!!!";
      var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

      var t = this.game.add.text(this.game.world.centerX - 300, 0, text, style);

      this.rect = new Phaser.Rectangle(100, 100, 100, 100);
      this.point = new Phaser.Point(50, 400);

      // Terrain haxxin'
      // generate some points from perlin
      // behavior is?
      // - intersection with player
      // use case?
      // - collecting flowers and balloons and sliding and swinging
      var terrainPointCount = kWindowWidth;
      this.terrainPoints = [];
      for (var i = 0; i < terrainPointCount; i++) {
        // What are the parameters to perlin2 for??? Where on the d
        // distribution or something?
        // console.debug(this);

        // I still don't know how to use perlin.
        var noiseFeeder = (37 * i) / 11;
        console.log("noiseFeeder: " + noiseFeeder);
        var perlinY = PerlinNoise.perlin2(noiseFeeder, 0);
        console.log("perlinY: " + perlinY);
        // perlinY *= perlinY * 10;
        // console.log("perlinY^2: " + perlinY);
        var height = (kWindowHeight*.66) - (perlinY * 100);
        console.log("height:" + height);
        // Each point is 10 spaces apart -v;
        var point = new Phaser.Point(i * 20, height);
        console.log("point:" + point);

        this.terrainPoints.push(point);
      }
    },

    update: function() {
      this.game.physics.arcade.moveToPointer(this.ariel, 60, this.game.input.activePointer);
      this.game.physics.arcade.moveToObject(this.darthVader, this.ariel, 12);
      this.game.physics.arcade.moveToObject(this.han, this.darthVader, 60);
    },

    render: function() {
      // this.game.debug.text("hello world!", 320, 240);
      this.game.debug.inputInfo(32, 32);
      this.game.debug.spriteInfo(this.darthVader, 640 - 256, 32);
      this.game.debug.spriteInfo(this.ariel, 640 - 256, 480 - 128);

      this.game.debug.geom(this.rect, 'rgba(255,0,0,1)');
      this.game.debug.geom(this.point, 'rgba(255,0,0,1)');

      for (var i = 0; i < this.terrainPoints.length; i++) {
        this.game.debug.geom(this.terrainPoints[i], 'rgba(255,255,255)');
      }
    },
  };

  return {
    Sandbox: Sandbox
  };
});
