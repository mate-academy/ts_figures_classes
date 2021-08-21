"use strict";
exports.__esModule = true;
exports.getInfo = exports.Rectangle = exports.Circle = exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(color, x, y, z) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.z = z;
        this.shape = 'triangle';
        if (x <= 0 || y <= 0 || z <= 0) {
            throw new Error('Side length has to be grater than 0');
        }
        var longestSide = Math.max(this.x, this.y, this.z);
        var sumOfSides = this.x + this.y + this.z;
        if (sumOfSides - longestSide === longestSide) {
            throw new Error('These three sides cannot make a triangle');
        }
    }
    Triangle.prototype.getArea = function () {
        var semiPerimeter = (this.x + this.y + this.z) / 2;
        var area = Math.sqrt(semiPerimeter
            * (semiPerimeter - this.x)
            * (semiPerimeter - this.y)
            * (semiPerimeter - this.z));
        return Number(area.toFixed(2));
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, r) {
        this.color = color;
        this.r = r;
        this.shape = 'circle';
        if (r <= 0) {
            throw new Error('Radius has to be grater than 0');
        }
    }
    Circle.prototype.getArea = function () {
        return Number((Math.PI * Math.pow(this.r, 2)).toFixed(2));
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, h, w) {
        this.color = color;
        this.h = h;
        this.w = w;
        this.shape = 'rectangle';
        if (h <= 0 || w <= 0) {
            throw new Error('Side length has to be grater than 0');
        }
    }
    Rectangle.prototype.getArea = function () {
        return Number((this.h * this.w).toFixed(2));
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(shape) {
    return "A " + shape.color + " " + shape.shape + " - " + shape.getArea();
}
exports.getInfo = getInfo;
