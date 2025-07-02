export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: 'red' | 'green' | 'blue';

  a: number;

  b: number;

  c: number;

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  constructor(color: Figure['color'], a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    const greateZero = this.a <= 0 || this.b <= 0 || this.c <= 0;
    const longestSide = Math.max(this.a, this.b, this.c);
    const sumOfOther = this.a + this.b + this.c - longestSide;

    if (greateZero || longestSide >= sumOfOther) {
      throw new Error('your error message');
    }
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  getArea(): number {
    const area = this.radius * this.radius;
    const result = Math.PI * area;
    const rounded = Math.trunc(result * 100) / 100;

    return rounded;
  }

  constructor(color: Figure['color'], radius: number) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('your error message');
    }
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number;

  height: number;

  getArea(): number {
    const result = this.width * this.height;

    return result;
  }

  constructor(color: Figure['color'], width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width < 0 || height < 0) {
      throw new Error('your error message');
    }
  }
}

export function getInfo(figure: Figure): string {
  if (figure.shape === 'triangle') {
    return `A ${figure.color} ${figure.shape} - ${Math.round(figure.getArea() * 100) / 100}`;
  }

  if (figure.shape === 'circle') {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  }

  if (figure.shape === 'rectangle') {
    return `A ${figure.color} ${figure.shape} - ${Math.round(figure.getArea() * 100) / 100}`;
  }

  return typeof figure;
}
