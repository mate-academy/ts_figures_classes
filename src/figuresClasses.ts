export type Color = 'red' | 'green' | 'blue';
export type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: Shape;
}

export type FiguresData = {
  shape: Shape;
  color: Color;
  area: number;
};

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  public area = this.getArea();

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      color === undefined ||
      a === undefined ||
      b === undefined ||
      c === undefined
    ) {
      throw new Error('All values must be entered');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides values must be > 0');
    }

    const sides = [a, b, c];

    sides.splice(sides.indexOf(Math.max(a, b, c), 1));

    if (Math.max(a, b, c) >= sides[0] + sides[1]) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +(
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  public area = this.getArea();

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (color === undefined || radius === undefined) {
      throw new Error('All values must be entered');
    }

    if (radius <= 0) {
      throw new Error('Value of radius must be > 0');
    }
  }

  getArea(): number {
    return +(Math.floor(3.1415926535 * this.radius ** 2 * 100) / 100);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  public area = this.getArea();

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (color === undefined || width === undefined || height === undefined) {
      throw new Error('All values must be entered');
    }

    if (width <= 0 || height <= 0) {
      throw new Error('All sides values must be > 0');
    }
  }

  getArea(): number {
    return +(Math.floor(this.width * this.height * 100) / 100);
  }
}

export function getInfo(figure: FiguresData): string {
  const { shape, color, area } = figure;

  return `A ${color} ${shape} - ${area}`;
}
