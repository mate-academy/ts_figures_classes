"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
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
        const area = this.width * this.height;
        return Number(area.toFixed(2));
    }
}
exports.Rectangle = Rectangle;
