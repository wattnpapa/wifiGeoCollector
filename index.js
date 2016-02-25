// Modules
var wifiscanner = require('node-wifiscanner');
var Wifi = require('./wifi.js');
var serialgps = require('super-duper-serial-gps-system');
var gps = new serialgps('/dev/ttyACM0',9600);
var cmd = require("cmd-exec").init();

// Variables
var position =  {lat:0, lng:0};

//Set Date Time by GPS
gps.on('nav-info', function(data) {
    var time = Math.round(data.timestamp)+"";
    time = time.substr(0,2) + ":" + time.substr(2,2) + ":" + time.substr(4,2);
    var date = "20" + data.date.substr(4,2) + "-"+ data.date.substr(2,2) + "-" + data.date.substr(0,2);
    cmd.exec('date -s "'+date+' '+time+'"');
});

//Update Position
gps.on('position', function(data) {
    position.lat = Math.round(data.latitude*1000000)/1000000;
    position.lng = Math.round(data.longitude*1000000)/1000000;
});

setInterval(scanWifis,10000);

function scanWifis(){
    if(position.lat != 0 && position.lng != 0){
	console.log("Start Scan");
        var start = new Date();
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
}


