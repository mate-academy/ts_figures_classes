type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

const roundedSquare = (square: number): number => {
  return Math.floor(square * 100) / 100;
};

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Sides of triangle might be more then zero');
    }

    const maxVal = Math.max(this.a, this.b, this.c);

    if (maxVal >= (this.a + this.b + this.c) - maxVal) {
      throw new Error(
        'Passed properties can\'t create a triangle',
      );
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundedSquare(square);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const square: number = this.radius ** 2 * Math.PI;

    return roundedSquare(square);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Size might be less or equal zero!');
    }
  }

  getArea(): number {
    const square: number = this.width * this.height;

    return roundedSquare(square);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
