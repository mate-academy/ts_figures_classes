type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape;

  private area: number;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides of triangle must be positive numbers.');
    }

    if (a + b === c || b + c === a || c + a === b) {
      throw new Error(`Sides ${a}, ${b} and ${c} cannot form a triangle`);
    }

    const s = (this.a + this.b + this.c) / 2;

    this.area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: Shape;

  private area: number = 0;

  constructor(
    public color: Color,
    private r: number,
  ) {
    this.shape = 'circle';

    if (r <= 0) {
      throw new Error('Radius of circle must be positive number.');
    }

    this.area = Math.PI * this.r ** 2;
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape;

  private area: number;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error(
        'Width and height of rectangle must be positive numbers.',
      );
    }

    this.area = this.width * this.height;
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
