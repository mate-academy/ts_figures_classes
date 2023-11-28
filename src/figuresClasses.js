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
        if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
            throw Error('Wrong dimensions');
        }
    }
    Triangle.prototype.getArea = function () {
        var s = (this.a + this.b + this.c) / 2;
        var area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return parseFloat(area.toFixed(2));
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
            throw new Error('Wrong radius');
        }
    }
    Circle.prototype.getArea = function () {
        var area = Math.PI * this.radius * this.radius;
        var areaString = area.toFixed(3);
        var roundedArea = areaString.slice(0, -1);
        return parseFloat(roundedArea);
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
            throw new Error('Wrong dimensions');
        }
    }
    Rectangle.prototype.getArea = function () {
        var area = this.width * this.height;
        return parseFloat(area.toFixed(2));
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
exports.getInfo = getInfo;
