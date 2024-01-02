export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'triangle';

  constructor(
    public a: number,
    public b: number,
    public c: number,
    public color: 'red' | 'green' | 'blue',
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + c <= b || a + b <= c || c + b <= a) {
      throw new Error('error');
    }
    this.a = a;
    this.a = b;
    this.a = c;
    this.color = color;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c) * 100),
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'circle';

  constructor(
    public radius: number,
    public color: 'red' | 'green' | 'blue',
  ) {
    if (radius <= 0) {
      throw new Error('error');
    }
    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'rectangle';

  constructor(
    public width: number,
    public height: number,
    public color: 'red' | 'green' | 'blue',

  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('error');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape, getArea } = figure;

  return `A ${color} ${shape} - ${getArea()}`;
}
