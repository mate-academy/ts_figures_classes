type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

function validatePositive(value: number, name: string): void {
  if (value <= 0) {
    throw new Error(`${name} cannot be less than or equal to zero`);
  }
}

function validateTriangleSides(a: number, b: number, c: number): void {
  const maxLength: number = Math.max(a, b, c);
  const totalLength: number = a + b + c;

  if (maxLength >= totalLength - maxLength) {
    throw new Error("Sides a, b, and c can't form a triangle");
  }
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validatePositive(a, 'Side a');
    validatePositive(b, 'Side b');
    validatePositive(c, 'Side c');
    validateTriangleSides(a, b, c);
  }

  getArea(): number {
    const semiperimeter: number = 0.5 * (this.a + this.b + this.c);
    const area: number = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    validatePositive(radius, 'Radius');
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
    validatePositive(width, 'Width');
    validatePositive(height, 'Height');
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
