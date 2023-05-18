"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = exports.Rectangle = exports.Circle = exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = 'triangle';
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('omg, length is too small!');
        }
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('two sides are greater');
        }
    }
    Triangle.prototype.getArea = function () {
        var p = (this.a + this.b + this.c) / 2;
        var area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Math.floor(area * 100) / 100;
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
            throw new Error('omg, length is too small!');
        }
    }
    Circle.prototype.getArea = function () {
        return Math.floor((Math.PI * (Math.pow(this.radius, 2))) * 100) / 100;
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
        if (width <= 0 || height <= 0) {
            throw new Error('omg, length is too small!');
        }
    }
    Rectangle.prototype.getArea = function () {
        return +(this.width * this.height).toFixed(2);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
exports.getInfo = getInfo;
