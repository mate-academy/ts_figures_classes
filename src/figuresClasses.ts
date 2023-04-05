type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string,
  color: Color,
  getArea() : number,
}

export class Triangle implements Figure {
  shape = 'triangle';

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
    const semiPer = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(
      semiPer * (semiPer - this.a) * (semiPer - this.b) * (semiPer - this.c),
    );

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

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
  shape = 'rectangle';

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
