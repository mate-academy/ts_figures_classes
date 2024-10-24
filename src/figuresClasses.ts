type ColorType = 'red' | 'green' | 'blue';
type ShapeType = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: ShapeType;
  color: ColorType;

  getArea(): number;
}

export class Triangle implements Figure {
  private sides: number[];

  shape: ShapeType = 'triangle';

  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.sides = [a, b, c];

    const longestSide = Math.max(a, b, c);

    const sumOfOtherSides =
      this.sides.reduce((total, side) => total + side, 0) - longestSide;

    if (a <= 0 || b <= 0 || c <= 0 || longestSide >= sumOfOtherSides) {
      throw new Error(
        'one of the sides is <= 0 or longestSide >= sumOfOtherSides',
      );
    }
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;

    const area: number = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: ShapeType = 'circle';

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('radius cannot be <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: ShapeType = 'rectangle';

  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('width || height cannot be <= 0');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
