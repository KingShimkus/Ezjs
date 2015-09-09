// Ezjs
// Author: Luke Shimkus
// Copyright: 2015
// License: MIT
// Version: 0.1.0 dev
// Dependencies: N/A
// This is the dangerous version of Easify
// Start with semicolon in case other libraries
// don't end with one.
;(function(global) {

    // Global functions
    // Global functions
    // Global functions

    var Random = {
        number: function() {
            if (typeof(arguments[0]) === 'number' && arguments[1] === false) {
                return Math.random() * (arguments[0] - 0) + 0;
            } else if (arguments.length === 1) {
                return Math.floor(Math.random() * (arguments[0]) + 1);
            } else if (arguments[2] === false) {
                return Math.random() * (arguments[1] - arguments[0]) + arguments[0];
            } else {
                return Math.floor(Math.random() * (arguments[1] - arguments[0] + 1)) + arguments[0];
            }
        },
        letter: function(count) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            if (count) {
                for (var i = 0; i < count; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
            } else {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        },
        color: function() {
            return "#" + ((1 << 24) * Math.random() | 0).toString(16);
        }
    };

    // Object methods
    // Object methods
    // Object methods

    // Check the type of object
    Object.prototype.is = function(type) {
        if (typeof(this) === type) {
            return true;
        } else {
            return false;
        }
    };

    // String Methods
    // String Methods
    // String Methods

    // Capitalize a string
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };
    String.prototype.cap = String.prototype.capitalize;
    String.prototype.titlecase = String.prototype.capitalize;

    // Lowecase a string
    String.prototype.downcase = function() {
        return this.toLowerCase();
    };
    String.prototype.down = String.prototype.downcase;
    String.prototype.lower = String.prototype.downcase;

    // Return last character of string
    String.prototype.last = function() {
        return this.substring(this.length - 1);
    };

    // Return last character of string
    String.prototype.first = function() {
        return this.substring(0, 1);
    };

    // Randomize the string
    String.prototype.randomize = function() {
        var a = this.split(""),
            n = a.length;

        for (var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    };
    String.prototype.shuffle = String.prototype.randomize;

    // Reverse a string
    String.prototype.reverse = function() {
        return this.split("").reverse().join();
    };

    // String interpolation
    String.prototype.format = function(arg) {
        if (typeof(arg) === 'object') {
            return this.replace(/{([^{}]*)}/g,
                function(a, b) {
                    var r = arg[b];
                    return typeof r === 'string' || typeof r === 'number' ? r : a;
                }
            );
        } else {
            var argLen, args, repFn, str;
            repFn = void 0;
            str = this;
            if (typeof arg === "object") {
                repFn = function(a, b) {
                    if (arg[b]) {
                        return arg[b];
                    } else {
                        return a;
                    }
                };
            } else {
                args = arguments;
                argLen = args.length - 1;
                str = str.replace(/(?!\{)*\{\{(\w+)\}\}/g, function(a) {
                    var ret;
                    args[++argLen] = a.replace("{{", "{").replace("}}", "}");
                    ret = "{" + argLen + "}";
                    return ret;
                });
                repFn = function(a, b) {
                    return args[parseInt(b, 10)];
                };
            }
            return str.replace(/(?!\{)*\{(\w+)\}/g, repFn);
        }
    };
    String.prototype.supplant = String.prototype.format;


    // Array Methods
    // Array Methods 
    // Array Methods


    // Combines arrays keeping all values
    Array.prototype.bridge = function(arr) {
        var newArr = this;
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    };

    // Combines arrays keeping only unique values
    Array.prototype.unify = function(arr) {
        var newArr = this.concat(arr.filter(function(i) {
            return this.indexOf(i) < 0;
        }));
        return newArr;
    };

    // Returns last element of array
    Array.prototype.last = function() {
        if (this.length === 0) {
            throw "NoSuchElement";
        } else {
            return this[this.length - 1];
        }
    };

    // Checks if array has certain elements
    Array.prototype.has = function(what) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === what) {
                return true;
            }
        }
    };

    // Returns sum of all the elements
    Array.prototype.sum = function() {
        if (this.length === 0) {
            return 0;
        } else if (this.length === 1) {
            return parseInt(this[0], 10);
        } else {
            return this.reduce(function(x, y) {
                return x + y;
            });
        }
    };


    console.log("Easify loaded!");
}(window));
