requirejs.config({
  // By default load any module IDs from js/lib
  baseUrl: 'js/lib',

  // except, if the module ID starts with "app",
  // load it from the js/app directory. paths
  // config is relative to the baseUrl, and
  // never includes a ".js" extension since
  // the paths config could be for a directory.
  paths: {
    app: '../app'
  },

  shim: {
    'phaser': {
      exports: 'Phaser'
    }
  }
});

// Start the main app logic.
// TODO: Don't need phaser here, testing.
requirejs(['phaser', 'app/sandbox'], function(Phaser, Sandbox) {
  // jQuery, canvas and the app/sub module are all
  // loaded and can be used here now.

  // new Phaser.Game(800, 600, Phaser.AUTO, '', {
  //   preload: this.preload,
  //   create: this.create
  // });

  // The shim for Phaser is here, which wraps it and makes it RequireJS-y; it is a
  // good time to make it available to the system.
  var sandbox = new Sandbox(Phaser);
  sandbox.flib();
  sandbox.slib();
});