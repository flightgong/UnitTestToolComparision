/**
 * Created by zehuagong on 7/10/15.
 */
describe('DOM Event Manipulation', function () {
    beforeEach(function() {
        loadFixtures('myfixture.html');
        DOMHandler.createChild("#my-fixture");
    });

    it("shoud add a new btn",function() {
        expect($('button#new').text()).toEqual("New btn");
    });
    it("shoud give button background color red", function() {
        expect($('button#new').css("background-color")).toEqual('rgb(255, 0, 0)');

    });

    it("should bind the click the new button", function() {
        //var spyEvent = spyOnEvent('#new', 'click');
        //console.log(spyEvent);
        $("#new").click();
        expect($("#innerDiv").html()).toEqual("Hello World")
        //expect('click').toHaveBeenTriggered('#new');
    });
});