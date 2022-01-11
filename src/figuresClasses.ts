type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
type GetArea = () => number;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: GetArea;
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    readonly color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (!(this.a > 0) || !(this.b > 0) || !(this.c > 0)) {
      throw new Error('Side of triangle should be greater than zero!');
    }

    if ((this.a + this.b) <= this.c
      || (this.a + this.c) <= this.b
      || (this.b + this.c) <= this.a
    ) {
      throw new Error('Entered data is invalid');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(p
      * (p - this.a) * (p - this.b) * (p - this.c)) * 100) / 100;
  }
}

export class Circle {
  readonly shape: Shape = 'circle';

  constructor(
    readonly color: Color,
    private a: number,
  ) {
    if (!(this.a > 0)) {
      throw new Error('Radius of circle should be greater than zero!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.a ** 2) * 100) / 100;
  }
}

export class Rectangle {
  readonly shape: Shape = 'rectangle';

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
