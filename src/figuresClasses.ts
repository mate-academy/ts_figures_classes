type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape = 'triangle';

  color: Color;

  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const NotPositive = a <= 0 || b <= 0 || c <= 0;
    const isNotTriangle = a + b <= c || a + c <= b || b + c <= a;

    if (NotPositive || isNotTriangle) {
      throw new Error('Incorrect triangle values');
    }
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public readonly shape = 'circle';

  color: Color;

  constructor(
    color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect circle radius');
    }
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape = 'rectangle';

  color: Color;

  constructor(
    color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect rectangle values');
    }
    this.color = color;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
