enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
enum Color {
  red,
  green,
  blue,
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape = Shape.Triangle;

  constructor(
    readonly color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    const maxValue = Math.max(this.a, this.b, this.c);

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || maxValue >= (this.a + this.b + this.c) - maxValue) {
      throw new Error('Entered data isn\'t valid');
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c))
      * 100) / 100;
  }
}

export class Circle {
  readonly shape: Shape = Shape.Circle;

  constructor(
    readonly color: Color,
    private radius: number,
  ) {
    if (!(this.radius > 0)) {
      throw new Error('Radius of circle should be greater than zero!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  readonly shape: Shape = Shape.Rectangle;

  constructor(
    readonly color: Color,
    private a: number,
    private b: number,
  ) {
    if (!(this.a > 0) || !(this.b > 0)) {
      throw new Error('Side of rectangle should be greater than zero!');
    }
  }

  getArea(): number {
    return Math.floor((this.a * this.b) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
