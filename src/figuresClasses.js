"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = exports.Rectangle = exports.Circle = exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        if (a < 0 || b < 0 || c < 0) {
            throw new Error('Number is not correct');
        }
        var per = (a + b + c) / 3;
        var sqrt = Math.sqrt(per * (per - a) * (per - b) * (per - c));
    }
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
        if (radius < 0) {
            throw new Error('Number is not correct');
        }
        var sr = 3.14 * (Math.pow(radius, 2));
    }
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
        if (width < 0 || height < 0) {
            throw new Error('Number is not correct');
        }
    }
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
}
exports.getInfo = getInfo;
