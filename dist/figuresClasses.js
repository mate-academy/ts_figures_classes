"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = exports.Triangle = void 0;
exports.getInfo = getInfo;
class Shape {
    constructor(shape, color) {
        this.shape = shape;
        this.color = color;
    }
}
class Triangle extends Shape {
    constructor(color, a, b, c) {
        super('triangle', color);
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('All sides must be positive numbers');
        }
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Invalid triangle sides');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getArea() {
        const s = (this.a + this.b + this.c) / 2;
        const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return Math.round(area * 100) / 100;
    }
}
exports.Triangle = Triangle;
class Circle extends Shape {
    constructor(color, radius) {
        super('circle', color);
        if (radius <= 0) {
            throw new Error('Radius must be a positive number');
        }
        this.radius = radius;
    }
    getArea() {
        const area = Math.PI * this.radius * this.radius;
        // Truncar para 2 casas decimais sem arredondar
        return Math.trunc(area * 100) / 100;
    }
}
exports.Circle = Circle;
class Rectangle extends Shape {
    constructor(color, width, height) {
        super('rectangle', color);
        if (width <= 0 || height <= 0) {
            throw new Error('Width and height must be positive numbers');
        }
        this.width = width;
        this.height = height;
    }
    getArea() {
        const area = this.width * this.height;
        return Math.round(area * 100) / 100;
    }
}
exports.Rectangle = Rectangle;
function getInfo(shape) {
    const area = shape.getArea();
    const areaStr = area % 1 === 0 ? area.toString() : area.toFixed(2);
    return `A ${shape.color} ${shape.shape} - ${areaStr}`;
}
