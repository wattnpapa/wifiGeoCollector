/**
 * Created by johannes on 16.02.16.
 */


function Wifi(bssid,rssi,date,position){
    this.bssid = bssid;
    this.rssi = rssi;
    this.date = date;
    this.position = position;
}

Wifi.prototype = {
    constructor: Wifi,

    getBssid: function(){
        return this.bssid;
    },

    setBssid: function(bssid){
        this.bssid = bssid;
    },

    getRssi: function(){
        return this.rssi;
    },

    setRssi: function(rssi){
        this.rssi = rssi;
    },

    getDate: function(){
        return this.date;
    },

    setDate: function(date){
        this.date = date
    },

    getPosition: function(){
        return this.position;
    },

    setPosition: function(position){
        this.position = position;
    }
};

module.exports = Wifi;
