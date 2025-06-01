type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: Color;

  constructor(
    color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be more than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle: one side is too long');
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: Color;

  constructor(
    color: Color,
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be more than 0');
    }

    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    const square = Math.PI * this.radius * this.radius;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: Color;

  constructor(
    color: Color,
    protected width: number,
    protected height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be more than 0');
    }

    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    const square = this.width * this.height;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  if (
    figure.shape === 'triangle' ||
    figure.shape === 'circle' ||
    figure.shape === 'rectangle'
  ) {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  }

  return 'Unknown figure type';
}
