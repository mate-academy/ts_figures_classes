"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = exports.Triangle = void 0;
exports.getInfo = getInfo;
class Triangle {
    constructor(color, sides) {
        this.color = color;
        this.shape = 'triangle';
        this.sides = sides;
        if (sides.length !== 3 || sides.some(s => s <= 0)) {
            throw new Error('Os lados do triângulo devem ser três números positivos');
        }
        const [a, b, c] = sides;
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Invalid triangle sides');
        }
    }
    getArea() {
        const [a, b, c] = this.sides;
        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return parseFloat(area.toFixed(2));
    }
}
exports.Triangle = Triangle;
class Circle {
    constructor(color, radius) {
        if (radius <= 0) {
            throw new Error('Radius must be greater than 0');
        }
        this.color = color;
        this.shape = 'circle';
        this.radius = radius;
    }
    getArea() {
        const area = Math.PI * this.radius ** 2;
        return parseFloat(area.toFixed(2));
    }
}
exports.Circle = Circle;
class Rectangle {
    constructor(color, width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error('Width and height must be greater than 0');
        }
        this.color = color;
        this.shape = 'rectangle';
        this.width = width;
        this.height = height;
    }
    getArea() {
        return parseFloat((this.width * this.height).toFixed(2));
    }
}
exports.Rectangle = Rectangle;
function getInfo(figure) {
    const area = figure.getArea();
    // Se área for inteiro, mostrar sem casas decimais, se não, com 2 casas
    const areaStr = area % 1 === 0 ? area.toString() : area.toFixed(2);
    return `A ${figure.color} ${figure.shape} - ${areaStr}`;
}
