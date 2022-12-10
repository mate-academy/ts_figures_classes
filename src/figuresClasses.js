"use strict";
exports.__esModule = true;
exports.getInfo = exports.Rectangle = exports.Circle = exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = 'triangle';
        var lengths = [this.a, this.b, this.c];
        lengths = lengths.sort(function (x, y) { return y - x; });
        if (lengths[0] >= (lengths[1] + lengths[2])) {
            throw new Error('It is not a triangle');
        }
        if ((this.a <= 0) || (this.b <= 0) || (this.c <= 0)) {
            throw new Error('Any length must be >= 0');
        }
    }
    Triangle.prototype.getArea = function () {
        var p = (this.a + this.b + this.c) / 2;
        return Math.floor(Math.sqrt(p * (p - this.a)
            * (p - this.b) * (p - this.c))
            * 100) / 100;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
        this.shape = 'circle';
        if (this.radius <= 0) {
            throw new Error('Any length must be >= 0');
        }
    }
    Circle.prototype.getArea = function () {
        return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
        this.shape = 'rectangle';
        if (this.width <= 0 || this.height <= 0) {
            throw new Error('Any length must be >= 0');
        }
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A " + figure.color + " " + figure.shape + " - " + figure.getArea();
}
exports.getInfo = getInfo;
