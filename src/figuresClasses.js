"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = exports.Rectangle = exports.Circle = exports.Triangle = void 0;
function getRoundNumber(area) {
    return Math.floor(area * 100) / 100;
}
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = 'triangle';
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('Length of sides should be greater than 0');
        }
        if (a >= b + c || b >= c + a || c >= a + b) {
            throw new Error('Invalid side lengths, triangle cannot be formed');
        }
    }
    Triangle.prototype.getArea = function () {
        var semiperimeter = (this.a + this.b + this.c) / 2;
        var area = Math.sqrt(semiperimeter
            * (semiperimeter - this.a)
            * (semiperimeter - this.b)
            * (semiperimeter - this.c));
        return getRoundNumber(area);
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
            throw new Error('Length should be greater than 0');
        }
    }
    Circle.prototype.getArea = function () {
        var area = (Math.pow(this.radius, 2)) * Math.PI;
        return getRoundNumber(area);
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
            throw new Error('Length of sides should be greater than 0');
        }
    }
    Rectangle.prototype.getArea = function () {
        var area = this.width * this.height;
        return getRoundNumber(area);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
exports.getInfo = getInfo;
