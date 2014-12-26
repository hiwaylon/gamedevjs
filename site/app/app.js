// 'use strict';

requirejs.config({

  baseUrl: '',

  paths: {
    phaser: 'lib/phaser'
  },

  shim: {
    'phaser': {
      exports: 'Phaser'
    }
  }
});

// Start the main app logic.
// TODO: Don't need phaser here, testing.
requirejs(['app/sandbox', 'phaser'],
function(sandbox, Phaser) {

  console.log(sandbox);

  // console.log(Phaser);
  // new Phaser.Game(800, 600, Phaser.AUTO, '', {
  //   preload: this.preload,
  //   create: this.create
  // });

  // The shim for Phaser is here, which wraps it and makes it RequireJS-y; it is a
  // good time to make it available to the system.
  var sandbox = new sandbox.Sandbox();
  sandbox.start();
});