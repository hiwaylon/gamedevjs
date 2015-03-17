// This isn't the correct place for this stuff!
define(['app/sandbox'], function(sandbox) {
  describe('just checking', function() {
    console.log('hi JasmineSandboxSpec');

    s = new sandbox.Sandbox();
    // This isn't real it is to see similar behavior to app.js.
    var stubGame = function() {};
    s.start({
      Game: stubGame
    }, 
    {});

    console.log('bye JasmineSandboxSpec');
  });

  describe('JSON configuration for an ObjectTemplate-Object-PropertyTemplate-Property entity', function() {
	  var fooObjectTemplateConfig = {
	      "objectTemplateName": "fooObjectTemplate",
	      // Considerations: MongoDB style embedded property templates or RDB style normalized external references?
	      "propertyTemplates": [
	        {
		    // Fabricated example written at 10pm on beers. Don't believe what's here.
		    "uniqueName": "gravitational",
                    "description": "responds to gravitational force",
                    "attributes": [
	              {
			  "name": "gravitationalForce",
			  "value": 42
                      }           
                    ]
                },
	        {
		    "uniqueName": "mineOtherTemplate",
                    "value": 888
                }   
              ]
	  };
  });
});
