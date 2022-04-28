enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    if (this.a < 0 || this.b < 0 || this.c < 0) {
      throw new Error('Sides can not be less 0');
    }

    const longest = Math.max(this.a, this.b, this.c);
    const sumOfSides = this.a + this.b + this.c;

    if (longest >= sumOfSides - longest) {
      throw new Error('Incorrect values of sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const res = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(res * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (this.radius < 0) {
      throw new Error('Incorrect value of radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    this.shape = Shape.Rectangle;

    if (this.heigth < 0 || this.width < 0) {
      throw new Error('Incorrect values');
    }
  }

  getArea(): number {
    return Math.floor(this.heigth * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
