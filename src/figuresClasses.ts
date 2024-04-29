export enum Color {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
}

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  color: Color;

  shape: Shape = Shape.Triangle;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('you must set valid sides');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('you must set valid sides');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  color: Color;

  shape: Shape = Shape.Circle;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('you must set valid radius');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return parseFloat(area.toFixed(2));
  }
}

export class Rectangle implements Figure {
  color: Color;

  shape: Shape = Shape.Rectangle;

  width: number;

  heigth: number;

  constructor(color: Color, width: number, heigth: number) {
    if (width <= 0 || heigth <= 0) {
      throw new Error('you must set valid sides');
    }
    this.color = color;
    this.width = width;
    this.heigth = heigth;
  }

  getArea(): number {
    return this.width * this.heigth;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
