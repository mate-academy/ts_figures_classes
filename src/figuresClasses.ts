type Shape = 'triangle' | 'rectangle' | 'circle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle {
  public shape: Shape = 'triangle';

  a: number;

  b:number;

  c: number;

  constructor(public color: Color, a: number, b:number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;

    const notAllSidesArePositive = a <= 0 || b <= 0 || c <= 0;

    const cannotFormTrianlge = a + b <= c || a + c <= b || b + c <= a;

    if (notAllSidesArePositive) {
      throw new Error('A side cannot be zero or negative');
    }

    if (cannotFormTrianlge) {
      throw new Error(`sides ${this.a} ${this.b} ${this.c} `
      + 'can\'t form a triangle');
    }
  }

  getArea = ():number => {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const s = semiPerimeter;

    return +(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)))
      .toFixed(2);
  };
}

export class Circle {
  shape: Shape = 'circle';

  radius: number;

  constructor(public color: Color, radius: number) {
    this.radius = radius;

    if (radius < 0) {
      throw new Error('Circle cannot have a negative radius');
    }
  }

  getArea = (): number => Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
}

export class Rectangle {
  shape: Shape = 'rectangle';

  width: number;

  height: number;

  constructor(public color: Color, width: number, height: number) {
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('A side cannot be zero or negative');
    }
  }

  getArea = (): number => this.width * this.height;
}

export function getInfo({ color, shape, getArea }: Figure): string {
  return `A ${color} ${shape} - ${getArea()}`;
}
