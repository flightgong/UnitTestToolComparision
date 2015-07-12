/**
 * Created by zehuagong on 7/9/15.
 */

DOMHandler = {};

DOMHandler.createChild = function(id) {
    $(id).append("<button id = 'new'>New btn</button>");
    $('#new').css({'background-color': 'red'});
    $("#new").click(function() {
        console.log("button clicked");
        $("#innerDiv").html("Hello World");
    })
}