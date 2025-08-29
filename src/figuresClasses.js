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
    }
    Triangle.prototype.getArea = function () {
        if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
            throw new Error('Each side of triangle should be > 0');
        }
        if ((this.a + this.b) <= this.c || (this.a + this.c) <= this.b || (this.b + this.c) <= this.a) {
            throw new Error('It\'s not triangle');
        }
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
    }
    Circle.prototype.getArea = function () {
        if (this.radius <= 0) {
            throw new Error('Radius should be > 0');
        }
        var circleRadius = Math.PI * Math.pow(this.radius, 2);
        return Math.floor(circleRadius * 100) / 100;
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
    }
    Rectangle.prototype.getArea = function () {
        if (this.width <= 0 || this.height <= 0) {
            throw new Error('Width and height must be greater than 0');
        }
        return Math.floor((this.width * this.height) * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return 'A ' + figure.color + ' ' + figure.shape + ' - ' + figure.getArea();
}
var greenCircle = new Circle('green', 1);
var a = getInfo(greenCircle);
console.log(a);
