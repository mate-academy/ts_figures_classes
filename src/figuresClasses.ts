export type Shapes = 'triangle' | 'circle' | 'rectangle';
export type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect side length');
    }

    if (this.isCorrectTriangle()) {
      // eslint-disable-next-line max-len
      throw new Error('The longest side of a triangle should be >= than a sum of two others');
    }
  }

  isCorrectTriangle(): boolean {
    const arrayOfSides = [this.a, this.b, this.c];
    const longestSide = Math.max(...arrayOfSides);

    arrayOfSides.splice(arrayOfSides.indexOf(longestSide), 1);

    const sumOfSmallerSides = arrayOfSides.reduce((a, b) => a + b);

    return longestSide >= sumOfSmallerSides;
  }

  getArea(): number {
    const square: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      square * (square - this.a) * (square - this.b) * (square - this.c),
    );

    return Math.trunc(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be > 0');
    }
  }

  getArea(): number {
    const area = Math.trunc(
      Math.PI * (this.radius ** 2) * 100,
    ) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides of rectangle should be > 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
