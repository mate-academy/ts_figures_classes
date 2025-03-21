export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  readonly color: 'red' | 'green' | 'blue';

  protected a: number;

  protected b: number;

  protected c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than zero.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle.`);
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.round(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  readonly color: 'red' | 'green' | 'blue';

  protected radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero.');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  readonly color: 'red' | 'green' | 'blue';

  protected width: number;

  protected height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero.');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
