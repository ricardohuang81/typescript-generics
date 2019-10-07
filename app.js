"use strict";
// SIMPLE GENERIC
function echo(data) {
    return data;
}
console.log(echo("Ricardo"));
console.log(echo(40));
console.log(echo({ name: "Richardo", age: 44 }));
// BETTER GENERIC
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Chao").length);
console.log(betterEcho(33));
console.log(betterEcho({ name: "Jokic", age: 22 }));
// BUILT-IN GENERICS
var testResults = [2.22, 9.09];
testResults.push(8.888);
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (el) { return console.log(el); });
}
printAll(["Ferguson", "Holloway", 243]);
// Generic Types
var echo2 = betterEcho;
console.log(echo2("That's Some Shit!"));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseVal * +this.multiplyVal;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseVal = "11";
simpleMath.multiplyVal = 33;
console.log(simpleMath.calculate());
