export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('wrong parameters');
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error('wrong parameters');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('wrong parameters');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('wrong parameters');
    }
  }

  getArea(): number {
    return parseFloat((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
