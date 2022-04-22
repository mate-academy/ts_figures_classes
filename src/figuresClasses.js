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
            throw new Error('error lengths');
        }
        if (a + b <= c || b + c <= a || a + c <= b) {
            throw new Error('error lengths');
        }
    }
    Triangle.prototype.getArea = function () {
        var p = (this.a + this.b + this.c) / 2;
        var area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Math.floor(100 * area) / 100;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
        this.shape = 'circle';
        if (radius <= 0) {
            throw new Error('error radius');
        }
    }
    Circle.prototype.getArea = function () {
        var area = Math.PI * this.radius * this.radius;
        return Math.floor(100 * area) / 100;
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, width, heigth) {
        this.color = color;
        this.width = width;
        this.heigth = heigth;
        this.shape = 'rectangle';
        if (width <= 0 || heigth <= 0) {
            throw new Error('error width or height');
        }
    }
    Rectangle.prototype.getArea = function () {
        return Math.floor(this.width * this.heigth * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
exports.getInfo = getInfo;
