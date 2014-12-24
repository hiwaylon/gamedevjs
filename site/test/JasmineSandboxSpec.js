define(['app/sandbox'], function(sandbox) {
  describe('just checking', function() {
    console.log('hi JasmineSandboxSpec');

    s = new sandbox.Sandbox();
    // console.log(s);
    s.flib();
    s.slib();

    console.log('end JasmineSandboxSpec');
  });
});
