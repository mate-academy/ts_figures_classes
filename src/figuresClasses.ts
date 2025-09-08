export type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  public color: Colors;

  public a: number;

  public b: number;

  public c: number;

  constructor(color: Colors, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than 0.');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        'The longest side must be smaller than the sum of the other two.',
      );
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  public color: Colors;

  public radius: number;

  constructor(color: Colors, radius: number) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0.');
    }

    this.color = color;
    this.radius = radius;
  }

  public getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  public color: Colors;

  public width: number;

  public height: number;

  constructor(color: Colors, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle width and height must be greater than 0.');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  public getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
