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
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('Enter valid data');
        }
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Enter valid data');
        }
    }
    Triangle.prototype.getArea = function () {
        var p = (this.a + this.b + this.c) / 2;
        var area = Number(Math.sqrt(p * (p - this.a)
            * (p - this.b) * (p - this.c)).toFixed(2));
        return area;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
        this.color = color;
        this.shape = 'circle';
        this.radius = radius;
        if (radius <= 0) {
            throw new Error('Enter valid data');
        }
    }
    Circle.prototype.getArea = function () {
        return Math.trunc(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
        this.color = color;
        this.shape = 'rectangle';
        this.width = width;
        this.height = height;
        if (this.height <= 0 || this.width <= 0) {
            throw new Error('Enter valid data');
        }
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
exports.getInfo = getInfo;
