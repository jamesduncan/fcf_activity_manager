// Dependencies
steal(
    "opstools/FCFActivityManager/controllers/crud1FCFActivity.js"
)

// Initialization
.then(function(){

    // the div to attach the controller to
    var divID = 'test_crud1FCFActivity';

    // add the div to the window
    var buildHTML = function() {
        var html = [
                    '<div id="'+divID+'">',
                    '</div>'
                    ].join('\n');

        $('body').append($(html));
    }
    

    //Define the unit tests
    describe('testing controller AD.controllers.opstools.FCFActivityManager.crud1FCFActivity ', function(){

        var testController = null;

        before(function(){

            buildHTML();

            // Initialize the controller
            testController = new AD.controllers.opstools.FCFActivityManager.crud1FCFActivity($('#'+divID), { some:'data' });

        });



        it('controller definition exists ', function(){
            assert.isDefined(AD.controllers.opstools , ' :=> should have been defined ');
            assert.isDefined(AD.controllers.opstools.FCFActivityManager , ' :=> should have been defined ');
            assert.isDefined(AD.controllers.opstools.FCFActivityManager.crud1FCFActivity, ' :=> should have been defined ');
              assert.isNotNull(AD.Control.get('opstools.FCFActivityManager.crud1FCFActivity'), ' :=> returns our controller. ');
        });


    });


});