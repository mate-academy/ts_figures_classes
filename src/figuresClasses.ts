function roundTo(n: number, decimals: number): number {
  const factor = Math.pow(10, decimals);

  return Math.floor(n * factor) / factor;
}

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
      throw new Error('Sides must be positive numbers');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('This cannot be a valid triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    return roundTo(Math.PI * this.radius ** 2, 2);
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number;

  height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    this.shape = 'rectangle';
    this.width = width;
    this.height = height;
    this.color = color;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Sides must be positive numbers');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  switch (figure.shape) {
    case 'rectangle':
      return `A ${figure.color} rectangle - ${figure.getArea().toFixed()}`;
    case 'circle':
      return `A ${figure.color} circle - ${figure.getArea().toFixed(2)}`;
    case 'triangle':
      return `A ${figure.color} triangle - ${figure.getArea().toFixed(2)}`;
    default:
      return 'Unknown shape';
  }
}
