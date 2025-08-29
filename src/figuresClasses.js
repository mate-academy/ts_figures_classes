"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = exports.Triangle = void 0;
exports.getInfo = getInfo;
var ALLOWED_COLORS = new Set(['red', 'green', 'blue']);
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = 'triangle';
        if (!ALLOWED_COLORS.has(color)) {
            throw new Error("Invalid color: \"".concat(color, "\". Allowed values are \"red\", \"green\", \"blue\"."));
        }
        this.color = color;
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('Each side of the triangle must be greater than 0');
        }
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Triangle inequality violated: the sum of any two sides must be greater than the third. Received sides: a=".concat(a, ", b=").concat(b, ", c=").concat(c));
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
        this.radius = radius;
        this.shape = 'circle';
        if (!ALLOWED_COLORS.has(color)) {
            throw new Error("Invalid color: \"".concat(color, "\". Allowed values are \"red\", \"green\", \"blue\"."));
        }
        this.color = color;
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
    function Rectangle(color, width, height) {
        this.width = width;
        this.height = height;
        this.shape = 'rectangle';
        if (!ALLOWED_COLORS.has(color)) {
            throw new Error("Invalid color: \"".concat(color, "\". Allowed values are \"red\", \"green\", \"blue\"."));
        }
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
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
