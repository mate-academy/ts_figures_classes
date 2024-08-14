"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = exports.Triangle = void 0;
exports.getInfo = getInfo;
var Shape;
(function (Shape) {
    Shape["Triangle"] = "triangle";
    Shape["Circle"] = "circle";
    Shape["Rectangle"] = "rectangle";
})(Shape || (Shape = {}));
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = Shape.Triangle;
        var sorted = [a, b, c].sort(function (x, y) { return x - y; });
        if (a <= 0 || b <= 0 || c <= 0) {
            throw Error('Side length is 0 or less');
        }
        if (sorted[0] + sorted[1] <= sorted[2]) {
            throw Error('Sides do not form a valid triangle');
        }
    }
    Triangle.prototype.getArea = function () {
        var p = (this.a + this.b + this.c) / 2;
        return (Math.floor(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100) / 100);
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
        this.shape = Shape.Circle;
        if (this.radius <= 0) {
            throw Error('Radius must be greater than 0');
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
        this.color = color;
        this.width = width;
        this.height = height;
        this.shape = Shape.Rectangle;
        if (this.width <= 0 || this.height <= 0) {
            throw Error('Width and height must be greater than 0');
        }
    }
    Rectangle.prototype.getArea = function () {
        return Math.floor(this.width * this.height * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    var color = figure.color;
    var shape = figure.shape;
    var area = figure.getArea();
    return "A ".concat(color, " ").concat(shape, " - ").concat(area);
}
