define(['app/sandbox'], function(sandbox) {
  describe('just checking', function() {
    console.log('hi JasmineSandboxSpec');

    s = new sandbox.Sandbox();
    // This isn't real it is to see similar behavior to app.js.
    s.start();

    console.log('end JasmineSandboxSpec');
  });
});
