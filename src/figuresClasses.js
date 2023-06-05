"use strict";
exports.__esModule = true;
exports.getInfo = exports.Rectangle = exports.Circle = exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(color) {
        var sides = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sides[_i - 1] = arguments[_i];
        }
        this.color = color;
        this.shape = 'triangle';
        this.sides = [];
        var longestSide = Math.max.apply(Math, sides);
        var sumOfAllSides = sides.reduce(function (perimiter, side) { return perimiter + side; });
        var sumOfSmallSides = sumOfAllSides - longestSide;
        if (longestSide >= sumOfSmallSides
            || sides[0] <= 0 || sides[1] <= 0 || sides[2] <= 0) {
            throw new Error('Triangle with given sides isn\'t exist');
        }
        this.color = color;
        this.sides = sides;
    }
    Triangle.prototype.getArea = function () {
        var sideA = this.sides[0];
        var sideB = this.sides[1];
        var sideC = this.sides[2];
        var semiPerimeter = (sideA + sideB + sideC) / 2;
        var area = Math.sqrt(semiPerimeter
            * (semiPerimeter - sideA)
            * (semiPerimeter - sideB)
            * (semiPerimeter - sideC));
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
        if (radius <= 0) {
            throw new Error('Circle with given radius isn\'t exist');
        }
        this.color = color;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        var radius = this.radius;
        var area = Math.PI * (Math.pow(radius, 2));
        return Math.floor(area * 100) / 100;
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color) {
        var sides = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sides[_i - 1] = arguments[_i];
        }
        this.color = color;
        this.shape = 'rectangle';
        this.sides = [];
        if (sides[0] <= 0 || sides[1] <= 0) {
            throw new Error('Rectangle with given sides isn\'t exist');
        }
        this.color = color;
        this.sides = sides;
    }
    Rectangle.prototype.getArea = function () {
        var sideA = this.sides[0];
        var sideB = this.sides[1];
        var area = sideA * sideB;
        return Math.floor(area * 100) / 100;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
exports.getInfo = getInfo;
