export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea: () => number
}

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be a positive numbers');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('This triangle cannot exist');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return Math.trunc(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.shape = 'circle';
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Radius of cicle mush be more than 0');
    }
  }

  getArea(): number {
    return Math.trunc((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    this.shape = 'rectangle';
    this.a = a;
    this.b = b;

    if (a <= 0 || b <= 0) {
      throw new Error('Sides must be more than 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
