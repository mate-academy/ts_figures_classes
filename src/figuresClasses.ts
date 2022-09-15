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
    const max = Math.max(a, b, c);
    let sum = 0;

    if (a === max) {
      sum = b + c;
    } else if (b === max) {
      sum = a + c;
    } else {
      sum = a + b;
    }

    if (a <= 0 || b <= 0 || c <= 0 || max >= sum) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    const param = (this.a + this.b + this.c) / 2;
    // eslint-disable-next-line max-len
    const area = Math.sqrt(param * (param - this.a) * (param - this.b) * (param - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid radius value');
    }
  }

  getArea(): number {
    return Math.floor((this.radius ** 2) * Math.PI * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid value of some side');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
