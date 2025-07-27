"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    // propriedades e construtor...
    getArea() {
        const area = Math.PI * this.radius ** 2;
        return parseFloat(area.toFixed(2));
    }
}
exports.Circle = Circle;
