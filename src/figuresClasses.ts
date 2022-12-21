
type Shape = 'triangle'| 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!this.isValid()) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  private isValid(): boolean {
    const { a, b, c } = this;

    return !((a <= 0 || b <= 0 || c <= 0)
    || (a + b <= c
    || a + c <= b || b + c <= a));
  }

  shape: Shape = 'triangle';

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`radius ${radius} can't form a circle`);
    }
  }

  shape: Shape = 'circle';

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`sides ${width} and ${height} can't form a rectangle`);
    }
  }

  shape: Shape = 'rectangle';

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
