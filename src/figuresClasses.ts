export interface Figure {
  shape: string;
  color: string;
  area: number;
}

type Color = `red` | `green` | `blue`;

export class Triangle implements Figure {
  public shape: string = `triangle`;

  public color: string = '';

  public area: number = 0;

  constructor(a: number, b: number, c: number, color: Color) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('your error message');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    this.area = this.getArea(a, b, c);
    this.color = color;
  }

  public getArea(a: number, b: number, c: number): number {
    const s = (a + b + c) / 2;

    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
}

export class Circle implements Figure {
  public shape: string = `circle`;

  public color: string = ``;

  public area: number = 0;

  constructor(radius: number, color: Color) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number.');
    }

    this.area = this.getArea(radius);
    this.color = color;
  }

  public getArea(radius: number): number {
    return Math.PI * radius * radius;
  }
}

export class Rectangle implements Figure {
  public shape: string = `rectangle`;

  public color: string = ``;

  public area: number = 0;

  constructor(width: number, height: number, color: Color) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }

    this.area = this.getArea(width, height);
    this.color = color;
  }

  getArea(width: number, height: number): number {
    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.area}`;
}
