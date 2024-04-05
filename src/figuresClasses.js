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
            throw new Error('Length of each side must be greater than 0');
        }
        if (a >= b + c || b >= a + c || c >= a + b) {
            throw new Error('The longest side of a triangle must be less than the sum of the other two sides');
        }
    }
    Triangle.prototype.getArea = function () {
        var s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
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
            throw new Error('Length of radius must be greater than 0');
        }
    }
    Circle.prototype.getArea = function () {
        var s = this.radius * this.radius * Math.PI;
        return s;
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
            throw new Error('Sides must be greater than 0');
        }
    }
    Rectangle.prototype.getArea = function () {
        var s = this.width * this.height;
        return s;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
exports.getInfo = getInfo;
var redRectangle = new Rectangle('red', 3, 5);
console.log(getInfo(redRectangle));
