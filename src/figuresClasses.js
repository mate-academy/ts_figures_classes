"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = exports.Triangle = void 0;
exports.getInfo = getInfo;
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.shape = 'triangle';
        this.color = color;
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
        if (this.sideA <= 0 ||
            this.sideB <= 0 ||
            this.sideC <= 0 ||
            this.sideA + this.sideB <= this.sideC ||
            this.sideA + this.sideC <= this.sideB ||
            this.sideB + this.sideC <= this.sideA) {
            throw new Error('Triangle cannot exist!');
        }
    }
    Triangle.prototype.getArea = function () {
        var s = (this.sideA + this.sideB + this.sideC) / 2;
        var area = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
        return Math.floor(area * 100) / 100;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.shape = 'circle';
        this.color = color;
        this.radius = radius;
        if (this.radius <= 0) {
            throw new Error('Radius cannot be 0!');
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
    function Rectangle(color, width, height) {
        this.shape = 'rectangle';
        this.color = color;
        this.width = width;
        this.height = height;
        if (this.width <= 0 || this.height <= 0) {
            throw new Error('Length cannot be 0!');
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
