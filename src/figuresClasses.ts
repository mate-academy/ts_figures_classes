// import { error } from 'console';

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: `red` | `green` | `blue`;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  color: 'red' | 'green' | 'blue';

  private a: number;

  private b: number;

  private c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error(`Sides 1, 2 and 3 can't form a triangle.`);
    }
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const semiP = 0.5 * (this.a + this.b + this.c);
    const square = Math.sqrt(
      semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
    );

    return Number(square.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle';

  color: 'red' | 'green' | 'blue';

  private radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error(`Radius must have a positive number`);
    }
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const result = Number(Math.PI * this.radius ** 2);

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: 'red' | 'green' | 'blue';

  private width: number;

  private height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be greater than zero.');
    }
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
