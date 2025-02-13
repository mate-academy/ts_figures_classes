export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export abstract class BaseFigure implements Figure {
  abstract readonly shape: 'triangle' | 'circle' | 'rectangle';
  abstract getArea(): number;

  constructor(public readonly color: 'red' | 'green' | 'blue') {
    if (!['red', 'green', 'blue'].includes(color)) {
      throw new Error(`Invalid color: ${color}`);
    }
  }

  protected validatePositive(value: number, name: string): void {
    if (value <= 0) {
      throw new Error(`${name} cannot be a negative number or equal to zero`);
    }
  }

  protected roundToHundredths(value: number): number {
    return Math.floor(value * 100) / 100;
  }
}

export class Triangle extends BaseFigure {
  public shape: 'triangle' = 'triangle';

  constructor(
    color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    super(color);

    this.validatePositive(a, 'A side ofthe triangle');
    this.validatePositive(b, 'B side ofthe triangle');
    this.validatePositive(c, 'C side ofthe triangle');

    const maxSide = Math.max(a, b, c);
    const sumOfSides = a + b + c;

    if (maxSide >= sumOfSides - maxSide) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const shapeArea = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return this.roundToHundredths(shapeArea);
  }
}

export class Circle extends BaseFigure {
  public shape: 'circle' = 'circle';

  constructor(
    color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    super(color);

    this.validatePositive(radius, 'Radius');
  }

  getArea(): number {
    return this.roundToHundredths(Math.PI * this.radius ** 2);
  }
}

export class Rectangle extends BaseFigure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    super(color);

    this.validatePositive(width, 'Width');
    this.validatePositive(height, 'Height');
  }

  getArea(): number {
    return this.roundToHundredths(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
