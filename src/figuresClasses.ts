/* eslint-disable max-len */
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle {
  shape: Shape = Shape.Triangle;

  color: string;

  sides: [number, number, number];

  constructor(color: string, side1: number, side2: number, side3: number) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0 || this.isNotTriangle(side1, side2, side3)) {
      throw new Error('Invalid triangle');
    }
    this.color = color;
    this.sides = [side1, side2, side3];
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;

    return Number((Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2));
  }

  private isNotTriangle = (side1: number, side2: number, side3: number): boolean => {
    return side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1;
  };
}

export class Circle {
  shape: Shape = Shape.Circle;

  constructor(public color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = Shape.Rectangle;

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
