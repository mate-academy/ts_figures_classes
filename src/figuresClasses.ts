export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  color: Color;

  sides: number[];

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Lengths of sides should be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sides cannot form a triangle');
    }

    this.color = color;
    this.sides = [a, b, c];
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;
    const area = (Math.sqrt(s * (s - a) * (s - b) * (s - c)));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius should be greater than 0');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height should be greater than 0');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}
