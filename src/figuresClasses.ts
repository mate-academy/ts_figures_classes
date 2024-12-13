export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c];
    const maxSide = Math.max(a, b, c);
    const leftSides = sides.filter((side) => side !== maxSide);
    const sumLeftSides = leftSides.reduce((acc, side) => acc + side);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('One of the sides is equal or less than 0');
    }

    if (sumLeftSides <= maxSide) {
      throw new Error(
        'One of the sides is equal or longer than sum of two others',
      );
    }
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(
          semiPerimetr *
            (semiPerimetr - this.a) *
            (semiPerimetr - this.b) *
            (semiPerimetr - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can not be equal or less than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Some of your sides are equal or less than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
