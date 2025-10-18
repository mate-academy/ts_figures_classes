"use strict";
//
exports.__esModule = true;
exports.getInfo = exports.Rectangle = exports.Circle = exports.Triangle = void 0;
var mustBePositive = function (name, value) {
    if (value <= 0) {
        throw new Error(name + " must be > 0");
    }
};
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = 'triangle';
        mustBePositive('a', a);
        mustBePositive('b', b);
        mustBePositive('c', c);
        var maxSide = Math.max(a, b, c);
        var sum = a + b + c;
        if (maxSide >= sum - maxSide) {
            throw new Error("sides " + a + ", " + b + " and " + c + " can't form a triangle");
        }
    }
    Triangle.prototype.getArea = function () {
        var s = (this.a + this.b + this.c) / 2;
        var area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
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
        mustBePositive('radius', radius);
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
        this.color = color;
        this.width = width;
        this.height = height;
        this.shape = 'rectangle';
        mustBePositive('width', width);
        mustBePositive('height', height);
    }
    Rectangle.prototype.getArea = function () {
        var area = this.width * this.height;
        return Math.floor(area * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A " + figure.color + " " + figure.shape + " - " + figure.getArea();
}
exports.getInfo = getInfo;
