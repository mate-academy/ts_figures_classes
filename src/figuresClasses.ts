type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: Color;
  getArea(): number;
}

function checkIfLengthValid(...length: number[]): boolean {
  return length.every((lengthItem: number) => lengthItem > 0);
}

function roundDownTo(num: number, figNum: number): number {
  const multiplier = 10 ** figNum;

  return Math.floor(num * multiplier) / multiplier;
}

export class Triangle implements Figure {
  private area: number;

  public readonly shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    const [longSide, midSide, shortSide] = [a, b, c].sort(
      (side1, side2) => side2 - side1,
    );
    const areSidesValid = longSide < midSide + shortSide;
    const areLengthValid = checkIfLengthValid(a, b, c);

    if (!areSidesValid || !areLengthValid) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.area = roundDownTo(this.calculateArea(), 2);
  }

  getArea(): number {
    return this.area;
  }

  private calculateArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (s * (s - this.a) * (s - this.b) * (s - this.c)) ** 0.5;
  }
}

export class Circle implements Figure {
  private area: number;

  public readonly shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    const isRadiusValid = checkIfLengthValid(radius);

    if (!isRadiusValid) {
      throw new Error(`radius ${radius} can't form a circle`);
    }

    this.area = roundDownTo(this.calculateArea(), 2);
  }

  getArea(): number {
    return this.area;
  }

  private calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class Rectangle implements Figure {
  private area: number;

  public readonly shape = 'rectangle';

  constructor(
    public color: Color,
    private height: number,
    private width: number,
  ) {
    const areDimensionValid = checkIfLengthValid(height, width);

    if (!areDimensionValid) {
      throw new Error(`${height} and ${width} can't form a rectangle`);
    }

    this.area = roundDownTo(this.calculateArea(), 2);
  }

  getArea(): number {
    return this.area;
  }

  calculateArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
