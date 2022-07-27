type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea: () => number;
}

const semiPerimeter = (a: number, b: number, c: number): number => {
  return (a + b + c) / 2;
};

export class Triangle {
  shape: Shape = 'triangle';

  public color: Color;

  public a: number;

  public b: number;

  public c: number;

  constructor(color: string, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || this.a + this.b <= this.c
      || this.c + this.a <= this.b
      || this.b + this.c <= this.a) {
      throw new Error('The side length was entered incorrectly');
    }
  }

  getArea(): number {
    const p = semiPerimeter(this.a, this.b, this.c);

    // eslint-disable-next-line max-len
    return Math.round(100 * Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)))) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  public color: Color;

  public radius: number;

  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('The side length was entered incorrectly');
    }
  }

  getArea(): number {
    return Math.trunc(100 * (Math.PI * this.radius * this.radius)) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  public color: Color;

  public width: number;

  public height: number;

  constructor(color: string, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('The side length was entered incorrectly');
    }
  }

  getArea(): number {
    return Math.round(100 * (this.width * this.height)) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
