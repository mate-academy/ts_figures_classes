"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = exports.Triangle = void 0;
exports.getInfo = getInfo;
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = 'triangle';
        if (this.a + this.b <= this.c ||
            this.a + this.c <= this.b ||
            this.b + this.c <= this.a) {
            throw new Error("Invalid triangle sides. Can't form triangle.");
        }
        if (this.a === 0 || this.b === 0 || this.c === 0) {
            throw new Error("Length of one of the sides is 0. Can't form triangle.");
        }
    }
    Triangle.prototype.getArea = function () {
        var s = (this.a + this.b + this.c) / 2;
        var y = s * (s - this.a) * (s - this.b) * (s - this.c);
        var area = Math.floor(Math.sqrt(y) / 0.01) * 0.01;
        return area;
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
            throw new Error("Invalid radius. Can't form circle");
        }
    }
    Circle.prototype.getArea = function () {
        return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, a, b) {
        this.color = color;
        this.a = a;
        this.b = b;
        this.shape = 'rectangle';
        if (this.a <= 0 || this.b <= 0) {
            throw new Error("Invalid side length. Can't form rectangle.");
        }
    }
    Rectangle.prototype.getArea = function () {
        return Math.floor((this.a * this.b) / 0.01) * 0.01;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
