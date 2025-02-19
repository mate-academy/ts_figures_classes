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
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('Incorrect implementation of parameter a, b or c');
        }
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Incorrect implementation of parameter a, b or c');
        }
    }
    Triangle.prototype.getArea = function () {
        var s = 1 / 2 * (this.a + this.b + this.c);
        var areaOfTriangle = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return Math.floor(areaOfTriangle * 100) / 100;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, a) {
        this.color = color;
        this.a = a;
        this.shape = 'circle';
        if (a <= 0) {
            throw new Error('Incorrect implementation of parameter a');
        }
    }
    Circle.prototype.getArea = function () {
        var areaOfCircle = Math.PI * Math.pow(this.a, 2);
        return Math.floor(areaOfCircle * 100) / 100;
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
        if (a <= 0 || b <= 0) {
            throw new Error('Incorrect implementation of parameter a, b or c');
        }
    }
    Rectangle.prototype.getArea = function () {
        var areaOfRectangle = this.a * this.b;
        return Math.floor(areaOfRectangle * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    var message = "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
    return message;
}
