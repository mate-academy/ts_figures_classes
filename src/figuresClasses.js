"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = exports.Triangle = void 0;
exports.getInfo = getInfo;
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c, shape) {
        if (shape === void 0) { shape = 'triangle'; }
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = shape;
        this.validationTriangle();
    }
    Triangle.prototype.validationTriangle = function () {
        var _a = [this.a, this.b, this.c].sort(function (x, y) { return x - y; }), a = _a[0], b = _a[1], c = _a[2];
        if (a + b <= c) {
            throw new Error("throws an error: sides 1, 2 and 3 can't form a triangle");
        }
    };
    Triangle.prototype.getArea = function () {
        var s = +((this.a + this.b + this.c) / 2).toFixed(2);
        var sum = +Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2);
        return sum;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, a, shape) {
        if (shape === void 0) { shape = 'circle'; }
        this.color = color;
        this.a = a;
        this.shape = shape;
        this.validationCircle();
    }
    Circle.prototype.validationCircle = function () {
        if (this.a <= 0) {
            throw Error("throws an error");
        }
    };
    Circle.prototype.getArea = function () {
        var sum = Math.PI * Math.pow(this.a, 2);
        return Math.trunc(sum * 100) / 100;
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, a, b, shape) {
        if (shape === void 0) { shape = 'rectangle'; }
        this.color = color;
        this.a = a;
        this.b = b;
        this.shape = shape;
        this.validationRectangle();
    }
    Rectangle.prototype.validationRectangle = function () {
        if (this.a <= 0 || this.b <= 0) {
            throw Error("throws an error");
        }
    };
    Rectangle.prototype.getArea = function () {
        var sum = +(this.a * this.b).toFixed(2);
        return sum;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    var area = figure instanceof Rectangle
        ? figure.getArea()
        : figure instanceof Circle
            ? figure.getArea()
            : figure instanceof Triangle
                ? figure.getArea()
                : 0;
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(area);
}
var trin = new Circle('blue', 3);
// eslint-disable-next-line no-console
console.log(getInfo(trin));
