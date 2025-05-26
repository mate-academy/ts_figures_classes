"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = exports.Triangle = void 0;
exports.getInfo = getInfo;
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.shape = 'triangle';
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('All sides must be positive numbers');
        }
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Invalid triangle');
        }
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.p = (a + b + c) / 2;
    }
    Triangle.prototype.getArea = function () {
        var p = (this.a + this.b + this.c) / 2;
        var area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Math.round(area * 100) / 100;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.shape = 'circle';
        if (radius <= 0) {
            throw new Error('Radius must be a positive number');
        }
        this.color = color;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, width, height) {
        this.shape = 'rectangle';
        if (width <= 0 || height <= 0) {
            throw new Error('All sides must be positive numbers');
        }
        this.color = color;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return Math.round(this.width * this.height * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
