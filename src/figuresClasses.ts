type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (c >= a + b || b >= a + c || a >= b + c) {
      throw new Error(`
        Error: sides ${a}, ${b}, ${c} can't form a ${this.shape}
      `);
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`
        Error: sides ${a}, ${b}, ${c} can't form a ${this.shape}
      `);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const aDiff = p - a;
    const bDiff = p - b;
    const cDiff = p - c;

    return Math.round(Math.sqrt(p * aDiff * bDiff * cDiff) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Error. The radius can't form a ${this.shape}`);
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`
        Error. Your width and height can't form a ${this.shape}
      `);
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
