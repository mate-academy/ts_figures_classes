type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Shape;
  color: Color;

  // a method getArea that returns
  // the area of the figure rounded down to hundredths.
  getArea(): number;
}

const validateLength = (length: number): void => {
  if (length <= 0) {
    throw new Error("Length can't be negative");
  }
};

const validateTriangle = (a: number, b: number, c: number): void => {
  if (a + b <= c || a + c <= b || b + c <= a) {
    throw new Error("Sides 1, 2 and 3 can't form a triangle");
  }
};

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validateLength(a);
    validateLength(b);
    validateLength(c);
    validateTriangle(a, b, c);
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    validateLength(radius);
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    validateLength(width);
    validateLength(height);
  }

  getArea(): number {
    const area = Math.floor(this.width * this.height);

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
