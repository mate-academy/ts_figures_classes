type ShapeType = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: ShapeType = 'triangle';

  constructor(
    public color: ColorType,
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
  ) {
    if (a <= 0) {
      throw new Error(`Side 'a' must be a positive number, but got ${a}.`);
    }

    if (b <= 0) {
      throw new Error(`Side 'b' must be a positive number, but got ${b}.`);
    }

    if (c <= 0) {
      throw new Error(`Side 'c' must be a positive number, but got ${c}.`);
    }

    const longest = Math.max(a, b, c);
    const sumOthers = a + b + c - longest;

    if (longest >= sumOthers) {
      throw new Error(
        `Invalid triangle: the longest side (${longest}) is greater than or equal to the sum of the other two sides (${sumOthers}).`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: ShapeType = 'circle';

  constructor(
    public color: ColorType,
    public readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius must be a positive number, but got ${radius}.`);
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: ShapeType = 'rectangle';

  constructor(
    public color: ColorType,
    public readonly width: number,
    public readonly height: number,
  ) {
    if (width <= 0) {
      throw new Error(`Width must be a positive number, but got ${width}.`);
    }

    if (height <= 0) {
      throw new Error(`Height must be a positive number, but got ${height}.`);
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
