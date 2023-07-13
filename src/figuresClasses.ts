export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Figure['shape'] = 'triangle';

  public a: number;
  public b: number;
  public c: number;

  constructor(
    public color: Figure['color'],
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Entered sides a, b, c must be able to form a trangle');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  public shape: Figure['shape'] = 'circle';
  public radius: number;

  constructor(
    public color: Figure['color'],
    radius: number,
  ) {
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Radius must be a positive number greater than zero.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;
    const roundedArea = Math.floor(area * 100) / 100;

    return Number(roundedArea.toFixed(2));
  }
}

export class Rectangle implements Figure {
  public shape: Figure['shape'] = 'rectangle';
  public width: number;
  public height: number;

  constructor(
    public color: Figure['color'],
    width: number,
    height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'Width and height must be greater than 0 to form a rectangle',
      );
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const { shape, color } = figure;

  return `A ${color} ${shape} - ${area}`;
}
