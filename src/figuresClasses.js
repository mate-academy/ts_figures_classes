"use strict";
/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = exports.Rectangle = exports.Circle = void 0;
exports.getInfo = getInfo;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.radius = radius;
        this.shape = 'circle';
        this.color = color;
        if (radius <= 0) {
            throw new Error('Radius must be greater than 0');
        }
    }
    Circle.prototype.getArea = function () {
        return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, width, height) {
        this.width = width;
        this.height = height;
        this.shape = 'rectangle';
        this.color = color;
        if (width <= 0 || height <= 0) {
            throw new Error('Width and height must be greater than 0');
        }
    }
    Rectangle.prototype.getArea = function () {
        return Math.floor(this.width * this.height * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = 'triangle';
        this.color = color;
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('All sides must be greater than 0');
        }
        var maxSide = Math.max(a, b, c);
        var sum = a + b + c;
        if (maxSide >= sum - maxSide) {
            throw new Error(
            // eslint-disable-next-line max-len
            'Invalid triangle: one side is greater than or equal to the sum of others');
        }
    }
    Triangle.prototype.getArea = function () {
        // semiperimeter = s
        var s = (this.a + this.b + this.c) / 2;
        var area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return Math.floor(area * 100) / 100;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
// Exemplos de uso:
var redRectangle = new Rectangle('red', 3, 5);
console.log(redRectangle.getArea()); // "A red rectangle - 15"
console.log(getInfo(redRectangle)); // object
var greenCircle = new Circle('green', 1);
console.log(greenCircle.getArea()); // "A green circle - 3.14"
console.log(getInfo(greenCircle)); // object
var blueTriangle = new Triangle('blue', 4, 13, 15);
console.log(blueTriangle.getArea()); // "A blue triangle - 12.49"
console.log(getInfo(blueTriangle)); // object
// Isso vai dar um erro porque o maior lado (3) é >= a soma dos outros dois
// const invalidTriangle = new Triangle('red', 1, 2, 3);
// Error: Invalid triangle
