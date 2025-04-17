"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = exports.Triangle = void 0;
exports.getInfo = getInfo;
var Shape;
(function (Shape) {
    Shape["circle"] = "circle";
    Shape["rectangle"] = "rectangle";
    Shape["triangle"] = "triangle";
})(Shape || (Shape = {}));
var Color;
(function (Color) {
    Color["red"] = "red";
    Color["green"] = "green";
    Color["blue"] = "blue";
})(Color || (Color = {}));
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c, color) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.color = color;
        this.shape = Shape.triangle;
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('a, b and c must be greater than 0');
        }
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Sum must be greater');
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
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
        this.shape = Shape.circle;
        if (radius <= 0) {
            throw new Error('Radius must be greater than 0');
        }
    }
    Circle.prototype.getArea = function () {
        var area = Math.PI * Math.pow(this.radius, 2);
        return Math.floor(area * 100) / 100;
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.shape = Shape.rectangle;
        if (width <= 0 || height <= 0) {
            throw new Error('Error: a and b must be greater than 0');
        }
    }
    Rectangle.prototype.getArea = function () {
        var area = this.height * this.width;
        return Math.floor(area * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
