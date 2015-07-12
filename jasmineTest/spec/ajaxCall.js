describe("get for api", function() {
    var that = this;
    beforeEach(function() {
        that.promise=$.get("../src/data.json");
        that.server = sinon.fakeServer.create();
        console.log(that.server);
    });
    afterEach(function() {
        that.server.restore();
        console.log("after each")
    });

    it("should get the right response when hit the right url", function(done) {
        console.log("go to it");
        that.promise.done(function(data) {
            console.log("go to get");
            that.actualResponse = data;
            console.log("before each" + that.actualResponse);
            console.log(that.actualResponse);
            that.server.respondWith("GET", "/weather", [200, {"Content-Type": "application/json"},
                JSON.stringify(that.actualResponse)]);
            var callbackSuccess = sinon.spy(); var callbackError = sinon.spy();
            console.log(callbackSuccess == callbackError);

            CallRestApi.get("/weather", callbackSuccess, callbackError);
            that.server.respond();

            expect(callbackSuccess.called).toBeTruthy();
            expect(callbackSuccess.calledWith(that.actualResponse)).toBeTruthy();
            console.log("before done");
            done();
            console.log("after done");
        });
        console.log("end");
    });

});