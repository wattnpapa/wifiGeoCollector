// Modules
var wifiscanner = require('node-wifiscanner');
var Wifi = require('./wifi.js');

// Variables
var position =  {lat:0, lng:0};
var start = new Date();
scanWifis();

function scanWifis(){
    wifiscanner.scan(function(err, data){
        if (err) {
            console.log("Error : " + err);
            return;
        }

        for(var i = 0; i < data.length ; i++){
            var wifi = new Wifi(data[i].mac,data[i].signal_level, new Date(),position);
            console.log(wifi);
        }

        console.log(start);
        console.log(new Date());
    });
}