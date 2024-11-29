type ColorType = 'red' | 'green' | 'blue';
type ShapeType = 'triangle' | 'circle' | 'rectangle';

const PI = Math.PI;

export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea(): number;
}

export class Triangle implements Figure {
  color: ColorType;

  shape: ShapeType = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(color: ColorType, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than zero.');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        // eslint-disable-next-line max-len
        'The longest side of a triangle must be less than the sum of the other two.',
      );
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  color: ColorType;

  shape: ShapeType = 'circle';

  a: number;

  constructor(color: ColorType, a: number) {
    if (a <= 0) {
      throw new Error('Radius should be greater than 0.');
    }
    this.color = color;
    this.a = a;
  }

  getArea(): number {
    const area = PI * this.a * this.a;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: ColorType;

  shape: ShapeType = 'rectangle';

  a: number;

  b: number;

  constructor(color: ColorType, a: number, b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error(`Sides of ${this.shape} should be positive`);
    }
    this.color = color;
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    const { a, b } = this;

    return a * b;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${area}`;
}
