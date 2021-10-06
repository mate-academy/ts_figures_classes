"use strict";
exports.__esModule = true;
exports.getInfo = exports.Rectangle = exports.Circle = exports.Triangle = void 0;
var Shape;
(function (Shape) {
    Shape["Triangle"] = "triangle";
    Shape["Circle"] = "circle";
    Shape["Rectangle"] = "rectangle";
})(Shape || (Shape = {}));
var Triangle = /** @class */ (function () {
    function Triangle(color, sideA, sideB, sideC) {
        this.color = color;
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.shape = Shape.Triangle;
        if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
            throw new Error();
        }
        if (sideA >= sideB + sideC
            || sideB >= sideA + sideC
            || sideC >= sideA + sideB) {
            throw new Error("sides " + sideA + ", " + sideB + " and " + sideC + " can't form a triangle");
        }
    }
    Triangle.prototype.getArea = function () {
        var p = (this.sideA + this.sideB + this.sideC) / 2;
        return +(Math.pow((p
            * (p - this.sideA)
            * (p - this.sideB)
            * (p - this.sideC)), 0.5)).toFixed(2);
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
        this.shape = Shape.Circle;
        if (radius < 0) {
            throw new Error();
        }
    }
    Circle.prototype.getArea = function () {
        return +(3.14 * Math.pow(this.radius, 2)).toFixed(2);
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, sideA, sideB) {
        this.color = color;
        this.sideA = sideA;
        this.sideB = sideB;
        this.shape = Shape.Rectangle;
        if (sideA <= 0 || sideB <= 0) {
            throw new Error();
        }
    }
    Rectangle.prototype.getArea = function () {
        return +(this.sideA * this.sideB).toFixed(2);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A " + figure.color + " " + figure.shape + " - " + figure.getArea();
}
exports.getInfo = getInfo;
