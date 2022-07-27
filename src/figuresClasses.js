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
        if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
            throw new Error('Sides are less than 0');
        }
        else if (this.a >= this.b + this.c
            || this.b >= this.a + this.c
            || this.c >= this.a + this.b) {
            throw new Error('It is not a triangle');
        }
    }
    Triangle.prototype.getArea = function () {
        var halfArea = (this.a + this.b + this.c) / 2;
        var area = Math.sqrt(halfArea
            * (halfArea - this.a)
            * (halfArea - this.b)
            * (halfArea - this.c));
        return Number(area.toFixed(2));
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
            throw new Error('Radius is less than 0');
        }
    }
    Circle.prototype.getArea = function () {
        var area = Math.PI * (Math.pow(this.radius, 2));
        return Math.floor(Number(area.toFixed(3)) * 100) / 100;
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
        if (this.height <= 0 || this.width <= 0) {
            throw new Error('Sides are less than 0');
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
