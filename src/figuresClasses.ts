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
    const longestSide = Math.max(a, b, c);
    const twoOtersSide = (a + b + c) - longestSide;
    const less = (a <= 0 || b <= 0 || c <= 0);

    if (less || longestSide >= twoOtersSide) {
      throw new Error('The side cannot be less than or equal to zero');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const area = semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c);

    return +(Math.sqrt(area).toFixed(2));
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius cannot be less than or equal to zero');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.floor((Math.PI * (radius ** 2)) * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The side cannot be less than or equal to zero');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
