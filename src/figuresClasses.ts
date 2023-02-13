type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'circle' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([a, b, c].some((side: number) => (side <= 0))) {
      throw new Error('Sides must be greater than zero');
    }

    const longestSide = Math.max(...[a, b, c]);
    const sumOfTwoOthersSides = [a, b, c]
      .reduce((acc, x) => acc + x, 0)
        - longestSide;

    if (longestSide >= sumOfTwoOthersSides) {
      throw new Error(`The longest side of a triangle
        should be more than a sum of two others`);
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(semiperimeter * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width or Height must be greater than zero');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
