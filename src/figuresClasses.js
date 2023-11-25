"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = exports.Rectangle = exports.Circle = exports.Triangle = exports.Shape = void 0;
var Shape;
(function (Shape) {
    Shape["Triangle"] = "triangle";
    Shape["Circle"] = "circle";
    Shape["Rectangle"] = "rectangle";
})(Shape || (exports.Shape = Shape = {}));
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = Shape.Triangle;
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('Figure dimension cannot be less then 0.');
        }
        var longestSide = Math.max(a, b, c);
        var twoShortestSides = a + b + c - longestSide;
        if (longestSide >= twoShortestSides) {
            /* eslint-disable */
            throw new Error('A triangle cannot have a side length that is greater than the sum of the other two sides.');
            // Sorry for the eslint disable but I couldn't figure out how to make this error message work. Eslint does not allow multiline strings and concating strings in errors for some reason.
            /* eslint-enable */
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
        this.shape = Shape.Circle;
        if (radius <= 0) {
            throw new Error('Figure dimension cannot be less then 0');
        }
    }
    Circle.prototype.getArea = function () {
        var area = Math.PI * (Math.pow(this.radius, 2));
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
        this.shape = Shape.Rectangle;
        if (width <= 0 || height <= 0) {
            throw new Error('Figure dimension cannot be less then 0');
        }
    }
    Rectangle.prototype.getArea = function () {
        var area = this.width * this.height;
        return Math.floor(area * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
exports.getInfo = getInfo;
