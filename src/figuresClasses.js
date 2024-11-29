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
        var sides = [a, b, c];
        if (sides.some(function (s) { return s <= 0; })) {
            throw new Error('Invalid sides');
        }
        var largest = Math.max.apply(Math, sides);
        sides.splice(sides.indexOf(Math.max.apply(Math, sides)), 1);
        if (largest >= sides.reduce(function (acc, cur) { return acc + cur; })) {
            throw new Error("sides ".concat(a, ", ").concat(b, " and ").concat(c, " can't form a triangle"));
        }
    }
    Triangle.prototype.getArea = function () {
        var s = 0.5 * (this.a + this.b + this.c);
        return (Math.floor(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100);
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
            throw new Error('Invalid radius');
        }
    }
    Circle.prototype.getArea = function () {
        return Math.floor(Math.floor(Math.PI * Math.pow(this.radius, 2) * 100)) / 100;
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
            throw new Error('Invalid width or height');
        }
    }
    Rectangle.prototype.getArea = function () {
        return Math.floor(this.width * this.height * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
