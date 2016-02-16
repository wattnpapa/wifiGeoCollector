/**
 * Created by johannes on 16.02.16.
 */


function Wifi(bssid,rssi,date,position){
    this._bssid = bssid;
    this._rssi = rssi;
    this._date = date;
    this._position = position;
}

Wifi.prototype = {
    constructor: Wifi,

    getBssid: function(){
        return this._bssid;
    },

    setBssid: function(bssid){
        this._bssid = bssid;
    },

    getRssi: function(){
        return this._rssi;
    },

    setRssi: function(rssi){
        this._rssi = rssi;
    },

    getDate: function(){
        return this._date;
    },

    setDate: function(date){
        this._date = date
    },

    getPosition: function(){
        return this._position;
    },

    setPosition: function(position){
        this._position = position;
    }
};

module.exports = Wifi;
