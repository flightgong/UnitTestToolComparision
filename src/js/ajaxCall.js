/**
 * Created by zehuagong on 7/9/15.
 */
/*

 */
/*
The following name space is for ajax call the rest service
 */
CallRestApi = {};
//CallRestApi.jsonData = $.get('../data.json');

// for get
CallRestApi.get = function(url, callbackSuccess, callbackError) {
    $.ajax({
        method: 'GET',
        url : url,
        dataType: "json",
        success: callbackSuccess,
        error: callbackError
    })
};



