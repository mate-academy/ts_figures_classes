"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = exports.Triangle = void 0;
exports.getInfo = getInfo;
function round(area) {
    return Math.floor(area * 100) / 100;
}
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = 'triangle';
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('The sides of the triangle must be greater than 0');
        }
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('The longest side of a triangle must be less than a sum of two others');
        }
    }
    Triangle.prototype.getArea = function () {
        var sides = [this.a, this.b, this.c];
        var p = sides.reduce(function (a, b) { return a + b; }, 0) / 2;
        var area = Math.sqrt(sides.reduce(function (a, b) { return a * (p - b); }, p));
        return round(area);
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
            throw new Error('A radius must be greater than 0');
        }
    }
    Circle.prototype.getArea = function () {
        return round(Math.PI * Math.pow(this.radius, 2));
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
            throw new Error('The sides of the rectangle must be greater than 0');
        }
    }
    Rectangle.prototype.getArea = function () {
        return round(this.width * this.height);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
