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
        this.area = this.getArea();
        if (color === undefined ||
            a === undefined ||
            b === undefined ||
            c === undefined) {
            throw new Error('All values must be entered');
        }
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('All sides values must be > 0');
        }
        var sides = [a, b, c];
        sides.splice(sides.indexOf(Math.max(a, b, c), 1));
        if (Math.max(a, b, c) >= sides[0] + sides[1]) {
            throw new Error("sides ".concat(a, ", ").concat(b, " and ").concat(c, " can't form a triangle"));
        }
    }
    Triangle.prototype.getArea = function () {
        var _a = this, a = _a.a, b = _a.b, c = _a.c;
        var s = (a + b + c) / 2;
        return +(Math.floor(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100);
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
        this.shape = 'circle';
        this.area = this.getArea();
        if (color === undefined || radius === undefined) {
            throw new Error('All values must be entered');
        }
        if (radius <= 0) {
            throw new Error('Value of radius must be > 0');
        }
    }
    Circle.prototype.getArea = function () {
        var radius = this.radius;
        return +(Math.floor(3.1415926535 * Math.pow(radius, 2) * 100) / 100);
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
        this.area = this.getArea();
        if (color === undefined || width === undefined || height === undefined) {
            throw new Error('All values must be entered');
        }
        if (width <= 0 || height <= 0) {
            throw new Error('All sides values must be > 0');
        }
    }
    Rectangle.prototype.getArea = function () {
        var _a = this, width = _a.width, height = _a.height;
        return +(Math.floor(width * height * 100) / 100);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    var shape = figure.shape, color = figure.color, area = figure.area;
    return "A ".concat(color, " ").concat(shape, " - ").concat(area);
}
