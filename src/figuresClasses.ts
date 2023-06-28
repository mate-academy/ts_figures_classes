export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'triangle';

  area: number;

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.area = this.getArea();

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const s: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'circle';

  area: number;

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;
    this.area = this.getArea();

    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const s = Math.PI * this.radius ** 2;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'rectangle';

  area: number;

  constructor(
    public color: Figure['color'],
    public width: number,
    public height,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.area = this.getArea();

    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const s = this.width * this.height;

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.area}`;
}
