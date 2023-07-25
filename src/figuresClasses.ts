export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number
}

export class Triangle implements Figure {
  shape: 'triangle';

  area!: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    this.color = color;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Error');
    }

    const maxSide = Math.max(a, b, c);
    const sumOfSides = a + b + c - maxSide;

    if (maxSide >= sumOfSides) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    this.area = Math.floor(area * 100) / 100;

    return this.area;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  area!: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.shape = 'circle';
    this.color = color;

    if (this.radius <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    this.area = Math.floor(area * 100) / 100;

    return this.area;
  }
}

export class Rectangle {
  shape: 'rectangle';

  area!: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    this.color = color;

    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    this.area = Math.floor(area * 100) / 100;

    return this.area;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
