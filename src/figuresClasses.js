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
        if (a <= 0
            || b <= 0
            || c <= 0) {
            throw new Error('Each side should have length greaten than 0');
        }
        if (a + b <= c
            || a + c <= b
            || b + c <= a) {
            throw new Error("Sides " + this.a + ", " + this.b + " and " + this.c + " couldn't be a triangle");
        }
    }
    Triangle.prototype.getArea = function () {
        var _a = this, a = _a.a, b = _a.b, c = _a.c;
        var s = (a + b + c) / 2;
        var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
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
            throw new Error('Radius should be greaten than 0');
        }
    }
    Circle.prototype.getArea = function () {
        var area = Math.PI * (Math.pow(this.radius, 2));
        return Math.floor(area * 100) / 100;
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
            throw new Error('Width and height should be greaten than 0');
        }
    }
    Rectangle.prototype.getArea = function () {
        var _a = this, width = _a.width, height = _a.height;
        var area = width * height;
        return Math.floor(area * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A " + figure.color + " " + figure.shape + " - " + figure.getArea();
}
exports.getInfo = getInfo;
