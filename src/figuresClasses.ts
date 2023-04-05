type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green'| 'blue';

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
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Some of the lengths are lover or equal 0');
    }

    if (this.a >= b + c || this.b >= a + c || this.c >= a + b) {
      throw new Error('Side should be less then sum of each other sides');
    }
  }

  getArea(): number {
    const semiPerimetr = 0.5 * (this.a + this.b + this.c);

    const area = Math.sqrt(
      semiPerimetr
      * (semiPerimetr - this.a)
      * (semiPerimetr - this.b)
      * (semiPerimetr - this.c),
    );

    return +area.toFixed(2);
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius of circlu is lover or equal 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Some of the lengths are lover or equal 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return +area.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
