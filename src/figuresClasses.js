"use strict";
exports.__esModule = true;
exports.getInfo = exports.Rectangle = exports.Circle = exports.Triangle = exports.approx = void 0;
function approx(number) {
    return Math.floor(number * 100) / 100;
}
exports.approx = approx;
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.shape = 'triangle';
        if (arguments.length < 4) {
            throw new Error('Wrong argument amount');
        }
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('Each side should be bigger than 0');
        }
        if (a + b <= c || a + c <= b || c + b <= a) {
            throw new Error("the longest side of a triangle \n      is >= than a sum of two others");
        }
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangle.prototype.getArea = function () {
        var s = (this.a + this.b + this.c) / 2;
        return approx(Math.sqrt(s * (s - this.a)
            * (s - this.b)
            * (s - this.c)));
    };
    Triangle.prototype.message = function () {
        return "A ".concat(this.color, " ").concat(this.shape, " - ").concat(this.getArea());
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.shape = 'circle';
        if (arguments.length < 2) {
            throw new Error('wrong argument length');
        }
        if (radius <= 0) {
            throw new Error('radius should be bigger than 0');
        }
        this.color = color;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return approx(Math.PI * (Math.pow(this.radius, 2)));
    };
    Circle.prototype.message = function () {
        return "A ".concat(this.color, " ").concat(this.shape, " - ").concat(this.getArea());
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, a, b) {
        this.shape = 'rectangle';
        if (arguments.length < 3) {
            throw new Error('Wrong argument amount');
        }
        if (a <= 0 || b <= 0) {
            throw new Error('Each side should be bigger than 0');
        }
        this.color = color;
        this.a = a;
        this.b = b;
    }
    Rectangle.prototype.getArea = function () {
        return this.a * this.b;
    };
    Rectangle.prototype.message = function () {
        return "A ".concat(this.color, " ").concat(this.shape, " - ").concat(this.getArea());
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return figure.message();
}
exports.getInfo = getInfo;
