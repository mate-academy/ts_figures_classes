export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  public color: 'red' | 'green' | 'blue';

  public a: number;

  public b: number;

  public c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('A sides must be greater than zero.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The provided sides do not form a triangle.');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  public color: 'red' | 'green' | 'blue';

  public radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero.');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  public color: 'red' | 'green' | 'blue';

  public width: number;

  public height: number;

  constructor(color: 'red' | 'green' | 'blue', height: number, width: number) {
    if (height <= 0 || width <= 0) {
      throw new Error('Width and height must be greater than zero.');
    }
    this.color = color;
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
