function roundToTwoPlaces(number: number): number {
  return Math.floor(number * 100) / 100;
}

type Shape = 'triangle' | 'rectangle' | 'circle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle {
  shape: Shape = 'triangle';

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
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundToTwoPlaces(area);
  };
}

export class Circle {
  shape: Shape = 'circle';

  radius: number;

  constructor(public color: Color, radius: number) {
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Circle cannot have a radius of zero or negative');
    }
  }

  getArea = (): number => roundToTwoPlaces(Math.PI * this.radius ** 2);
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

  getArea = (): number => roundToTwoPlaces(this.width * this.height);
}

export const getInfo = (
  { color, shape, getArea }: Figure,
): string => `A ${color} ${shape} - ${getArea()}`;
