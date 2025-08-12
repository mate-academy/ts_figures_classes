type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  public color: Color;

  public a: number;

  public b: number;

  public c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0) {
      throw new Error(`Side a must be a positive number, got ${a}.`);
    }

    if (b <= 0) {
      throw new Error(`Side b must be a positive number, got ${b}.`);
    }

    if (c <= 0) {
      throw new Error(`Side c must be a positive number, got ${c}.`);
    }

    if (a + b <= c) {
      throw new Error(
        `Triangle inequality violated: side a (${a}) + side b (${b}) <= side c (${c}).`,
      );
    }

    if (a + c <= b) {
      throw new Error(
        `Triangle inequality violated: side a (${a}) + side c (${c}) <= side b (${b}).`,
      );
    }

    if (b + c <= a) {
      throw new Error(
        `Triangle inequality violated: side b (${b}) + side c (${c}) <= side a (${a}).`,
      );
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  public color: Color;

  public radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error(`Radius must be a positive number, got ${radius}.`);
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  public color: Color;

  public width: number;

  public height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0) {
      throw new Error(`Width must be a positive number, got ${width}.`);
    }

    if (height <= 0) {
      throw new Error(`Height must be a positive number, got ${height}.`);
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(fig: Figure): string {
  return `A ${fig.color} ${fig.shape} - ${fig.getArea()}`;
}
