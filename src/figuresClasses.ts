type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape ='triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.validateTriangleSides();
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    if (+square.toFixed(2) === square) {
      return square;
    }

    return +square.toFixed(2);
  }

  validateTriangleSides(): void {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('The length is zero or the longet'
      + ' side of a triangle is less or equel than a sum of two others');
    }

    const longestSide = Math.max(this.a, this.b, this.c);
    let sumShortest: number = 0;

    switch (longestSide) {
      case this.a:
        sumShortest += this.b + this.c;
        break;
      case this.b:
        sumShortest += this.a + this.c;
        break;
      default:
        sumShortest += this.b + this.a;
        break;
    }

    if (longestSide >= sumShortest) {
      throw new Error('The longest side of a triangle'
      + ' is less than or equal to a sum of two others');
    }
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    this.validateRadiusSize();
  }

  getArea(): number {
    const square = Math.PI * this.radius * this.radius;
    const roundedSquare = Math.floor(square * 100) / 100;

    if (roundedSquare === square) {
      return square;
    }

    return roundedSquare;
  }

  validateRadiusSize(): void {
    if (this.radius <= 0) {
      throw new Error('The length is zero or less');
    }
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,

  ) {
    this.validateRectangleSides();
  }

  getArea(): number {
    const square = this.width * this.height;

    if (+square.toFixed(2) === square) {
      return square;
    }

    return +square.toFixed(2);
  }

  validateRectangleSides(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('The length is zero');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
