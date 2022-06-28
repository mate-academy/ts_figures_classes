"use strict";
exports.__esModule = true;
exports.getInfo = exports.Rectangle = exports.Circle = exports.Triangle = void 0;
function roundNumber(num) {
    return Math.floor(num * 100) / 100;
}
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = 'triangle';
        this.color = color;
        if (a >= b + c || b >= a + c || c >= a + b) {
            throw new Error('Please provide valid dimension of Triangle side');
        }
    }
    Triangle.prototype.getArea = function () {
        var area = (this.a + this.b + this.c) / 2;
        return roundNumber(Math.sqrt(area * (area - this.a) * (area - this.b)
            * (area - this.c)));
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
            throw new Error('Circle radius should be a positive number');
        }
    }
    Circle.prototype.getArea = function () {
        return roundNumber(Math.PI * (Math.pow(this.radius, 2)));
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, width, height) {
        this.width = width;
        this.height = height;
        this.shape = 'rectangle';
        this.color = color;
        if (width <= 0 || height <= 0) {
            throw new Error('Length of Rectangle side should be a positive number');
        }
    }
    Rectangle.prototype.getArea = function () {
        return roundNumber(this.width * this.height);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
exports.getInfo = getInfo;
