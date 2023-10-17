type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort(
      (length1: number, length2: number) => length1 - length2,
    );

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Any side can not be 0 or less');
    }

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(
        `Sides ${sides[0]}, ${sides[1]} and ${sides[2]} can't form a triangle`,
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
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can not be 0 or less');
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return +area;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Negative values for side of rectangle are not allowd');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
