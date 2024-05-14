export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  color: 'red' | 'green' | 'blue';

  a: number;

  b: number;

  c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid Data');
    }

    if (!(a < b + c && a + c && c < a + b)) {
      throw new Error('This is not a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Invalid Data');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * this.radius * this.radius;

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number;

  height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Invalid Data');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return Math.floor(rectangleArea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea}`;
}
