// import { numberLiteralTypeAnnotation } from "@babel/types";

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be more than zero');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('sides 1, 2 and 3 can not form a triangle');
    }
  }

  getArea(): number {
    const [a, b, c]: number[] = [this.a, this.b, this.c];
    const p: number = (a + b + c) / c;
    const area: number = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.round(100 * area) / 100;
  }
}

export class Circle {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be more than zero');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return Math.round(100 * area) / 100;
  }
}

export class Rectangle {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be more than zero');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.round(100 * area) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  const { color, shape, getArea } = figure;

  return `A ${color} ${shape} - ${getArea}`;
}
