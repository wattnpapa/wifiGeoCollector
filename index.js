// Modules
var wifiscanner = require('node-wifiscanner');
var Wifi = require('./wifi.js');
var Datastore = require('nedb');
var db = {};
db.wifis = new Datastore({ filename: 'db/wifis.db', autoload: true });

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
            db.wifis.insert(wifi, function (err, newDocs) {
                // Two documents were inserted in the database
                // newDocs is an array with these documents, augmented with their _id
                console.log(newDocs);
            });
            console.log(wifi);
        }



        console.log(start);
        console.log(new Date());
    });
}