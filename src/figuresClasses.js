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
            throw new Error('Side length is 0.');
        }
        var longSide;
        var sumOfSides;
        if (a > b && a > c) {
            longSide = a;
            sumOfSides = b + c;
        }
        else if (b > a && b > c) {
            longSide = b;
            sumOfSides = a + c;
        }
        else {
            longSide = c;
            sumOfSides = b + a;
        }
        if (longSide >= sumOfSides) {
            throw new Error('Sides 1, 2 and 3 can not form a triangle.');
        }
    }
    Triangle.prototype.getArea = function () {
        var s = 0.5 * (this.a + this.b + this.c);
        var square = Math.sqrt((s * (s - this.a) * (s - this.b) * (s - this.c)));
        return Math.trunc(square * 100) / 100;
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
            throw new Error('Radius is 0.');
        }
    }
    Circle.prototype.getArea = function () {
        return Math.trunc((Math.PI * (Math.pow(this.radius, 2))) * 100) / 100;
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
            throw new Error('Method not implemented.');
        }
    }
    Rectangle.prototype.getArea = function () {
        return Math.trunc((this.width * this.height) * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
exports.getInfo = getInfo;
