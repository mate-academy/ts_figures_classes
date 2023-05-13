/* eslint-disable no-restricted-properties */
/* eslint-disable max-len */
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea() : number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || b <= 0) {
      throw new Error('Sides of a triangle can\'t be a negative number or zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sum of any two sides of a triangle should be greater than the third side');
    }
  }

  public getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can\'t be a negative number or zero');
    }
  }

  public getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Can\'t be a negative number');
    }
  }

  public getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure : Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
