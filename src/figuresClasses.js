"use strict";
exports.__esModule = true;
exports.getInfo = exports.Rectangle = exports.Circle = exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = 'triangle';
        this.color = color;
        if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Invalid triangle sides');
        }
    }
    Triangle.prototype.getArea = function () {
        var s = (this.a + this.b + this.c) / 2;
        return Number(Math
            .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2));
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.radius = radius;
        this.shape = 'circle';
        this.color = color;
        if (radius <= 0) {
            throw new Error('Radius must be greater than 0');
        }
    }
    Circle.prototype.getArea = function () {
        return Math.floor(Math.PI * (Math.pow(this.radius, 2)) * 100) / 100;
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, width, height) {
        this.width = width;
        this.height = height;
        this.shape = 'rectangle';
        if (width <= 0 || height <= 0) {
            throw new Error('Width and height must be greater than 0');
        }
        this.color = color;
    }
    Rectangle.prototype.getArea = function () {
        return Number((this.width * this.height).toFixed(2));
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A " + figure.color + " " + figure.shape + " - " + figure.getArea();
}
exports.getInfo = getInfo;
