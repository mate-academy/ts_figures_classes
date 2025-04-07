export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  a: number;

  b: number;

  c: number;

  color: 'red' | 'green' | 'blue';

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    const maxSide = Math.max(a, b, c);
    const sumOtherSides = a + b + c - maxSide;

    if (maxSide >= sumOtherSides) {
      throw new Error('your error message');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return parseFloat(result.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error('your error message');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: 'red' | 'green' | 'blue';

  shape: 'rectangle' = 'rectangle';

  length: number;

  width: number;

  constructor(color: 'red' | 'green' | 'blue', length: number, width: number) {
    if (width < 0 || length < 0) {
      throw new Error('your error message');
    }

    this.color = color;
    this.length = length;
    this.width = width;
  }

  getArea(): number {
    const result = this.length * this.width;

    return parseFloat(result.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
