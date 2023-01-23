enum GetShape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum GetColor {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: GetShape;
  color: GetColor;
  getArea(): number;
}

function checkInvalidSides(...args: number[]): boolean {
  const sorted = args.sort((x, y) => x - y);

  return (sorted[0] + sorted[1]) <= sorted[2];
}

function checkZeroValues(...args: number[]): boolean {
  return args.some((el) => el <= 0);
}

export class Triangle implements Figure {
  shape = GetShape.Triangle;

  constructor(
    public color: GetColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (checkZeroValues(a, b, c) || checkInvalidSides(a, b, c)) {
      throw new Error('Invalid input data');
    }
  }

  getArea(): number {
    const semiPer = (this.a + this.b + this.c) / 2;
    const triangleSquare = Math.sqrt(semiPer
      * (semiPer - this.a)
      * (semiPer - this.b)
      * (semiPer - this.c));

    return Math.floor(triangleSquare * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = GetShape.Circle;

  constructor(
    public color: GetColor,
    public radius: number,
  ) {
    if (checkZeroValues(radius)) {
      throw new Error('Invalid input data');
    }
  }

  getArea(): number {
    const circleSquare = Math.PI * this.radius ** 2;

    return Math.floor(circleSquare * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = GetShape.Rectangle;

  constructor(
    public color: GetColor,
    public width: number,
    public height: number,
  ) {
    if (checkZeroValues(width, height)) {
      throw new Error('Invalid input data');
    }
  }

  getArea(): number {
    const rectangleSquare = this.width * this.height;

    return Math.floor(rectangleSquare * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
