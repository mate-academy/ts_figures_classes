export type ColorType = 'red' | 'green' | 'blue';
export type ShapeType = 'circle' | 'rectangle' | 'triangle';

export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea(): number;
}

function validatePositive(value: number, name: string): void {
  if (value <= 0) {
    throw new Error(`${name} must be greater than 0.`);
  }
}

function validateTriangleInequality(a: number, b: number, c: number): void {
  if (a + b <= c || a + c <= b || b + c <= a) {
    throw new Error(
      `Triangle sides do not satisfy the triangle inequality:
       a + b <= c or a + c <= b or b + c <= a.`,
    );
  }
}

export class Triangle implements Figure {
  public shape: ShapeType = 'triangle';

  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validatePositive(a, "Triangle side 'a'");
    validatePositive(b, "Triangle side 'b'");
    validatePositive(c, "Triangle side 'c'");
    validateTriangleInequality(a, b, c);
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: ShapeType = 'rectangle';

  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
  ) {
    validatePositive(width, 'Rectangle width');
    validatePositive(height, 'Rectangle height');
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: ShapeType = 'circle';

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    validatePositive(radius, 'Circle radius');
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
