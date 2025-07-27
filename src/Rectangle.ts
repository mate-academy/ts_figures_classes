// src/Rectangle.ts
import { Figure } from './figuresClasses';

export class Rectangle implements Figure {
  color: string;
  shape: string;
  width: number;
  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
    this.color = color;
    this.shape = 'rectangle';
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;
    return Number(area.toFixed(2));
  }
}
