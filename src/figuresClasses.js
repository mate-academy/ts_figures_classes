"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = exports.Rectangle = exports.Circle = exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(color, a, b, c) {
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error("All sides values needs be greater than zero.");
        }
        if (a >= b + c || b >= c + a || c >= a + b) {
            throw new Error("The longest side is not greater than the sum of the other sides.");
        }
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = "triangle";
        this.color = color;
    }
    Triangle.prototype.getArea = function () {
        var s = (this.a + this.b + this.c) / 2;
        var area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return Number(area.toFixed(2));
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.radius = radius;
        if (radius <= 0) {
            throw new Error("Radius value need be greater than zero.");
        }
        this.shape = "circle";
        this.color = color;
    }
    Circle.prototype.getArea = function () {
        var area = Math.PI * (Math.pow(this.radius, 2));
        return Number(area.toFixed(2));
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(color, width, heigth) {
        this.width = width;
        this.heigth = heigth;
        if (width <= 0 || heigth <= 0) {
            throw new Error("The width and heigth values needs be greater than zero.");
        }
        this.shape = "rectangle";
        this.color = color;
    }
    Rectangle.prototype.getArea = function () {
        var area = this.width * this.heigth;
        return Number(area.toFixed(2));
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return "A ".concat(figure.color, " ").concat(figure.shape, " - ").concat(figure.getArea());
}
exports.getInfo = getInfo;
var redRectangle = new Rectangle('red', 3, 5);
console.log(getInfo(redRectangle));
//=== 'A red rectangle - 15';
var greenCircle = new Circle('green', 1);
console.log(getInfo(greenCircle));
//=== 'A green circle - 3.14';
