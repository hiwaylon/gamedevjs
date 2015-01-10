'use strict';

requirejs.config({

  // Use project root as base instead of location of require.js.
  baseUrl: '',

  // paths: {
  //   phaser: 'lib/phaser'
  // },

  // shim: {
  //   'phaser': {
  //     exports: 'Phaser'
  //   },
  //  }
});

// 'lib/perlin' loads 'noise' into the global namespace (use until such time a a wrapper is written for use
// with require JS).
// The perlin module is installed into the global namespace as 'noise'; phaser as 'Phaser'.
requirejs(['app/sandbox', 'lib/perlin', 'lib/phaser'], function(sandbox) {
    console.log();

  console.log(blah);

  console.log(nooo);
  console.log(Phaser);
  console.log(noise);

  var sandbox = new sandbox.Sandbox();
  sandbox.start(Phaser, noise);
});
