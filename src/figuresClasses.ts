enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red'| 'green'| 'blue';

function roundNumber(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(`The longest side of triangle
      should be greater or equal than a sum of two others.
      Kindly provide valid length of triangle side`);
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    return roundNumber(Math.sqrt(semiperimeter
      * (semiperimeter - this.a) * (semiperimeter - this.b)
    * (semiperimeter - this.c)));
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Circle radius should be a positive number');
    }
  }

  getArea(): number {
    return roundNumber(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Length of Rectangle side should be a positive number');
    }
  }

  getArea(): number {
    return roundNumber(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
