"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = exports.Triangle = void 0;
exports.getInfo = getInfo;
var Triangle = /** @class */ (function () {
    // eslint-disable-next-line no-useless-constructor
    function Triangle(color, a, b, c) {
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = 'triangle';
        if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
            throw new Error('Sides must be positive numbers');
        }
        if (this.a + this.b <= this.c ||
            this.a + this.c <= this.b ||
            this.b + this.c <= this.a) {
            throw new Error('The provided sides do not form a valid triangle');
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
    // eslint-disable-next-line no-useless-constructor
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
        this.shape = 'circle';
        if (this.radius <= 0) {
            throw new Error('Radius must be positive number');
        }
    }
    Circle.prototype.getArea = function () {
        var area = Math.PI * this.radius * this.radius;
        return Math.floor(area * 100) / 100;
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    // eslint-disable-next-line no-useless-constructor
    function Rectangle(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
        this.shape = 'rectangle';
        if (this.width <= 0 || this.height <= 0) {
            throw new Error('Width and height must be positive numbers');
        }
    }
    Rectangle.prototype.getArea = function () {
        var area = this.width * this.height;
        return Math.floor(area * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
