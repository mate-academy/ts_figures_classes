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

  color: Color;

  sides: [number, number, number];

  constructor(color: Color | string, a: number, b: number, c: number) {
    if (typeof color === 'string') {
      if (color !== Color.Red && color !== Color.Blue && color !== Color.Green) {
        throw new Error('Invalid color');
      }
      this.color = color as Color;
    } else {
      this.color = color as Color;
    }

    if (a <= 0 || b <= 0 || c <= 0 || this.isNotTriangle(a, b, c)) {
      throw new Error('Invalid triangle');
    }

    this.sides = [a, b, c];
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;

    return Number(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));
  }

  private isNotTriangle = (side1: number, side2: number, side3: number): boolean => {
    return side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1;
  };
}

export class Circle {
  shape: Shape = Shape.Circle;

  color: Color;

  radius: number;

  constructor(color: Color | string, radius: number) {
    if (typeof color === 'string') {
      if (color !== Color.Red && color !== Color.Blue && color !== Color.Green) {
        throw new Error('Invalid color');
      }
      this.color = color as Color;
    } else {
      this.color = color as Color;
    }

    if (radius <= 0) {
      throw new Error('Invalid circle');
    }

    this.radius = radius;
  }

  getArea(): number {
    const area = Math.floor(Math.PI * this.radius * this.radius * 100) / 100;

    return area;
  }
}

export class Rectangle {
  shape: Shape = Shape.Rectangle;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color | string, width: number, height: number) {
    if (typeof color === 'string') {
      if (color !== Color.Red && color !== Color.Blue && color !== Color.Green) {
        Error('Invalid color');
      }
      this.color = color as Color;
    } else {
      this.color = color as Color;
    }

    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle');
    }

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
