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
        if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
            throw new Error('value of the side is less than 0');
        }
        var sidesSorted = [this.a, this.b, this.c].sort(function (num1, num2) { return num1 - num2; });
        if (sidesSorted[2] >= sidesSorted[0] + sidesSorted[1]) {
            throw new Error('the longest side of a triangle is >= than a sum of two others');
        }
    }
    Triangle.prototype.getArea = function () {
        var halfPerimeter = (this.a + this.b + this.c) / 2;
        var area = Math.pow((halfPerimeter *
            (halfPerimeter - this.a) *
            (halfPerimeter - this.b) *
            (halfPerimeter - this.c)), 0.5);
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
        if (this.radius <= 0) {
            throw new Error('value of the side is less than 0');
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
    function Rectangle(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
        this.shape = 'rectangle';
        if (this.width <= 0 || this.height <= 0) {
            throw new Error('value of the side is less than 0');
        }
    }
    Rectangle.prototype.getArea = function () {
        return Math.floor(this.width * this.height * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    var areaValue = figure.getArea();
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(areaValue);
}
