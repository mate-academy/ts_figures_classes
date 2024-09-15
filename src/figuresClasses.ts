interface Figure {
  getArea(): number;
  shape: string;
  color: string;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  public color: string;

  private a: number;

  private b: number;

  private c: number;

  constructor(color: string, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'Each side of the triangle must be a positive number greater than 0',
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `The provided dimensions ${a}, ${b}, and ${c} do not meet the triangle inequality theorem and can't form a triangle.`,
      );
    }
  }

  public getArea(): number {
    const s = (1 / 2) * (this.a + this.b + this.c);
    const square = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +square.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  public color: string;

  private radius: number;

  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error(
        'The radius of a circle must be a positive number greater than zero.',
      );
    }
  }

  public getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  public color: string;

  private width: number;

  private height: number;

  constructor(color: string, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error(
        'Width,height of a rectangle must be positive numbers greater than 0',
      );
    }
  }

  public getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
