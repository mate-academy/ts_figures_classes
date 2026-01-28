'use strict';

export type Shape = 'triangle' | 'circle' | 'rectangle';

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  private a: number;

  private b: number;

  private c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }

    const maxSide: number = Math.max(a, b, c);
    const sumOtherSides: number = a + b + c - maxSide;

    if (maxSide >= sumOtherSides) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  private radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  private width: number;

  private height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
