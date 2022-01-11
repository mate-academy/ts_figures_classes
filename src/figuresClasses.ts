type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Review your input values and try again');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.b + this.a) {
      throw new Error('Review your input values and try again');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(
      p * ((p - this.a) * (p - this.b) * (p - this.c)),
    );

    return Math.round(100 * triangleArea) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(public color: string, public radius: number) {
    if (this.radius <= 0) {
      throw new Error('Review your input values and try again');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * (this.radius ** 2);

    return Math.floor(100 * circleArea) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Review your input values and try again');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return Math.round(100 * rectangleArea) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
