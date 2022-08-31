type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: string;
  shape: string;
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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides are not valid (side <= 0)');
    }

    const sides = [this.a, this.b, this.c];

    let longestSide: number = sides[0];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < sides.length; i++) {
      if (sides[i] > longestSide) {
        longestSide = sides[i];
      }

      if (i === 2) {
        sides.splice(sides.indexOf(longestSide), 1);
      }
    }

    if (longestSide >= sides.reduce((
      sum: number,
      currentSide:number,
    ) => sum + currentSide)) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimeter
    * (semiPerimeter - this.a)
  * (semiPerimeter - this.b)
  * (semiPerimeter - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is not valid!');
    }
  }

  getArea(): number {
    return Math.floor(100 * (Math.PI * this.radius ** 2)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Sides are not positive!');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
