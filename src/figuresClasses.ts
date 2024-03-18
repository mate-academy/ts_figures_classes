'use strict';

type Shapes = 'triangle' | 'circle' | 'rectangle';

type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shapes = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid side lengths');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  constructor(
    public color: Colors,
    public radius: number,
    public shape: Shapes = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Colors,
    public width: number,
    public height: number,
    public shape: Shapes = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const formattedArea = area % 1 === 0 ? area.toFixed(0) : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}
