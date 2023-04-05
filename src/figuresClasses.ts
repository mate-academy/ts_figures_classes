type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea() : number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const validSides = a <= 0 || b <= 0 || c <= 0;
    const longestSide = Math.max(a, b, c);
    const validLongestSide = longestSide >= (a + b + c) - longestSide;

    if (validSides || validLongestSide) {
      throw new Error('Sides must be greater than zero!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const triangleArea = Math.sqrt(
      semiPerimeter * (semiPerimeter - a)
      * (semiPerimeter - b) * (semiPerimeter - c),
    );

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero!');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * this.radius ** 2;

    return Math.floor(circleArea * 100) / 100;
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
      throw new Error('Width and height must be greater than zero!');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return Math.floor(rectangleArea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
