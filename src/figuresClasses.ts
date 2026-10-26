type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export function roundDownToHundredths(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  readonly sides: number[];

  readonly sortedSides: number[];

  readonly longestSide: number;

  readonly sumSides: number;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.sides = [this.a, this.b, this.c];
    this.sortedSides = this.sortSides();
    this.longestSide = this.getLongestSide();
    this.sumSides = this.sumTwoSides();

    const hasInvalidSide: boolean = this.sides.some(
      (side: number) => side <= 0,
    );

    if (hasInvalidSide) {
      throw new Error('All sides should be greater than 0.');
    }

    if (this.longestSide >= this.sumSides) {
      throw new Error(
        `Sides ${this.a}, ${this.b}, ${this.c} cannot form a ${this.shape}.`,
      );
    }
  }

  private sortSides(): number[] {
    this.sides.sort((a: number, b: number) => a - b);

    return this.sides;
  }

  private getLongestSide(): number {
    return this.sortedSides[2];
  }

  private sumTwoSides(): number {
    return this.sortedSides[0] + this.sortedSides[1];
  }

  getArea(): number {
    const s: number = (this.longestSide + this.sumSides) / 2;
    const triangleArea: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return roundDownToHundredths(triangleArea);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius should be greater than 0.');
    }
  }

  getArea(): number {
    const areaCircle: number = Math.PI * this.radius ** 2;

    return roundDownToHundredths(areaCircle);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height should be greater than 0.');
    }
  }

  getArea(): number {
    const areaRect: number = this.width * this.height;

    return roundDownToHundredths(areaRect);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
