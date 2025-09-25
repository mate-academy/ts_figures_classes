export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

abstract class FigureBase implements Figure {
  public color: 'red' | 'green' | 'blue';

  public shape: 'triangle' | 'circle' | 'rectangle';

  constructor(
    color: 'red' | 'green' | 'blue',
    shape: 'triangle' | 'circle' | 'rectangle',
  ) {
    this.color = color;
    this.shape = shape;
  }

  protected roundToHundredths(value: number): number {
    return Math.floor(value * 100) / 100;
  }

  abstract getArea(): number;
}

export class Rectangle extends FigureBase {
  constructor(
    color: 'red' | 'green' | 'blue',
    private width: number,
    private height: number,
  ) {
    super(color, 'rectangle');

    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle sides must be > 0');
    }
  }

  getArea(): number {
    return this.roundToHundredths(this.width * this.height);
  }
}

export class Circle extends FigureBase {
  constructor(
    color: 'red' | 'green' | 'blue',
    private radius: number,
  ) {
    super(color, 'circle');

    if (radius <= 0) {
      throw new Error('Circle radius must be > 0');
    }
  }

  getArea(): number {
    return this.roundToHundredths(Math.PI * this.radius * this.radius);
  }
}

export class Triangle extends FigureBase {
  constructor(
    color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
    private c: number,
  ) {
    super(color, 'triangle');

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be > 0');
    }

    const sides = [a, b, c].sort((x, y) => y - x);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(`Triangle inequality violated: ${a}, ${b}, ${c}`);
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return this.roundToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
