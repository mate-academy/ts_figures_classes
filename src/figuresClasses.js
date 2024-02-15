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
        if (this.a <= 0
            || this.b <= 0
            || this.c <= 0
            || this.a >= this.b + this.c
            || this.b >= this.a + this.c
            || this.c >= this.a + this.b) {
            throw new Error('woops, set correct sides lengths');
        }
    }
    Triangle.prototype.getArea = function () {
        var hp = (this.a + this.b + this.c) / 2;
        var result = (Math.sqrt(hp
            * (hp - this.a) * (hp - this.b) * (hp - this.c)));
        if (result % 1 === 0) {
            return result;
        }
        return Number((result.toString()
            .slice(0, result.toString().indexOf('.') + 3)));
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
            throw new Error('woops, set correct radius length');
        }
    }
    Circle.prototype.getArea = function () {
        var result = (Math.PI * (this.radius * this.radius));
        if (result % 1 === 0) {
            return result;
        }
        return Number((result.toString()
            .slice(0, result.toString().indexOf('.') + 3)));
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
        if (this.width <= 0 || this.height <= 0) {
            throw new Error('woops, set correct sides lengths');
        }
    }
    Rectangle.prototype.getArea = function () {
        var result = (this.width * this.height);
        if (result % 1 === 0) {
            return result;
        }
        return Number((result.toString()
            .slice(0, result.toString().indexOf('.') + 3)));
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
exports.getInfo = getInfo;
