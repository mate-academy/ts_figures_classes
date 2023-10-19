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
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort(
      (length1: number, length2: number) => length1 - length2,
    );

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The side cannot be less than 0');
    }

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(
        'Sides cannot form a triangle',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const semiperimeter = (a + b + c) / 2;

    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - a)
      * (semiperimeter - b)
      * (semiperimeter - c),
    ).toFixed(2);

    return +area;
  }
}

export class Circle implements Figure {
  shape: ShapeType = 'circle';

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius cannot be less than 0');
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return +area;
  }
}

export class Rectangle implements Figure {
  shape: ShapeType = 'rectangle';

  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
