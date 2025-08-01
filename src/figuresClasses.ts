type Shape = 'triangle' | 'circle' | 'rectangle';

export type { Shape as FigureType };

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color = 'red';

  a: number = 0;

  b: number = 0;

  c: number = 0;

  constructor(a: number, b: number, c: number, color: Color = 'red') {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be positive');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color = 'green';

  radius: number = 0;

  constructor(radius: number, color: Color = 'green') {
    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color = 'blue';

  width: number = 0;

  height: number = 0;

  constructor(width: number, height: number, color: Color = 'blue') {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea().toFixed(2)}`;
}
