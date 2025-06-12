type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Either side must not be less than or equal to zero.');
    }

    const sides: number[] = [this.a, this.b, this.c];
    const bigSide: number = Math.max(...sides);
    const sumOfOtherSides: number = sides.reduce(
      (acc: number, side: number): number =>
        side !== bigSide ? acc + side : acc,
      0,
    );

    if (bigSide >= sumOfOtherSides) {
      throw new Error(
        `The length of the longest side cannot exceed the sum of
          the lengths of the other two sides.`,
      );
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must not be less than or equal to zero.');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
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
      throw new Error('Either side must not be less than or equal to zero.');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const formattedArea = Number.isInteger(area) ? area : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}
