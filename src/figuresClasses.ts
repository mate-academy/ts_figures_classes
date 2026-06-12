type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

abstract class BaseFigure {
  protected validateLengths(lengths: number[]): void {
    if (lengths.some((length) => length <= 0)) {
      throw new Error('any length is <= 0');
    }
  }

  protected floorToHundredths(value: number): number {
    return Math.floor(value * 100) / 100;
  }
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle extends BaseFigure implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    super();
    this.validateLengths([a, b, c]);

    const max = Math.max(a, b, c);

    if (max >= a + b + c - max) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return this.floorToHundredths(area);
  }
}

export class Circle extends BaseFigure implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    super();
    this.validateLengths([radius]);
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return this.floorToHundredths(area);
  }
}

export class Rectangle extends BaseFigure implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    super();
    this.validateLengths([width, height]);
  }

  getArea(): number {
    const area = this.width * this.height;

    return this.floorToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
