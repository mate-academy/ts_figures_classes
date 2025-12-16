export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
  width?: number;
  height?: number;
  radius?: number;
  a?: number;
  b?: number;
  c?: number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle' = 'triangle',
  ) {
    const maxNum = Math.max(a, b, c);
    const minNum = Math.min(a, b, c);
    const sum = a + b + c - maxNum;

    if (maxNum >= sum) {
      throw new Error(
        `the length of the longest side must not exceed the sum of the lengths of the other two`,
      );
    }

    if (minNum <= 0) {
      throw new Error(
        `One or more sides of the triangle have zero or negative length.
        This value is not allowed.
        The value must be a positive number.`,
      );
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return Math.trunc(s * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public shape: 'circle' = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error(`The radius of the circuit has zero or negative length.
        This value is not allowed.
        The value must be a positive number.`);
    }
  }

  getArea(): number {
    return Math.trunc(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
    public shape: 'rectangle' = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        `The width / height has zero or negative value. This value is not allowed.
        The value must be a positive number.`,
      );
    }
  }

  getArea(): number {
    return Math.trunc(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color, getArea } = figure;

  return `A ${color} ${shape} - ${getArea.call(figure)}`;
}
