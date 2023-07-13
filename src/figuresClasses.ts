type Color = 'red' | 'green' | 'blue';

function truncation(area: number): number {
  const TRUNCATION_PRECISION = 100;

  return Math.floor(area * TRUNCATION_PRECISION) / TRUNCATION_PRECISION;
}

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: 'triangle';

  public color: Color;

  public a: number;

  public b: number;

  public c: number;

  constructor(
    color : Color,
    a: number, b: number, c: number,
  ) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    const sides: number[] = [this.a, this.b, this.c];
    const longest: number = Math.max(this.a, this.b, this.c);

    sides.splice(sides.indexOf(longest));

    const rest: number = sides.reduce((acc, side) => {
      return acc + side;
    }, 0);

    const containsZeroLength: boolean = sides.some((side) => side <= 0);

    if (longest >= rest || containsZeroLength) {
      throw new Error('Ivalid parameters!');
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c));

    return truncation(area);
  }
}

export class Circle {
  public shape: 'circle';

  public color: Color;

  public radius: number;

  constructor(color: Color, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return truncation(area);
  }
}

export class Rectangle {
  public shape: 'rectangle';

  public color: Color;

  public width: number;

  public height: number;

  constructor(color: Color, width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Parameters must be greater than zero!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
