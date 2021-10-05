type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  a?: number;
  b?: number;
  c?: number;
  radius?: number;
  heigth?: number;
  width?: number;
  getArea(): object;
}

export class Triangle {
  shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      !(this.a + this.b > this.c)
      || !(this.b + this.c > this.a)
      || !(this.c + this.a > this.b)
      || this.a <= 0 || this.b <= 0 || this.c <= 0
    ) {
      throw new Error('Those length cannot form a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.round(
      (
        s
        * (s - this.a)
        * (s - this.b)
        * (s - this.c)
      )
      ** 0.5
      * 100,
    ) / 100;
  }
}

export class Circle {
  shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must bigger than 0');
    }
  }

  getArea(): number {
    return Math.round(
      3.14
      * (this.radius ** 2)
      * 100,
    ) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Sides must be bigger than 0');
    }
  }

  getArea(): number {
    return Math.round(
      this.width * this.height * 100,
    ) / 100;
  }
}

export function getInfo(figure: Figure): string {
  switch (figure.shape) {
    case 'triangle':
      return `A ${figure.color} triangle - ${figure.getArea()}`;

    case 'circle':
      return `A ${figure.color} circle - ${figure.getArea()}`;

    case 'rectangle':
      return `A ${figure.color} rectangle - ${figure.getArea()}`;

    default:
      break;
  }

  throw new Error('Invalid figure');
}
