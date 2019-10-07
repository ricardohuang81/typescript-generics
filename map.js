"use strict";
var MapIt = /** @class */ (function () {
    function MapIt() {
        this.map = {};
    }
    MapIt.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MapIt.prototype.getItem = function (key) {
        return this.map[key];
    };
    MapIt.prototype.clear = function () {
        this.map = {};
    };
    MapIt.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key + ": " + this.map[key]);
        }
    };
    return MapIt;
}());
var numberMap = new MapIt();
numberMap.setItem("UFC Interim Champs", 1);
numberMap.setItem("UFC Undisputed Champs", 8);
console.log(numberMap);
console.log(numberMap.getItem("UFC Undisputed Champs"));
numberMap.printMap();
var stringMap = new MapIt();
stringMap.setItem("Israel Adesanya", "The Last Style Bender");
stringMap.setItem("Robert Whittaker", "The Da Reaper");
console.log(stringMap);
console.log(stringMap.getItem("Israel Adesanya"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
// console.log(stringMap);
